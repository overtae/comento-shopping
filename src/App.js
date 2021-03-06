import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Basket from "./pages/Basket";
import "./App.css";
import styled from "styled-components";
import ScrollToTop from "./ScrollRestoration";

function App() {
  return (
    <Container>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </Content>
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 390px;
`;
