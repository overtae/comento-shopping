import React from "react";
import styled from "styled-components";
import { FiChevronLeft } from "react-icons/fi";

const Navigation = ({ text, back }) => {
  return (
    <NavigationStyled>
      {back === true ? (
        <BackButton>
          <FiChevronLeft size={"24px"} />
        </BackButton>
      ) : (
        <React.Fragment />
      )}
      <div>{text}</div>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.div`
  position: relative;
  padding: 20px 151px;
  border-bottom: 1px solid rgba(238, 238, 238, 1);

  /* Font Style */
  font-weight: 700;
  font-size: 18px;
  line-height: 26.06px;
  text-align: center;
`;

const BackButton = styled.div`
  position: absolute;
  top: 20px;
  left: 26px;
  cursor: pointer;
`;

export default Navigation;
