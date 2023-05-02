import { Link } from 'react-router-dom';
import { StyledModalBackground } from './styled';
import Flag from '../../assets/Images/flag.png';

export const CountryModal = () => {
  const token = true;
  const isOpen = true;
  return isOpen ? (
    !token ? (
      <StyledModalBackground>
        <div className="modal" role="dialog">
          <button className="font-[Nunito,sans-serif] font-medium">X</button>
          <div className="infos">
            <figure>
              <img src={Flag} alt="flag" />
            </figure>
            <div className="text">
              <p>País: França (FR)</p>
              <p>Nome Oficial: Republica da França</p>
              <p>Região: Europa</p>
            </div>
          </div>
          <div className="signIn">
            <p>Relize o login para receber mais informações</p>
            <div className="buttons__box">
              <Link to={'#'}>Login</Link>
              <Link to={'#'}>Cadastro</Link>
            </div>
          </div>
        </div>
      </StyledModalBackground>
    ) : (
      <StyledModalBackground>
        <div className="modal" role="dialog">
          <button className="font-[Nunito,sans-serif] font-medium">X</button>
          <div className="infos">
            <figure>
              <img src={Flag} alt="flag" />
            </figure>
            <div className="text">
              <p>País: França (FR)</p>
              <p>Nome Oficial: Republica da França</p>
              <p>Região: Europa</p>
            </div>
          </div>
          <div className="infos__loged">
            <p>Moeda: Euro (EUR)</p>
            <p>Capital: Paris</p>
            <p>Fronteiras: </p>
            <ul className="frontier">
              <li>
                <figure>
                  <img src={Flag} alt="flag" />
                  <p>França</p>
                </figure>
              </li>
              <li>
                <figure>
                  <img src={Flag} alt="flag" />
                  <p>França</p>
                </figure>
              </li>
              <li>
                <figure>
                  <img src={Flag} alt="flag" />
                  <p>França</p>
                </figure>
              </li>
              <li>
                <figure>
                  <img src={Flag} alt="flag" />
                  <p>França</p>
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </StyledModalBackground>
    )
  ) : null;
};
