import React from "react";
import styled from "styled-components";

const TitleContainer = styled.h1`
  font-size: 2.5em;
  color: #f0f0f0;
  margin-bottom: 20px;
`;

const Title = ({ children }) => {
  return <TitleContainer>{children}</TitleContainer>;
};

export default Title;