import './App.css';
import { useState } from 'react';

let initialState = [{
  'id': 1,
  'descricao': 'Primeira atividade'
},
{
  'id': 2,
  'descricao': 'Segunda atividade'
}];

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
      descricao: document.getElementById('descricao').value,
    }
  
    //atividades.push(atividade); antes do hook
    //console.log(atividades);
    setAtividades([... atividades, { ... atividade }]); //refresh na tela


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
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputId" className='form-label'>Id</label>
          <input id="id" type="text" className="form-control" />
        </div>
        <div class="col-md-6">
          <label for="inputDescricao" className="form-label">Descricao</label>
          <input id="descricao" type="descricao" className="form-control" />
        </div>
        <hr/>
        <div class="col-12">
          <button className="btn btn-outline-secondary" onClick={ addAtividade }>Add Atividade</button>
        </div>

      </form>

      <div className="mt-3">
          {atividades.map(ativ => (
            // como seria com estilo: style={{ width: "18rem" }}>
            <div key={ativ.id} className="card mb-2 shadow-sm" > 
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  <span className="badge bg-secondary me-1">{ ativ.id }</span>
                   -Titulo
                </h5>
                <h6>
                  Prioridade: Normal
                </h6>
              </div>
              <div className="card-body">
                <p className="card-text">{ativ.descricao }</p>
              </div>
            </div>
          ))}
      </div>
      
    </>
  );
}

export default App;
