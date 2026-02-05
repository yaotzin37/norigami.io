#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const glob = require('glob');
const sharp = require('sharp');
const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);

async function ensureDir(dir){ if(!fs.existsSync(dir)) await mkdir(dir, { recursive:true }) }
function findFiles(pattern){ return new Promise((res, rej)=> glob(pattern, (err, files)=> err?rej(err):res(files))) }

async function backupFiles(files, backupDir){
  await ensureDir(backupDir);
  for(const f of files){
    const dest = path.join(backupDir, path.relative(process.cwd(), f));
    await ensureDir(path.dirname(dest));
    await copyFile(f, dest);
  }
}

async function toWebp(file, quality=80){
  const ext = path.extname(file).toLowerCase();
  const out = file.replace(/\.[a-z0-9]+$/i, '.webp');
  try{
    if(ext === '.svg'){
      const buffer = await fs.promises.readFile(file);
      await sharp(buffer).webp({quality}).toFile(out);
    } else {
      await sharp(file).webp({quality}).toFile(out);
    }
    return out;
  }catch(err){
    console.warn('Failed to convert', file, err.message);
    return null;
  }
}

async function main(){
  const root = path.resolve(process.cwd(),'src','assets','images');
  if(!fs.existsSync(root)){
    console.error('No images dir found at', root);
    process.exit(1);
  }
  const patterns = ['**/*.png','**/*.jpg','**/*.jpeg','**/*.svg'];
  let files = [];
  for(const p of patterns){ files = files.concat(await findFiles(path.join(root,p))) }
  files = files.filter(f => !f.endsWith('.webp'));
  if(files.length === 0){ console.log('No files found to convert'); return }

  const now = new Date().toISOString().slice(0,10);
  const backupDir = path.join(process.cwd(),'backup',`webp-${now}`);
  await backupFiles(files, backupDir);
  console.log(`Backed up ${files.length} files to ${backupDir}`);

  let created = 0;
  for(const f of files){
    const out = await toWebp(f, 80);
    if(out) { created++; console.log('Created', out) }
  }
  console.log(`WebP conversion complete. Created ${created} files.`);
}

main().catch(err=>{ console.error(err); process.exit(1) })
