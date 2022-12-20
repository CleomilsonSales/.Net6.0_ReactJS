import './App.css';

function App() {
  //teste
  const atividades = [{
    'id': 1,
    'descricao': 'Primeira atividade'
  },
  {
    'id': 2,
    'descricao': 'Segunda atividade'
  }]
  //caso queria usar o java puro para fazer a inserção do forms
  function addAtividade (e){ //o E é um evento que esta recebendo
    e.preventDefault(); //evitando o submit do form
    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value,
    }
  
    atividades.push(atividade);
    console.log(atividades);

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
      <form>
        <input id='id' type='text' placehold='Id' />
        <input id='descricao' type='descricao' placehold='Descrição' />
        <button onClick={ addAtividade }>Add Atividade</button>
      </form>

      <div className='mt-3'>
        <ul className='list-group'>
          {atividades.map(ativ => (
            <li key={ativ.id} className='list-group-item' >{ ativ.id }-{ativ.descricao }</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
