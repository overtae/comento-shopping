import styled from "styled-components";
import { SemiBoldText, MediumText } from "../GlobalTextStyle";

const ProductDetailMenu = () => {
  return (
    <Menus>
      <Menu selected={true}>상품 설명</Menu>
      <Menu>상품 후기</Menu>
    </Menus>
  );
};

const Menus = styled.div`
  display: flex;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 195px;
  height: 48px;
  background: ${(props) => (props.selected === true ? "#eee" : "#fff")};
  ${(props) => (props.selected === true ? SemiBoldText : MediumText)};
  cursor: pointer;
`;

export default ProductDetailMenu;
