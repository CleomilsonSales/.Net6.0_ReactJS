import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TitlePage from '../../components/TitlePage';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

const clientes = [
  {
    id: 1,
    nome: 'Microsoft',
    responsavel: 'Otto',
    contato: '10665544',
    situacao: 'Ativos'
  },
  {
    id: 2,
    nome: 'Apple',
    responsavel: 'Silvio',
    contato: '85955655',
    situacao: 'Em analise'
  },
  {
    id: 3,
    nome: 'Facebook',
    responsavel: 'Maria',
    contato: '8595658855',
    situacao: 'Desativado'
  }
]

export default function ClienteLista() {
  const navigate = useNavigate();
  const [termoBusca, setTermoBusca] = useState('');
  const handleInputChange = (e) => {
    setTermoBusca(e.target.value);
    console.log(termoBusca);
  };

  const clientesFiltrados = clientes.filter((cliente) => {
    /*return cliente.nome.toLocaleLowerCase().indexOf(termoBusca) !== -1 || 
      cliente.responsavel.toLocaleLowerCase().indexOf(termoBusca) !== -1 ;*/
      //usando javascript
      return Object.values(cliente)
        .join (' ') //separando por espaço
        .toLowerCase() //passando para minuscula  
        .includes(termoBusca.toLowerCase());  //a busca
  });
  
  const novoCliente = () => {
    navigate('/clientes/detalhe');
  }

  return (
    <>
        <TitlePage title='Cliente Lista'>
          <Button variant='outline-secondary' onClick={ novoCliente }>
            <i className='fas fa-plus me-2'></i>
            Novo Cliente
          </Button>
        </TitlePage>
        <InputGroup className='mt-3 mb-3'>
          <InputGroup.Text>Buscar</InputGroup.Text>
          <FormControl onChange={handleInputChange} placeholder='Buscar por nome do cliente' />
        </InputGroup>
        <table className='table table-striped table-hover'>
          <thead className='table-dark mt-3'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Nome</th>
              <th scope='col' >Responsável</th>
              <th scope='col' >Contato</th>
              <th scope='col' >Situação</th>
              <th scope='col' >Opções</th>
            </tr>
          </thead>
          <tbody>
            {clientesFiltrados.map((cliente) => ( //aqui tambem posso passar sem filtro, tipo: clientes
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.responsavel}</td>
                <td>{cliente.contato}</td>
                <td>{cliente.situacao}</td>
                <td>
                  <div>
                    <button 
                      className='btn btn-sm btn-outline-primary me-2'
                      //onClick={ () => navigate.push(`/clientes/detalhe/${cliente.id}`) } //push não existe mais no route-dom 6
                      onClick={ () => navigate(`/clientes/detalhe/${cliente.id}`) }
                    >
                      <i className='fas fa-user-edit me-2'></i>
                      Editar
                    </button>
                    <button className='btn btn-sm btn-outline-danger me-2'>
                    <i className='fas fa-user-times me-2'></i>
                      Desativar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </>
  )
}
