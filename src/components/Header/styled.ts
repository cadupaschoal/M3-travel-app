import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 120%;
  height: 100vh;
  background-color: #d8f3dc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;

  display: flex;
  align-items: center;

  .container__Header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  /* .buttons__box {
    display: inline-flex;
    gap: 20px;

    a {
      border: solid 2px black;
      width: 90px;
      display: inline-flex;
      justify-content: center;
    }
  } */

  .buttons__box {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .button__Login {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 10em;
    position: relative;
    height: 3.5em;
    border: 3px ridge #149cea;
    outline: none;
    background-color: transparent;
    transition: 1s;
    border-radius: 0.3em;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
  .button__Cadastro {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 10em;
    position: relative;
    height: 3.5em;
    border: 3px ridge #149cea;
    outline: none;
    background-color: transparent;
    transition: 1s;
    border-radius: 0.3em;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  .button__Login:hover::before,
  button:hover::after {
    transform: scale(0);
  }
  .button__Cadastro:hover::before,
  button:hover::after {
    transform: scale(0);
  }

  .button__Login:hover {
    box-shadow: inset 0px 0px 25px #1479ea;
  }
  .button__Cadastro:hover {
    box-shadow: inset 0px 0px 25px #1479ea;
  }
`;
