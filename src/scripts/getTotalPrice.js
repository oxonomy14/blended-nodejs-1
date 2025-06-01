import { readProducts } from './readProducts.js';

export const getTotalPrice = async () => {
  try {
    const products = await readProducts();
    const total = products.reduce(
      (sum, product) => sum + Number(product.price),
      0,
    );
    console.log(`Загальна вартість всіх продуктів: ${total}`);
    return total;
  } catch (error) {
    console.error('Помилка при підрахунку загальної вартості:', error.message);
  }
};

getTotalPrice();
