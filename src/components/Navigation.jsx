import styled from "styled-components";

const Navigation = () => {
  return (
    <NavigationStyled>
      <div>코멘토 쇼핑</div>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.div`
  padding: 20px 151px;
  border-bottom: 1px solid rgba(238, 238, 238, 1);

  /* Font Style */
  font-weight: 700;
  font-size: 18px;
  line-height: 16.06px;
  text-align: center;
`;

export default Navigation;
