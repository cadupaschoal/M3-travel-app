import { Link } from 'react-router-dom';
import { StyledHeader } from './styled';
import Logo from '../../assets/Images/logoRacapajole-removebg-preview.png';

export const Header = () => {
  return (
    <StyledHeader>
      <div className="flex justify-center items-center pb-40 flex-col">
        <figure>
          {' '}
          <img src={Logo} alt="Logo" />
        </figure>
        <div className="buttons__box">
          <div>
            <Link className='bg-slate-800 px-8 py-2 rounded text-white/80' to={'/login'}>Login</Link>
          </div>
          <div>
            <Link className='bg-slate-800 px-6 py-2 rounded text-white/80' to={'/register'}>Cadastro</Link>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
