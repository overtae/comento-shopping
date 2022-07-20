import styled from "styled-components";

const ProductDetailImage = ({ image }) => {
  return (
    <ImageBox>
      <img src={image} alt="상품 설명" />
    </ImageBox>
  );
};

const ImageBox = styled.div`
  padding: 24px;
  img {
    width: 100%;
  }
`;

export default ProductDetailImage;
