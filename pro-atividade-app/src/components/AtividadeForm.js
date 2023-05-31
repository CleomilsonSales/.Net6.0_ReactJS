import { useState } from 'react'
import Atividade from './Atividade';

export default function AtividadeForm(props) {
    const [atividade, setAtividade] = useState({})
  
    const inputTextHandler = (e) => {
        const {name, value} = e.target;
        //apenas teste
        //console.log(value);
        setAtividade({...atividade,[name]:value}) //to jogando uma nova propriedade ao meu array atividade
  }

  return (
    <form className="row g-3">
        <div className="col-md-6">
            <label className='form-label'>Id</label>
            <input 
                name="id" 
                id="id" 
                type="text" 
                className="form-control" 
                /*readOnly */ 
                onChange={inputTextHandler}
                value={ props.ativSelecionada.id }
                /*value={ props.ativSelecionada !== undefined ? Math.max.apply(Math, props.atividades.map(item => item.id)) + 1 : props.ativSelecionada.id} /*incrementado id de uma forma bem legal*/ />
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
            <button className="btn btn-outline-secondary" onClick={ props.addAtividade }>Add Atividade</button>
        </div>

    </form>

  )
}
