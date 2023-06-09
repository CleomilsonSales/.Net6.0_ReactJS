import './App.css';
import { useState } from 'react';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';

//iniciando para testes
let initialState = [{
  id: 1,
  prioridade: '1',
  titulo: 'Primeira atividade',
  descricao: 'Primeira atividade'
},
{
  id: 2,
  prioridade: '2',
  titulo: 'Segunda atividade',
  descricao: 'Segunda atividade'
},
{
  id: 3,
  prioridade: '3',
  titulo: 'Terceira atividade',
  descricao: 'Terceira atividade'
}
];

function App() {
  //teste
  /*const atividades = [{
    'id': 1,
    'descricao': 'Primeira atividade'
  },
  {
    'id': 2,
    'descricao': 'Segunda atividade'
  }]*/
  const [atividades, setAtividades] = useState(initialState) //com Hook useState - atualizar tela
  const [atividade, setAtividade] = useState({})

  //caso queria usar o java puro para fazer a inserção do forms
  function addAtividade (e){ //o E é um evento que esta recebendo
    e.preventDefault(); //evitando o submit do form
    const atividade = {
      //id: document.getElementById('id').value,
      id: Math.max.apply(Math, atividades.map((item) => item.id)) + 1,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value,
    }
  
    //atividades.push(atividade); antes do hook
    //console.log(atividades);
    // os "..." é um spread operator, muito usando para fazer copia exata de um array
    setAtividades([...atividades, { ...atividade }]); //refresh na tela 
  }

  function deletarAtividade(id){
    const atividadesFiltrada = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltrada]);
  }

  function pegarAtividade(id){
    const atividade = atividades.filter((atividade) => atividade.id === id);
    setAtividade(atividade[0]);
  }

  return (
    /*<div className='mt-3'>
      <ul className='list-group'>
        <li className='list-group-item' >{ atividades[0].id } { atividades[0].descricao }</li>
        <li className='list-group-item' onClick={() => console.log('JSX')} >{ atividades[1].id } { atividades[1].descricao }</li>
      </ul>
    </div>*/
    
    //map é o mesmo forEach, não esquecer que atribuir o key
    //<>  é um fragments de forma reduzida a escrita
    //se passar os () depois de um função ele vai executar no momento da criação do jsx
    <> 
      <AtividadeForm 
        //mandando minha função para meu componente, sera um props do outro lado
        addAtividade={addAtividade}
        ativSelecionada={atividade}
        atividades={atividades}
      />

      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />
      
    </>
  );
}

export default App;
