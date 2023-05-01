import { Header } from "./components/Header";
import { ModalLogin } from "./pages/Login/modal";
import { ModalRegister } from "./pages/Register/modal";
import { GlobalStyle } from "./styles/reset";


const App = () => {
  return (
    // <div className="App">
    //   {/* <GlobalStyle />
    //   <Header />
    //   {/* <h1>Novo commit</h1> */}
    <div>

      
      <Header />
     
      <ModalLogin />
      <ModalRegister/>
    </div>
    // </div>
  );
};

export default App;
