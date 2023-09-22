import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
//import 'bootswatch/dist/slate/bootstrap.min.css';
//import 'bootswatch/dist/sketchy/bootstrap.min.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //router é para ativar as rotas no menu.jsx
  <Router> 
    <Menu />
    <div className="container" >
        <App />
    </div>
  </Router>,
  //document.getElementById('root')
);
