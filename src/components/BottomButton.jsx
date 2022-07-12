import styled from "styled-components";
import { SemiBoldText } from "../GlobalTextStyle";

const BottomButton = ({ text }) => {
  return <BottomButtonStyled>{text}</BottomButtonStyled>;
};

const BottomButtonStyled = styled.div`
  background: #24dbaf;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 390px;
  height: 70px;
  cursor: pointer;
  ${SemiBoldText}
`;

export default BottomButton;
