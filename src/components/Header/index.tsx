import { Link } from 'react-router-dom';
import { StyledHeader } from './styled';
import Logo from '../../assets/Images/logoRacapajole-removebg-preview.png';

export const Header = () => {
  return (
    <StyledHeader>
      <div className="container__Header">
        <figure>
          {' '}
          <img src={Logo} alt="Logo" />
        </figure>
        <div className="buttons__box">
          <div className="button__Login">
            <Link to={'/login'}>Login</Link>
          </div>
          <div className="button__Cadastro">
            <Link to={'/register'}>Cadastro</Link>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
