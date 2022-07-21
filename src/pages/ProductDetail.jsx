import BottomButton from "../components/BottomButton";
import Navigation from "../components/Navigation";
import ProductDetailMenu from "../components/ProductDetailMenu";
import ProductDetailImage from "../components/ProductDetailImage";
import ProductInfo from "../components/ProductInfo";
import Review from "../components/Review";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductDetail, mockReviews } from "../data/mockData";
import styled from "styled-components";

const ProductDetail = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState();
  const [activeMenu, setActiveMenu] = useState("description");
  let navigate = useNavigate();

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, [productId]);

  return (
    <div>
      <Navigation text="코멘토 쇼핑" goBack={() => navigate(-1)} />

      {product && <ProductInfo thumbnail={product.thumbnail} name={product.name} price={product.price} />}

      <ProductDetailMenu setActiveMenu={setActiveMenu} activeMenu={activeMenu} />

      {activeMenu === "description" && <ProductDetailImage image={product?.mainImage} />}

      {activeMenu === "reviews" && (
        <ReviewBox>
          {mockReviews.map((review) => (
            <Review
              key={review.id}
              profileImage={review.profileImage}
              username={review.username}
              score={review.score}
              createdDate={review.createdDate}
              reviewText={review.reviewText}
            />
          ))}
        </ReviewBox>
      )}

      <BottomButton text="장바구니 담기" />
    </div>
  );
};

const ReviewBox = styled.div`
  padding: 0 24px 70px 24px;
`;

export default ProductDetail;
