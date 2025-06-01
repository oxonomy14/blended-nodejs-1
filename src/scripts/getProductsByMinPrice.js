import { readProducts } from './readProducts.js';

export const getProductsByMinPrice = async (minPrice) => {
  try {
    const products = await readProducts();

    const filtered = products.filter((product) => product.price >= minPrice);
    console.log(`Продукти з ціною >= ${minPrice}`, filtered);

    return filtered;
  } catch (error) {
    console.error('Помилка при читанні або парсингу файлу:', error.message);
    return [];
  }
};

getProductsByMinPrice(600);
