import styled from "styled-components";
import Logo from "../../assets/Images/transferir.jpg";

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: #d8f3dc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
  .buttons__box {
    display: inline-flex;
    gap: 20px;

    a {
      border: solid 2px black;
      width: 90px;
      display: inline-flex;
      justify-content: center;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
  }

  .btn {
    display: flex;
    gap: 32px;
  }

  .imgHome{
    display: flex;
  }

`;
