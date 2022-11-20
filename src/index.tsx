import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './data/AuthContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <AuthProvider>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </AuthProvider>
  </>
);
