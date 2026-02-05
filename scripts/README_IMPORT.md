Importar datos del menú

1. Crea una carpeta `import_data/` en la raíz del repo y sube los archivos JSON que quieras importar.
2. Formatos soportados: array JSON, { "menu": [...] }, { "items": [...] } o un objeto que contenga algún array.
3. Ejecuta (desde la raíz):

   npm run import:menu -- import_data

   - Usa `--dry` para ver un "dry run": `npm run import:menu -- import_data -- --dry`
4. El script crea un respaldo en `backup/menu-backup-YYYY-MM-DD.json` antes de sobrescribir `src/data/menu.json`.
