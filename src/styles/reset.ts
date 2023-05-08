import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  
  
}

button,input,select{
  border: none;
  outline: none;
  background-color: transparent;
  :focus,:hover{
    border: none;
    outline: none;
  }
  cursor: pointer;
 
}
`;
