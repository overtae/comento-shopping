import BasketProduct from "../components/BasketProduct";
import BottomButton from "../components/BottomButton";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  let navigate = useNavigate();

  const onClickRemoveButton = () => {
    alert("삭제");
  };
  return (
    <div>
      <Navigation text="장바구니" goBack={() => navigate(-1)} />

      <BasketProduct thumbnail="" name="" price="" onClickRemoveButton={onClickRemoveButton} />

      <BottomButton text="주문하기" />
    </div>
  );
};

export default Basket;
