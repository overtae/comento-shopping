import BasketProduct from "../components/BasketProduct";
import BottomButton from "../components/BottomButton";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as storage from "../utils/storage";

const Basket = () => {
  const [basketItems, setBasketItems] = useState();
  const [basketItemCount, setBasketItemCount] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);
    setBasketItemCount(items.length);
  }, []);

  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);
  }, [basketItemCount]);

  const onClickRemoveButton = (productId) => {
    storage.removeBasketItem(productId);
    setBasketItemCount(basketItemCount - 1);
  };
  return (
    <div>
      <Navigation text="장바구니" goBack={() => navigate(-1)} />

      {basketItems &&
        basketItems.map((item) => (
          <BasketProduct
            key={item.id}
            thumbnail={item.thumbnail}
            name={item.name}
            price={item.price}
            onClickRemoveButton={() => onClickRemoveButton(item.id)}
          />
        ))}

      <div>상품 금액({basketItemCount} 개)</div>
      <BottomButton text="주문하기" />
    </div>
  );
};

export default Basket;
