import './App.css';
import Atividade from "./pages/atividades/Atividade";
import Cliente from './pages/clientes/Cliente';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';



//tudo que estava aqui foi para o componente Atividade.jsx
export default function App(){
  return (
    <>
      <Route path='/' exact component={ Dashboard } />
      <Route path='/atividades/lista' component={ Atividade } />
      <Route path='/clientes/lista' component={ Cliente } />
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
