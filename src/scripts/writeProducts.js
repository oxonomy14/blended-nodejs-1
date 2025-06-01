import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const writeProducts = async (updatedProducts) => {
  try {
    const data = JSON.stringify(updatedProducts);
    await fs.writeFile(PATH_DB, data, 'utf-8');
  } catch (error) {
    console.error('Failed to write products:', error.message);
    throw error;
  }
};
