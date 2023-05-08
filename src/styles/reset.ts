import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
<<<<<<< HEAD
  
  
=======
  font-style: 'Inter', sans-serif;
}

*::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 8px;
  }

*::-webkit-scrollbar-track {
  background: #858585;
  border-radius: 8px;
}

*::-webkit-scrollbar-thumb {
  background-color: #242424;
  border-radius: 8px;
  border: 3px solid #242424;
>>>>>>> ddf239c7b3ff02128f15fdce95bdd42537443c18
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
