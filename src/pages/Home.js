import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      <div>
        <Navigation />
        <ThemeButton themeName="겨울_방한템" />
        <ThemeButton themeName="따순머그컵" />
      </div>
      <div>
        <ProductCard
          thumbnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg"
          name="비숑 머그컵"
          description="쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 블랙 & 화이트 비숑 머그잔입니다."
        />

        <ProductCard
          thumbnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg"
          name="가열 보온 티코스터 온열 원터치 컵 받침대"
          description="언제나 따뜻하게 최대 12시간 동안 최대 60도의 온도로 따듯한 차를 즐길 수 있습니다."
        />

        <ProductCard
          thumbnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg"
          name="벨루즈까사 솜사탕 파스텔 머그 4종 세트"
          description="솜사탕처럼 부드러운 쉐입에 스트라이프 조각이 더해져 심플하면서도 세련된 파스텔 컬러의 머그"
        />
      </div>
    </div>
  );
};

export default Home;
