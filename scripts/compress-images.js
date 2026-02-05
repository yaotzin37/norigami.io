#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);
const glob = require('glob');
const { optimize } = require('svgo');
const sharp = require('sharp');

async function ensureDir(dir){ if(!fs.existsSync(dir)) await mkdir(dir, { recursive:true }) }

async function backupFiles(files, backupDir){
  await ensureDir(backupDir);
  for(const f of files){
    const dest = path.join(backupDir, path.relative(process.cwd(), f));
    await ensureDir(path.dirname(dest));
    await copyFile(f, dest);
  }
}

function findFiles(pattern){ return new Promise((res, rej)=> glob(pattern, (err, files)=> err?rej(err):res(files))) }

async function optimizeSVG(file){
  const input = await readFile(file, 'utf8');
  const result = optimize(input, { path: file, multipass: true });
  if(result.error) throw new Error(result.error);
  await writeFile(file, result.data, 'utf8');
}

async function compressRaster(file){
  const ext = path.extname(file).toLowerCase();
  const tmp = file + '.tmp';
  const img = sharp(file);
  if(ext === '.png'){
    await img.png({ quality: 80, palette: true }).toFile(tmp);
  } else if(ext === '.jpg' || ext === '.jpeg'){
    await img.jpeg({ quality: 80 }).toFile(tmp);
  } else {
    // skip other formats
    return;
  }
  await copyFile(tmp, file);
  fs.unlinkSync(tmp);
}

async function main(){
  const root = path.resolve(process.cwd(),'src','assets','images');
  if(!fs.existsSync(root)){
    console.error('No images dir found at', root);
    process.exit(1);
  }
  const svgFiles = await findFiles(path.join(root,'**','*.svg'));
  const pngFiles = await findFiles(path.join(root,'**','*.png'));
  const jpgFiles = await findFiles(path.join(root,'**','*.jp*g'));
  const all = [...svgFiles, ...pngFiles, ...jpgFiles];
  if(all.length === 0){ console.log('No image files found to compress'); return }

  const now = new Date().toISOString().slice(0,10);
  const backupDir = path.join(process.cwd(),'backup',`images-${now}`);
  await backupFiles(all, backupDir);
  console.log(`Backed up ${all.length} files to ${backupDir}`);

  for(const f of svgFiles){
    try{ await optimizeSVG(f); console.log('Optimized SVG', f) }catch(e){ console.warn('SVG opt failed', f, e.message) }
  }
  for(const f of [...pngFiles, ...jpgFiles]){
    try{ await compressRaster(f); console.log('Compressed raster', f) }catch(e){ console.warn('Raster compress failed', f, e.message) }
  }
  console.log('Compression complete')
}

main().catch(err=>{ console.error(err); process.exit(1) })
