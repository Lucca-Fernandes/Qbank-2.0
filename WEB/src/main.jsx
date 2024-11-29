import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client'
import App from './App';
import './index.css'; // Seu arquivo de estilos, se existir

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
