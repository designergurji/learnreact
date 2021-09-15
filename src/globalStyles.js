import styled, { createGlobalStyle} from "styled-components";
const GlobalStyle = createGlobalStyle`
body{
     background: #fff;
     padding: 0px;
     margin: 0px;
     font-family: 'Poppins', sans-serif;
     font-weight: 300;
     
  }
  a{
      text-decoration: none;
  }
  *, *::before, *::after {
    box-sizing: border-box;
}
`;

export const Container = styled.div`
 max-width: 1400px;
 margin: auto;
 padding: 0 15px;
`;

export const CustomRow = styled.div`
 display: flex;
 align-items: center;
`;

export const GirdRow = styled.div`
 display: flex;
 flex-wrap: wrap;
 align-items: center;
`;

export default GlobalStyle