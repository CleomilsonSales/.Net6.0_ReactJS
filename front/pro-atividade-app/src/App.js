import './App.css';
import Atividade from "./pages/atividades/Atividade";
import Cliente from './pages/clientes/Cliente';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';
import ClienteForm from './pages/clientes/ClienteForm';
import PageNotFound from './pages/PageNotFound';



//tudo que estava aqui foi para o componente Atividade.jsx
export default function App(){
  return (
    <>
      <Route path='/' exact component={ Dashboard } />
      <Route path='/atividades/lista' component={ Atividade } />
      <Route path='/clientes/lista' component={ Cliente } />
      <Route path='/clientes/:id/atividades' component={ Atividade } />
      <Route path='/clientes/detalhe/:id?' component={ ClienteForm } />  { /* ? = id é opcional, caso não funcione usar (:id)?*/ }
      {/*<Route component={ PageNotFound } />*/}

    </>
  );

}

//para testar as routers
/*const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to='/atividades'>Atividades</Link>
  </div>
);*/
