const fs = require('fs');
const path = require('path');

// Load menu (resolving from project root)
const rootDir = path.resolve(__dirname, '..', '..');
const menuPath = path.join(rootDir, 'src', 'data', 'menu.json');
const menu = JSON.parse(fs.readFileSync(menuPath, 'utf8'));

describe('Menu Data Validation', () => {
  test('menu.json exists and is valid JSON', () => {
    expect(menu).toBeDefined();
    expect(Array.isArray(menu)).toBe(true);
    expect(menu.length).toBeGreaterThan(0);
  });

  describe('Menu Items Structure', () => {
    menu.forEach((item, idx) => {
      describe(`Item ${idx} (${item.name || 'unnamed'})`, () => {
        test('has required fields: id, name, price', () => {
          expect(item.id).toBeDefined();
          expect(typeof item.id).toBe('string');
          expect(item.name).toBeDefined();
          expect(typeof item.name).toBe('string');
          expect(item.price).toBeDefined();
          expect(typeof item.price).toBe('number');
        });

        test('has images array', () => {
          expect(item.images).toBeDefined();
          expect(Array.isArray(item.images)).toBe(true);
          expect(item.images.length).toBeGreaterThan(0);
        });

        test('has imagesWebp array', () => {
          expect(item.imagesWebp).toBeDefined();
          expect(Array.isArray(item.imagesWebp)).toBe(true);
          expect(item.imagesWebp.length).toBeGreaterThan(0);
        });

        test('has imagesWebpVariants with low/med/high', () => {
          expect(item.imagesWebpVariants).toBeDefined();
          expect(typeof item.imagesWebpVariants).toBe('object');
          ['low', 'med', 'high'].forEach(variant => {
            expect(item.imagesWebpVariants[variant]).toBeDefined();
            expect(Array.isArray(item.imagesWebpVariants[variant])).toBe(true);
            expect(item.imagesWebpVariants[variant].length).toBeGreaterThan(0);
          });
        });

        test('referenced image files exist', () => {
          item.images.forEach(img => {
            const fullPath = path.join(rootDir, img.replace(/^\//, ''));
            expect(fs.existsSync(fullPath)).toBe(true);
          });
        });

        test('referenced WebP files exist', () => {
          item.imagesWebp.forEach(img => {
            const fullPath = path.join(rootDir, img.replace(/^\//, ''));
            expect(fs.existsSync(fullPath)).toBe(true);
          });
        });

        test('referenced WebP variant files exist', () => {
          ['low', 'med', 'high'].forEach(variant => {
            item.imagesWebpVariants[variant].forEach(img => {
              const fullPath = path.join(rootDir, img.replace(/^\//, ''));
              expect(fs.existsSync(fullPath)).toBe(true);
            });
          });
        });

        test('has category', () => {
          expect(item.category).toBeDefined();
          expect(typeof item.category).toBe('string');
        });
      });
    });
  });

  describe('Categories', () => {
    test('all items reference valid categories', () => {
      const categoriesPath = path.join(rootDir, 'src', 'data', 'categories.json');
      const categories = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'));
      const categoryIds = categories.map(c => c.id);
      
      menu.forEach(item => {
        expect(categoryIds).toContain(item.category);
      });
    });
  });
});
