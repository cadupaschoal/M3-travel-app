import { Link } from 'react-router-dom';
import { StyledHeader } from './styled';

export const Header = () => {
  return (
    <StyledHeader>
      <figure>
        {' '}
        <img src="" alt="Logo" />
      </figure>
      <div className="buttons__box">
        <Link to={'#'}>Login</Link>
        <Link to={'#'}>Cadastro</Link>
      </div>
    </StyledHeader>
  );
};
