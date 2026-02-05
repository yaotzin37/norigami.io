#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const menuPath = path.join(process.cwd(),'src','data','menu.json');
if(!fs.existsSync(menuPath)) { console.error('Menu file missing'); process.exit(1) }
const menu = JSON.parse(fs.readFileSync(menuPath,'utf8'));
let changed = false;
for(const item of menu){
  if(!item.images || !Array.isArray(item.images)) continue;
  if(item.imagesWebpVariants && typeof item.imagesWebpVariants === 'object') continue; // skip if exists
  const variants = { low: [], med: [], high: [] };
  for(const img of item.images){
    const base = img.replace(/\.[a-z0-9]+$/i, '');
    const low = `${base}-low.webp`;
    const med = `${base}-med.webp`;
    const high = `${base}-high.webp`;
    const relLow = low.replace(/^\//,'');
    const relMed = med.replace(/^\//,'');
    const relHigh = high.replace(/^\//,'');
    if(fs.existsSync(path.join(process.cwd(), relLow))) variants.low.push(low);
    if(fs.existsSync(path.join(process.cwd(), relMed))) variants.med.push(med);
    if(fs.existsSync(path.join(process.cwd(), relHigh))) variants.high.push(high);
  }
  item.imagesWebpVariants = variants;
  if(variants.low.length || variants.med.length || variants.high.length) changed = true;
}
if(changed){
  fs.writeFileSync(menuPath, JSON.stringify(menu, null, 2)+"\n");
  console.log('Updated menu.json with imagesWebpVariants where found.');
} else {
  console.log('No webp variants detected/added.');
}
