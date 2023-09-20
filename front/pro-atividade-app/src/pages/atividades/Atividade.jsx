// se escrever rfc ele criar o basico de uma funçao de componentes - da extensão ES7 React
import React from 'react'

export default function Atividade(props) {
  function prioridadeLabel(param){
    switch(param){
      /*case '1':
        return 'Baixa';
      case '2':
        return 'Normal';
      case '3':
        return 'Alta';*/
      case 'Baixa':
      case 'Normal':
      case 'Alta':
        return param;
      default:
        return 'Não definida';
    }
  }

  function prioridadeStyle(param,icone){
    switch(param){
      /*case '1':
        return icone ? 'smile' : 'success';
      case '2':
        return icone ? 'meh' : 'dark';
      case '3':
        return icone ? 'frown' : 'warning';*/
      case 'Baixa':
        return icone ? 'smile' : 'success';
      case 'Normal':
        return icone ? 'meh' : 'dark';
      case 'Alta':
        return icone ? 'frown' : 'warning';
      default:
        return 'Não definida';
    }
  }

  return (
    // como seria com estilo: style={{ width: "18rem" }}>
    <div  className={ 'card mb-2 shadow-sm border-'+prioridadeStyle(props.ativ.prioridade) } > 
      <div className='card-body'>
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge bg-secondary me-1">
              { props.ativ.id }
            </span>
            -{ props.ativ.titulo }
          </h5>
          <h6>
            Prioridade: 
            <span className={ 'ms-1 text-' + prioridadeStyle(props.ativ.prioridade) }>
              <i className={ 'me-1 far fa-' + prioridadeStyle(props.ativ.prioridade,true) }></i>
              { prioridadeLabel(props.ativ.prioridade) }
            </span>
          </h6>
        </div>
        <p className="card-text">{props.ativ.descricao }</p>
        <div className='d-flex justify-content-end pt-2 m-0 border-top'>
          <button 
            className='btn btn-sm btn-outline-primary me-2'
            onClick={() => props.pegarAtividade(props.ativ.id)}>
            <i className='fas fa-pen me-2'></i>
            Editar
          </button> 
          { /*arrow function esta sendo usada nesse cara que a função seja usada fora da chamada do botão*/ }
          <button 
            className='btn btn-sm btn btn-outline-danger'
            //onClick={() => props.deletarAtividade(props.ativ.id)}
            onClick={ () => props.handleConfirmModal(props.ativ.id) }> 
            <i className='fas fa-trash me-2'></i>
            Deletar
          </button>

        </div>
      </div>
    </div>
  )
}
