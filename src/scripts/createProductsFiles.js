import { PATH_FILES_DIR } from '../constants/products.js';
import fs from 'node:fs/promises';
import { readProducts } from './readProducts.js';
import { writeProducts } from './writeProducts.js';
import path from 'path';

const formatFileName = (name) =>
  name
    .toLowerCase()
    .split(' ')
    .join('-')
    .replace(/[^a-z0-9\-]/g, '') + '.json';

export const createProductsFiles = async () => {
  try {
    const products = await readProducts();

    // Створити папку, якщо не існує
    await fs.mkdir(PATH_FILES_DIR, { recursive: true });

    for (const product of products) {
      const fileName = formatFileName(product.name);
      const filePath = path.join(PATH_FILES_DIR, fileName);

      await fs.writeFile(filePath, JSON.stringify(product, null, 2), 'utf-8');
    }

    console.log(`✅ Створено ${products.length} файлів у папці "files"`);
  } catch (error) {
    console.error('❌ Помилка при створенні файлів продуктів:', error.message);
  }
};

createProductsFiles();
