import { Global, css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
const globalStyles = css`
  * {
    font-family: "Poppins", sans-serif !important;
    -webkit-tap-highlight-color: transparent;
    &::selection {
      background-color: #9a52ff;
    }
  }
  :root {
    font-family: "Poppins", sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light;
    color: rgba(255, 255, 255, 0.87);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }
  html {
    background: linear-gradient(180deg, #232e58 0%, #171d34 100%);
    background-attachment: fixed;
    background-size: cover;
  }
  body {
    margin: 8px 16vw;
    touch-action: manipulation;
    @media (max-width: 1024px) {
      margin: 20px;
    }
  }
  .MuiDialog-container {
    backdrop-filter: blur(4px);
  }
  .MuiPaper-elevation8 {
    border-radius: 16px !important;
  }
  .MuiSelect-select {
    display: flex !important;
    gap: 4px;
  }
`;
export const GlobalStyles = () => <Global styles={globalStyles} />;

export const DialogBtn = styled(Button)`
  padding: 10px 16px;
  border-radius: 16px;
  font-size: 16px;
  margin: 8px;
`;

export const fadeInLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-40px)
}
to {
  opacity: 1;
  transform: translateX(0px)
  }
`;
export const fadeIn = keyframes`
from {
  opacity: 0;
}

`;
export const slideIn = keyframes`
  from{
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;