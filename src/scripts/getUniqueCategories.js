import { readProducts } from './readProducts.js';

export const getUniqueCategories = async () => {
  try {
    const products = await readProducts();

    const categories = products.map((product) => product.category);
    const uniqueCategories = categories.filter(
      (item, index, arr) => arr.indexOf(item) === index,
    );

    console.log(uniqueCategories);
    return uniqueCategories;
  } catch (error) {
    console.error('Помилка при підрахунку загальної вартості:', error.message);
  }
};

getUniqueCategories();
