import styled from "styled-components";

const ThemeButton = ({ themeName }) => {
  return (
    <ThemeButtonStyled>
      <div>#{themeName}</div>
    </ThemeButtonStyled>
  );
};

export default ThemeButton;

const ThemeButtonStyled = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: fit-content;
  padding: 24px 16px;
  border-radius: 10px;

  /* Font Style */
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
`;
