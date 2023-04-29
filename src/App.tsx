import { Header } from './components/Header';
import { GlobalStyle } from './styles/reset';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <h1>Teste</h1>
    </div>
  );
};

export default App;
