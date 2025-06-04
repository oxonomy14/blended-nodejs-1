import { readProducts } from './readProducts.js';

export const groupProductsByCategory = async () => {
  try {
    const products = await readProducts();

    const grouped = products.reduce((acc, product) => {
      const { category, name } = product;

      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push(name);
      return acc;
    }, {});

    console.log('Назви продуктів за категоріями:', grouped);
    return grouped;
  } catch (error) {
    console.error('Помилка при групуванні:', error.message);
  }
};

groupProductsByCategory();
