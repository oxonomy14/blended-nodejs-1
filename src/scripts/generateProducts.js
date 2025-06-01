import { readProducts } from './readProducts.js';
import { writeProducts } from './writeProducts.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';

export const generateProducts = async (number) => {
  try {
    const products = await readProducts();

    const newProducts = Array.from({ length: number }, () =>
      createFakeProduct(),
    );

    const updatedProducts = [...products, ...newProducts];

    await writeProducts(updatedProducts);

    console.log(
      `Successfully added ${number} new products. Total: ${updatedProducts.length}`,
    );
  } catch (error) {
    console.error('Failed to generate products:', error.message);
  }
};

generateProducts(7);
