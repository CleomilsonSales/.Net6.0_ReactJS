import './App.css';
import Atividade from "./pages/atividades/Atividade";
import Cliente from './pages/clientes/Cliente';
import Dashboard from './pages/dashboard/Dashboard';
import ClienteForm from './pages/clientes/ClienteForm';
import PageNotFound from './pages/PageNotFound';
import { Routes, Route } from 'react-router-dom'; //Switch na versão 6 do router-dom não existe, ele foi substituido pelo Routes

//tudo que estava aqui foi para o componente Atividade.jsx
export default function App(){
  return (
    <Routes>
      {/*<Route path='/' exact component={ Dashboard } /> forma não existe mais no route-dom 6 */}
      <Route path='/' element={ <Dashboard /> } /> {/* //exact não é mais necessário no route-dom 6 */}
      <Route path='/atividades/*' element={ <Atividade /> } /> {/*  o * quer dizer que qualquer coisa que não der match, mas tenha com /atividades, ira pra a lista */}
      <Route path='/atividades/:id/clientes' element={ <Cliente /> } />
      <Route path='/clientes/*' element={ <Cliente /> } /> 
      <Route path='/clientes/:id/atividades' element={ <Atividade /> } />
      <Route path='/clientes/detalhe/' element={ <ClienteForm /> } />  { /* ? = id é opcional, caso não funcione usar (:id)?*/ }
      <Route path='/clientes/detalhe/:id' element={ <ClienteForm /> } />  { /* ? = id é opcional, caso não funcione usar (:id)?    //isso não existe mais no route-dom 6*/ }
      <Route element={ <PageNotFound /> } />

    </Routes>
  );

}

//para testar as routers
/*const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to='/atividades'>Atividades</Link>
  </div>
);*/
