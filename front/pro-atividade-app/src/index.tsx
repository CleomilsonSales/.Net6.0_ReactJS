import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App";
//import 'bootswatch/dist/slate/bootstrap.min.css';
//import 'bootswatch/dist/sketchy/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <Menu />
    <div className='container'>
      <App />
    </div>
  </Router>,
  document.getElementById('root')
);

/* javascript
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
*/