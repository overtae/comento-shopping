import styled from "styled-components";
import { BoldText, MediumText } from "../GlobalTextStyle";
import { useNavigate } from "react-router-dom";

const OrderPopup = () => {
  let navigate = useNavigate();
  return (
    <DimBackground>
      <Popup>
        <div>주문되었습니다.</div>
        <OkButton onClick={() => navigate("/")}>확인</OkButton>
      </Popup>
    </DimBackground>
  );
};

const DimBackground = styled.div`
  width: 390px;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Popup = styled.div`
  width: 240px;
  height: 160px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  ${BoldText}
`;

const OkButton = styled.div`
  width: 120px;
  height: 40px;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  ${MediumText}
`;

export default OrderPopup;
