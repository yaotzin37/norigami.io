import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const importDir = './import_data';
const outputFile = './src/data/menu.json';

// Helper to sanitize keys (make lowercase slug)
const slugify = (text) => text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');

const processFile = (filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    // Remove BOM if present
    const cleanContent = content.replace(/^\uFEFF/, '');

    const records = parse(cleanContent, {
        columns: true,
        skip_empty_lines: true,
        relax_column_count: true
    });

    const filename = path.basename(filePath);

    return records.map(record => {
        // Determine Type based on filename or columns
        // SUSHI_CLASICO: Categoria, Cubierta, Proteina, Precio
        // SUSHI_ESPECIAL: Categoria, Item, Precio, PF, PD, Toping...

        let item = {
            id: '',
            name: '',
            price: 0,
            description: '',
            category: record.Categoria || 'General',
            image: '' // Placeholder
        };

        if (record.Item) {
            item.name = record.Item;
            item.id = slugify(item.name);

            const descParts = [];
            if (record.PF) descParts.push(record.PF);
            if (record.PD) descParts.push(record.PD);
            if (record.Toping) descParts.push(record.Toping);
            item.description = descParts.join('. ');

        } else if (record.Proteina && record.Cubierta) {
            // Sushi Clasico
            item.name = `${record.Cubierta} de ${record.Proteina}`;
            item.id = slugify(`${record.Cubierta}-${record.Proteina}`);
            item.category = 'Sushi Clásico';
            item.description = `Estilo ${record.Cubierta} con ${record.Proteina}`;
        } else if (record.Producto) {
            // Bebidas?
            item.name = record.Producto;
            item.id = slugify(item.name);
        } else {
            // Fallback
            item.name = Object.values(record)[0]; // First column
            item.id = slugify(item.name);
        }

        if (record.Precio) {
            item.price = parseFloat(record.Precio.replace('$', ''));
        }

        return item;
    });
};

const main = () => {
    const files = fs.readdirSync(importDir).filter(f => f.endsWith('.csv'));
    let allItems = [];

    // Build image map from local files (recursive)
    const imageMap = {};
    const imageDir = './src/assets/images';

    // Helper to scan directory locally
    const scanImages = (dir) => {
        if (!fs.existsSync(dir)) return;
        const dirFiles = fs.readdirSync(dir);
        dirFiles.forEach(file => {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                scanImages(fullPath);
            } else if (file.match(/\.(png|jpg|jpeg|webp)$/)) {
                const nameWithoutExt = path.parse(file).name;
                // Store relative path for frontend
                imageMap[nameWithoutExt] = fullPath.replace('src/', '/src/');
            }
        });
    };
    scanImages(imageDir);

    files.forEach(file => {
        console.log(`Processing ${file}...`);
        try {
            const items = processFile(path.join(importDir, file));

            // Enrich items with images from map automatically
            const enrichedItems = items.map(item => {
                // 1. Exact match by ID
                if (imageMap[item.id]) {
                    item.image = imageMap[item.id];
                }
                // 2. Explicit overrides (for specials needing specific placeholders)
                else if (item.category === 'Sushi Especial' && !item.image) {
                    item.image = imageMap['dragon-roll'] || '';
                }
                return item;
            });

            allItems = allItems.concat(enrichedItems);
        } catch (e) {
            console.error(`Error processing ${file}:`, e);
        }
    });

    fs.writeFileSync(outputFile, JSON.stringify(allItems, null, 2));
    console.log(`Generated ${allItems.length} items in ${outputFile}`);
};

main();
