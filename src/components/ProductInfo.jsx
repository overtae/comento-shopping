import styled from "styled-components";
import { BoldText, MediumText } from "../GlobalTextStyle";

const ProductInfo = ({ name, price, thumbnail }) => {
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div>
      <Thumbnail src={thumbnail} alt={name} />
      <TextBox>
        <h3>{name}</h3>
        <div>{formattedPrice} 원</div>
      </TextBox>
    </div>
  );
};

const Thumbnail = styled.img`
  width: 390px;
  height: 420px;
  object-fit: cover;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;

  h3 {
    margin: 0;
    ${BoldText}
  }

  div {
    ${MediumText}
  }
`;

export default ProductInfo;
