import { Link } from "react-router-dom";
import { StyledHeader } from "./styled";
// import Logo from '../../assets/Images/react.svg';
import Logo from "../../assets/Images/transferir.jpg";
import racapajole4 from "../../assets/Images/racapajole4-removebg-preview.png";
import racapajole3 from "../../assets/Images/racapajole3-removebg-preview.png";
import racapajole2 from "../../assets/Images/racapajole2-removebg-preview.png";
import racapajole1 from "../../assets/Images/capturar-removebg-preview.png";


import { InputSearch } from "../input";
import { StyledInputContainer } from "../Input/styled";
import { StyledLogo } from "./logo";

export const Header = () => {
  return (
    // <StyledHeader>
    // {/* <figure>
    //   {' '}
    //   <img src={Logo} alt="Logo" />
    // </figure>
    // <div className="buttons__box">
    //   <Link to={'#'}>Login</Link>
    //   <Link to={'#'}>Cadastro</Link>
    // </div> */}
    <>
      <StyledHeader>
        <div className="container">
          <h1>Racapajole</h1>
          <div className="btn">
            <button>Login</button>
            <button>Cadastro</button>
          </div>
        </div>
      </StyledHeader>
      <StyledLogo>
          <img src={Logo} alt="" />
          <img src={racapajole4} alt="" />
          <img src={racapajole3} alt="" />
          <img src={racapajole2} alt="" />
          <img src={racapajole1} alt="" />
        <div className="imgHome">
        </div>
      </StyledLogo>
      <StyledInputContainer>
        <InputSearch />
      </StyledInputContainer>
    </>

    // </StyledHeader>
  );
};
