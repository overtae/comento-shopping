const BASKET = "BASKET";

export const getBasketItems = () => {
  const items = localStorage.getItem(BASKET);
  return items ? JSON.parse(items) : [];
};

export const addItemToBasket = (product) => {
  let items = getBasketItems();

  const isSameProduct = !!items.find((item) => item.id === product.id);

  if (!isSameProduct) {
    items.push(product);
    localStorage.setItem(BASKET, JSON.stringify(items));
  }
};

export const removeBasketItem = (productId) => {
  let items = getBasketItems();
  items = items.filter((item) => item.id !== productId);
  localStorage.removeItem(BASKET);
  localStorage.setItem(BASKET, JSON.stringify(items));
};
