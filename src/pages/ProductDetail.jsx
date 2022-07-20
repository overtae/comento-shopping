import BottomButton from "../components/BottomButton";
import Navigation from "../components/Navigation";
import ProductDetailMenu from "../components/ProductDetailMenu";
import ProductDetailImage from "../components/ProductDetailImage";
import ProductInfo from "../components/ProductInfo";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../data/mockData";

const ProductDetail = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
    console.log(productId);
  }, [productId]);

  return (
    <div>
      <Navigation text="코멘토 쇼핑" isBackButton={true} />

      {product && <ProductInfo thumbnail={product.thumbnail} name={product.name} price={product.price} />}

      <ProductDetailMenu />

      <ProductDetailImage image="" />

      <BottomButton text="장바구니 담기" />
    </div>
  );
};

export default ProductDetail;
