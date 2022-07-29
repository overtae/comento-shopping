import styled from "styled-components";
import PriceText from "./PriceText";

const BasketPrice = ({ itemCount, totalPrice, discountPrice, deliveryFee }) => {
  return (
    <BasketPriceStyled>
      <PriceText text={`상품금액 (${itemCount}개)`} price={totalPrice} />
      {discountPrice && <PriceText text={"할인금액"} price={-discountPrice} />}
      <PriceText text={"배송비"} price={totalPrice > 10000 ? 0 : deliveryFee} />
      <PriceText text={"총 주문금액"} price={totalPrice} />
    </BasketPriceStyled>
  );
};

const BasketPriceStyled = styled.div`
  background: #fff;
  width: 390px;
  position: fixed;
  bottom: 70px;
  padding: 24px 0 14px 0;
`;

export default BasketPrice;
