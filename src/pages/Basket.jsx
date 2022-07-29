import BasketProduct from "../components/BasketProduct";
import BottomButton from "../components/BottomButton";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as storage from "../utils/storage";
import BasketPrice from "../components/BasketPrice";
import styled from "styled-components";

const DELIVERYFEE = 3000;

const Basket = () => {
  const [basketItems, setBasketItems] = useState();
  const [basketItemCount, setBasketItemCount] = useState(0);
  const discountPrice = null;
  let [totalPrice, setTotalPrice] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);
    setBasketItemCount(items.length);
  }, []);

  useEffect(() => {
    const items = storage.getBasketItems();
    const total = items.reduce((prev, current) => prev + current.price, 0);
    setBasketItems(items);
    setTotalPrice(total);
  }, [basketItemCount]);

  const onClickRemoveButton = (productId) => {
    storage.removeBasketItem(productId);
    setBasketItemCount(basketItemCount - 1);
  };

  return (
    <div>
      <Navigation text="장바구니" goBack={() => navigate(-1)} />

      <BasketItemsStyled>
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
      </BasketItemsStyled>

      <BasketPrice itemCount={basketItemCount} totalPrice={totalPrice} discountPrice={discountPrice} deliveryFee={DELIVERYFEE} />

      <BottomButton text="주문하기" />
    </div>
  );
};

const BasketItemsStyled = styled.div`
  padding-bottom: calc(70px + 140px);
`;

export default Basket;
