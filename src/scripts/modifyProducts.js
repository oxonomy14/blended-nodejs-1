import { readProducts } from './readProducts.js';
import { writeProducts } from './writeProducts.js';

export const modifyProducts = async () => {
  try {
    const products = await readProducts();
    const changeProducts = products.map(({ description, ...rest }) => rest);
    await writeProducts(changeProducts);
    console.log(`Successfully modify Products `);
  } catch (error) {
    console.error('Failed to modify products:', error.message);
  }
};

modifyProducts();
