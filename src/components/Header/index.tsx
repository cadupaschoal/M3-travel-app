import { Link } from 'react-router-dom';
import { StyledHeader } from './styled';
import Logo from '../../assets/Images/react.svg';
export const Header = () => {
  return (
    <StyledHeader>
      <figure>
        {' '}
        <img src={Logo} alt="Logo" />
      </figure>
      <div className="buttons__box">
        <Link to={'#'}>Login</Link>
        <Link to={'#'}>Cadastro</Link>
      </div>
    </StyledHeader>
  );
};
