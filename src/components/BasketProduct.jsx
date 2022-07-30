import styled from "styled-components";
import { FiX } from "react-icons/fi";
import { BoldText, MediumText } from "../GlobalTextStyle";

const BasketProduct = ({ thumbnail, name, price, onClickRemoveButton }) => {
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <>
      <BasketProductStyled>
        <RowLayout>
          <RowLayout>
            <ProductImage style={{ backgroundImage: `url(${thumbnail})` }} />
            <ProductInfo>
              <div>{name}</div>
              <div>{formattedPrice} 원</div>
            </ProductInfo>
          </RowLayout>
          <DeleteButton onClick={onClickRemoveButton}>
            <FiX size={"24px"} />
          </DeleteButton>
        </RowLayout>
      </BasketProductStyled>
      <GrayLine />
    </>
  );
};

const BasketProductStyled = styled.div`
  padding: 16px;
  margin: 10px 0px;
`;

const RowLayout = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const DeleteButton = styled.div`
  cursor: pointer;
`;

const ProductImage = styled.div`
  width: 120px;
  height: 100px;
  background-size: cover;
`;

const ProductInfo = styled.div`
  width: calc(100% - 140px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:first-child {
    ${BoldText}
  }
  div:last-child {
    ${MediumText}
  }
`;

const GrayLine = styled.div`
  height: 1px;
  width: 100%;
  background: #eee;
`;

export default BasketProduct;
