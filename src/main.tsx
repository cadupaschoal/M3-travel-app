import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './providers/UserContext';
import { CountryProvider } from './providers/CountriesContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CountryProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CountryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
