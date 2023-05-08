import styled from 'styled-components';

export const StyledModalBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  
  background-color: #d8f3dc80;
  .modal {
    display: flex;
    flex-direction: column;
    height: 65%;
    justify-content: center;
    width: 40%;
    padding: 70px 55px;
    z-index: 3;
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: #8a8a8a;
    border-radius: 4px;

    button {
      position: absolute;
      top: 10px;
      right: 20px;
    }

    .infos {
      margin-bottom: 30px;

      display: flex;
      justify-content: space-between;

      figure {
        width: 200px;
        height: 100%;
      }

      .text {
      }
    }

    .signIn {
      background-color: black;
      color: white;
      height: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .buttons__box {
        padding: 10px 0;
        width: 40%;
        display: flex;
        justify-content: space-around;
        a {
          border: 2px solid white;
          display: inline-flex;
          justify-content: center;
          width: 90px;
        }
      }
    }

    .infos__loged {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .frontier {
        width: 100%;
        height: 150px;
        display: flex;
        gap: 40px;
        overflow-x: auto;
        margin-top: 10px;

        li {
          min-width: fit-content;
        }

        figure {
          min-width: fit-content;
          text-align: center;

          img {
            width: 150px;
            height: 70%;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
`;
