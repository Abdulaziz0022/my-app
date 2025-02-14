import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import './items.css'
import App from './App';
import App1 from './items';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>  
    </App>
    <App1 />
  </React.StrictMode>
);
