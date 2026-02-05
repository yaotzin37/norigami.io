#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function slugify(str){
  return String(str).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')
}

function readJSON(file){
  return JSON.parse(fs.readFileSync(file,'utf8'))
}

function ensureDir(dir){ if(!fs.existsSync(dir)) fs.mkdirSync(dir,{ recursive:true }) }

async function main(){
  const args = process.argv.slice(2);
  const importDir = args[0] || 'import_data';
  const dry = args.includes('--dry');

  const repoRoot = path.resolve(__dirname,'..');
  const menuFile = path.join(repoRoot,'src','data','menu.json');
  const backupDir = path.join(repoRoot,'backup');

  if(!fs.existsSync(importDir)){
    console.error('Directorio de importación no existe:', importDir);
    console.error('Sube tus archivos JSON a', importDir);
    process.exit(1);
  }

  let baseMenu = [];
  if(fs.existsSync(menuFile)){
    try{ baseMenu = readJSON(menuFile) }catch(e){ console.error('Error leyendo menu.json:', e); process.exit(1) }
  }

  const files = fs.readdirSync(importDir).filter(f => f.endsWith('.json'));
  if(files.length === 0){ console.error('No se encontraron archivos .json en', importDir); process.exit(1) }

  let imported = [];
  for(const f of files){
    const p = path.join(importDir,f);
    try{
      const data = readJSON(p);
      if(Array.isArray(data)) imported = imported.concat(data);
      else if(data.menu && Array.isArray(data.menu)) imported = imported.concat(data.menu);
      else if(data.items && Array.isArray(data.items)) imported = imported.concat(data.items);
      else {
        // if object, try to find arrays inside
        const arr = Object.values(data).find(v => Array.isArray(v));
        if(arr) imported = imported.concat(arr);
        else console.warn('Formato no reconocido en', f);
      }
    }catch(e){ console.warn('Error parseando', f, e.message) }
  }

  // normalize and dedupe by id or slug
  const normalize = item => {
    const out = Object.assign({}, item);
    out.id = out.id || out.sku || slugify(out.name || out.title || JSON.stringify(out).slice(0,30));
    out.name = out.name || out.title || 'Sin nombre';
    // price to cents if looks like number in units
    if(out.price && typeof out.price === 'number' && out.price < 1000) out.price = Math.round(out.price * 100);
    out.price = out.price || 0;
    if(out.category && typeof out.category === 'object') out.category = out.category.id || out.category.name;
    out.images = out.images || (out.image ? [out.image] : []);
    return out;
  }

  const merged = [...baseMenu];
  const indexById = new Map(merged.map(i=>[i.id,i]));
  for(const it of imported){
    const n = normalize(it);
    if(indexById.has(n.id)){
      // merge shallowly
      const existing = indexById.get(n.id);
      Object.assign(existing, n);
    } else {
      indexById.set(n.id, n);
      merged.push(n);
    }
  }

  // backup
  ensureDir(backupDir);
  const now = new Date().toISOString().slice(0,10);
  const backupFile = path.join(backupDir,`menu-backup-${now}.json`);
  fs.writeFileSync(backupFile, JSON.stringify(baseMenu, null, 2));

  if(dry){
    console.log(`Dry run complete. Found ${imported.length} items. Merged total would be ${merged.length}. Backup saved to ${backupFile}`);
    process.exit(0);
  }

  fs.writeFileSync(menuFile, JSON.stringify(merged, null, 2));
  console.log(`Import complete. Imported ${imported.length} items. New menu size: ${merged.length}. Backup: ${backupFile}`);
}

main().catch(err=>{ console.error(err); process.exit(1) })
