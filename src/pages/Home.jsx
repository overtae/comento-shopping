import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import { mockTheme1Produdcts, mockTheme2Produdcts } from "../data/mockData";

import styled from "styled-components";
import { useState } from "react";

const Home = () => {
  const [products, setProducts] = useState();

  const onClickThemeButton = (themeId) => {
    if (themeId === 1) {
      setProducts(mockTheme1Produdcts);
    } else if (themeId === 2) {
      setProducts(mockTheme2Produdcts);
    }
  };

  return (
    <div>
      <div>
        <Navigation text="코멘토 쇼핑" isBackButton={false} />
        <ThemeSection>
          <ThemeButton themeName="따순머그컵" onClick={() => onClickThemeButton(1)} />
          <ThemeButton themeName="여름엔바로" onClick={() => onClickThemeButton(2)} />
        </ThemeSection>
        <GrayLine />
      </div>
      <div>
        <ProductSection>
          {/* 자바스크립트 map()을 사용해 mockData list를 화면에 노출 */}
          {products ? (
            products.map((product) => <ProductCard thumbnail={product.thumbnail} name={product.name} description={product.description} />)
          ) : (
            <div>테마를 선택해주세요.</div>
          )}
        </ProductSection>
      </div>
    </div>
  );
};

const ThemeSection = styled.div`
  display: flex;
  gap: 12px;
  padding: 40px 12px;
`;

const ProductSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 24px;
`;

const GrayLine = styled.div`
  background: #eee;
  height: 8px;
  width: 100%;
`;

export default Home;
