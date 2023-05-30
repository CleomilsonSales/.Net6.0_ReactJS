import './App.css';
import { useState } from 'react';

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

  //caso queria usar o java puro para fazer a inserção do forms
  function addAtividade (e){ //o E é um evento que esta recebendo
    e.preventDefault(); //evitando o submit do form
    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value,
    }
  
    //atividades.push(atividade); antes do hook
    //console.log(atividades);
    setAtividades([... atividades, { ... atividade }]); //refresh na tela


  }

  function prioridadeLabel(param){
    switch(param){
      case '1':
        return 'Baixa';
      case '2':
        return 'Normal';
      case '3':
        return 'Alta';
      default:
        return 'Não definida';
    }
  }

  function prioridadeStyle(param,icone){
    switch(param){
      case '1':
        return icone ? 'smile' : 'success';
      case '2':
        return icone ? 'meh' : 'dark';
      case '3':
        return icone ? 'frown' : 'warning';
      default:
        return 'Não definida';
    }
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
      <form className="row g-3">
        <div className="col-md-6">
          <label className='form-label'>Id</label>
          <input id="id" type="text" className="form-control" readOnly 
            value={ Math.max.apply(Math, atividades.map(item => item.id)) + 1 } /*incrementado id de uma forma bem legal*/ />
        </div>

        <div className="col-md-6">
          <label className='form-label'>Prioridade</label>
          <select id='prioridade' className='form-select'>
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Baixa</option>
            <option value="2">Média</option>
            <option value="3">Alta</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input id="titulo" type="text" className="form-control" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Descricao</label>
          <input id="descricao" type="text" className="form-control" />
        </div>

        <hr/>
        <div className="col-12">
          <button className="btn btn-outline-secondary" onClick={ addAtividade }>Add Atividade</button>
        </div>

      </form>

      <div className="mt-3">
          {atividades.map(ativ => (
            // como seria com estilo: style={{ width: "18rem" }}>
            <div key={ativ.id} className={ 'card mb-2 shadow-sm border-'+prioridadeStyle(ativ.prioridade) } > 
              <div className='card-body'>
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">
                    <span className="badge bg-secondary me-1">
                      { ativ.id }
                    </span>
                    -{ ativ.titulo }
                  </h5>
                  <h6>
                    Prioridade: 
                    <span className={ 'ms-1 text-' + prioridadeStyle(ativ.prioridade) }>
                      <i className={ 'me-1 far fa-' + prioridadeStyle(ativ.prioridade,true) }></i>
                      { prioridadeLabel(ativ.prioridade) }
                    </span>
                  </h6>
                </div>
                <p className="card-text">{ativ.descricao }</p>
                <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                  <button className='btn btn-sm btn-outline-primary me-2'>
                    <i className='fas fa-pen me-2'></i>
                    Editar
                  </button> 
                  <button className='btn btn-sm btn btn-outline-danger'>
                    <i className='fas fa-trash me-2'></i>
                    Deletar
                  </button>

                </div>
              </div>
            </div>
          ))}
      </div>
      
    </>
  );
}

export default App;
