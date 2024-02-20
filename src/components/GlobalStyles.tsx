"use client";
import styled from "styled-components";

const GlobalStyles = styled.div<{
  $strongGradientColor1?: string;
  $strongGradientColor2?: string;
}>`
  strong {
    background: linear-gradient(
      to right,
      ${(props) => props.$strongGradientColor1 || "#ffffff"},
      ${(props) => props.$strongGradientColor2 || "#ffffff"}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ul > li::before {
    background-color: ${(props) => props.$strongGradientColor1 || "#000000"};
  }
`;
export default GlobalStyles;
