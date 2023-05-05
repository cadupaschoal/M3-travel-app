import Logo from "../../assets/Images/aviator.jpg";
import Login from "../Login";
import { Header } from "../../components/Header";
import aviatorImg from "../../assets/Images/aviator.jpg";
import imgHome from "../../assets/Images/imgHome.png";
import { StyledHome } from "./styled";

const HomePage = () => {
  return (
    <StyledHome>
      <div className="container__Home">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={imgHome} alt="" />
        </div>

        <Header />
      </div>
    </StyledHome>
  );
};

export default HomePage;
