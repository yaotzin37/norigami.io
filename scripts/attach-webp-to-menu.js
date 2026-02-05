#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const menuPath = path.join(process.cwd(),'src','data','menu.json');
if(!fs.existsSync(menuPath)) { console.error('Menu file missing'); process.exit(1) }
const menu = JSON.parse(fs.readFileSync(menuPath,'utf8'));
let changed = false;
for(const item of menu){
  if(!item.images || !Array.isArray(item.images)) continue;
  if(item.imagesWebp && Array.isArray(item.imagesWebp)) continue; // skip if exists
  const webps = item.images.map(i => i.replace(/\.[a-z0-9]+$/i, '.webp'));
  // verify files exist
  const existing = webps.filter(w => fs.existsSync(path.join(process.cwd(), w.replace(/^\//, ''))));
  item.imagesWebp = existing;
  if(existing.length > 0) changed = true;
}
if(changed){
  fs.writeFileSync(menuPath, JSON.stringify(menu, null, 2)+"\n");
  console.log('Updated menu.json with imagesWebp where found.');
} else {
  console.log('No imagesWebp detected/added.');
}
