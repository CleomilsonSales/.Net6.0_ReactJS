import './App.css';
import Atividade from "./pages/atividades/Atividade";
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';

//tudo que estava aqui foi para o componente Atividade.jsx
export default function App(){
  return (
    <>
      <Route path='/' exact component={ Home } />
      <Route path='/atividades' component={ Atividade } />
    </>
  );

}

//para testar as routers
const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to='/atividades'>Atividades</Link>
  </div>
);
