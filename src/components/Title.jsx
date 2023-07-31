import React from "react";
import styled from "styled-components";

const TitleContainer = styled.h1`
  font-size: 2.5em;
  color: #0071eb;
  margin-bottom: 20px;
`;

const Title = ({ children }) => {
  return <TitleContainer>{children}</TitleContainer>;
};

export default Title;