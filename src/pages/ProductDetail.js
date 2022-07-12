import BottomButton from "../components/BottomButton";
import Navigation from "../components/Navigation";
import ProductDetailMenu from "../components/ProductDetailMenu";
import ProductDetailImage from "../components/ProductDetailImage";
import ProductInfo from "../components/ProductInfo";

const ProductDetail = () => {
  return (
    <div>
      <Navigation text="코멘토 쇼핑" back={true} />

      <ProductInfo
        thumbnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg"
        name="비숑 블랙 머그잔"
        price="21,800원"
      />

      <ProductDetailMenu />

      <ProductDetailImage image="" />

      <BottomButton text="장바구니 담기" />
    </div>
  );
};

export default ProductDetail;
