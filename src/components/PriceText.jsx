import styled from "styled-components";
import { MediumText } from "../GlobalTextStyle";

const PriceText = ({ text, price }) => {
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <PriceTextStyled>
      <div>{text}</div>
      <div>{formattedPrice}원</div>
    </PriceTextStyled>
  );
};

const PriceTextStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  ${MediumText}

  div:first-child {
    color: gray;
  }

  :last-child {
    margin: 10px 0;

    div:last-child {
      color: tomato;
    }
  }
`;

export default PriceText;
