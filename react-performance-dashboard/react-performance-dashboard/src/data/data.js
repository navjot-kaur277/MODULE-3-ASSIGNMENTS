export const generateProducts = (amount = 2000) => {
  const products = [];
  for (let i = 0; i < amount; i++) {
    products.push({
      id: i + 1,
      name: `Cyber Widget Pro ${i + 1}`,
      price: Math.floor(Math.random() * 500) + 50, // Random price between 50 and 550
      category: i % 2 === 0 ? "Electronics" : "Software",
    });
  }
  return products;
};
