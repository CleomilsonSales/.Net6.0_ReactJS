import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
//import 'bootswatch/dist/slate/bootstrap.min.css';
//import 'bootswatch/dist/sketchy/bootstrap.min.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Menu />
    <div className="container" >
        <App />
    </div>
  </>,
  document.getElementById('root')
);
