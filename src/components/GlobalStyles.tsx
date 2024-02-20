"use client";
import styled from "styled-components";

const GlobalStyles = styled.div<{
  $strongGradientColor1?: string;
  $strongGradientColor2?: string;
}>`
  strong {
    text-shadow: none;
    background: linear-gradient(
      to right,
      ${(props) => props.$strongGradientColor1 || "#ffffff"},
      ${(props) => props.$strongGradientColor2 || "#ffffff"}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    text-shadow: 1px 1px 2px black;
  }
  strong::selection {
    -webkit-text-fill-color: black;
  }
  ul > li::before {
    background-color: ${(props) => props.$strongGradientColor1 || "#000000"};
  }
`;
export default GlobalStyles;
