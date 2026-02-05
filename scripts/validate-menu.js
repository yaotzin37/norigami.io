#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const menuPath = path.join(process.cwd(),'src','data','menu.json');
if(!fs.existsSync(menuPath)) { console.error('Menu file missing'); process.exit(1) }

const menu = JSON.parse(fs.readFileSync(menuPath,'utf8'));
let errors = 0, warnings = 0;

console.log(`Validating ${menu.length} items...\n`);

for(let i = 0; i < menu.length; i++){
  const item = menu[i];
  const itemStr = `Item ${i} (${item.name || 'unnamed'})`;
  
  // Check required fields
  if(!item.id) {
    console.error(`❌ ${itemStr}: missing 'id'`);
    errors++;
  }
  if(!item.name) {
    console.error(`❌ ${itemStr}: missing 'name'`);
    errors++;
  }
  if(!item.price || typeof item.price !== 'number') {
    console.error(`❌ ${itemStr}: missing or invalid 'price'`);
    errors++;
  }
  
  // Check images array
  if(!item.images || !Array.isArray(item.images) || item.images.length === 0) {
    console.error(`❌ ${itemStr}: missing or empty 'images' array`);
    errors++;
    continue; // Skip variant checks if no base image
  }

  // Check all images exist
  for(const img of item.images){
    const relPath = img.replace(/^\//, '');
    const fullPath = path.join(process.cwd(), relPath);
    if(!fs.existsSync(fullPath)){
      console.warn(`⚠️  ${itemStr}: image not found: ${img}`);
      warnings++;
    }
  }

  // Check imagesWebp
  if(!item.imagesWebp || !Array.isArray(item.imagesWebp) || item.imagesWebp.length === 0){
    console.warn(`⚠️  ${itemStr}: missing 'imagesWebp' array`);
    warnings++;
  } else {
    for(const img of item.imagesWebp){
      const relPath = img.replace(/^\//, '');
      const fullPath = path.join(process.cwd(), relPath);
      if(!fs.existsSync(fullPath)){
        console.warn(`⚠️  ${itemStr}: WebP not found: ${img}`);
        warnings++;
      }
    }
  }

  // Check imagesWebpVariants
  if(!item.imagesWebpVariants || typeof item.imagesWebpVariants !== 'object'){
    console.warn(`⚠️  ${itemStr}: missing 'imagesWebpVariants' object`);
    warnings++;
  } else {
    const variants = ['low', 'med', 'high'];
    for(const v of variants){
      if(!item.imagesWebpVariants[v] || !Array.isArray(item.imagesWebpVariants[v]) || item.imagesWebpVariants[v].length === 0){
        console.warn(`⚠️  ${itemStr}: missing variant '${v}'`);
        warnings++;
      } else {
        for(const img of item.imagesWebpVariants[v]){
          const relPath = img.replace(/^\//, '');
          const fullPath = path.join(process.cwd(), relPath);
          if(!fs.existsSync(fullPath)){
            console.warn(`⚠️  ${itemStr}: variant file not found: ${img}`);
            warnings++;
          }
        }
      }
    }
  }
}

console.log(`\n✅ Validation complete:`);
console.log(`   Errors: ${errors}`);
console.log(`   Warnings: ${warnings}`);

if(errors > 0) process.exit(1);
process.exit(0);
