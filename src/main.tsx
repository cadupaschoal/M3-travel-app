import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './providers/UserContext';
import { CountryProvider } from './providers/CountriesContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CountryProvider>
        <UserProvider>
          <ToastContainer autoClose={2000} position="top-center" />
          <App />
        </UserProvider>
      </CountryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
