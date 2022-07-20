import styled from "styled-components";
import { SemiBoldText, MediumText } from "../GlobalTextStyle";

const ProductDetailMenu = ({ setActiveMenu, activeMenu }) => {
  return (
    <Menus>
      <Menu onClick={() => setActiveMenu("description")} active={activeMenu === "description"}>
        상품 설명
      </Menu>
      <Menu onClick={() => setActiveMenu("reviews")} active={activeMenu === "reviews"}>
        상품 후기
      </Menu>
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
  background: ${(props) => (props.active === true ? "#eee" : "#fff")};
  ${(props) => (props.active === true ? SemiBoldText : MediumText)};
  cursor: pointer;
`;

export default ProductDetailMenu;
