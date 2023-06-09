import { useState, useEffect } from 'react'
import Atividade from './Atividade';

const atividadeInicial = {
    id: 0,
    titulo: '',
    prioridade: 0,
    descricao: ''
}

export default function AtividadeForm(props) {
    const [atividade, setAtividade] = useState(atividadeAtual())
  
    //é como se fosse um observer, ou seja, isso é chamado sempre que o componente foi criado na aplicação e toda vez que o estado do componente muda, ele é chamado de novo
    useEffect(() => {
        //console.log('useEffect funcinando');
        if (props.ativSelecionada.id !== 0)
            setAtividade(props.ativSelecionada);
    }, [props.ativSelecionada]) // , [] é pra ele ser usado apenas um vez no componente, se informa um constante ele so faz executar novamente nesse estado

    const inputTextHandler = (e) => {
        const {name, value} = e.target;
        //apenas teste
        //console.log(value);
        setAtividade({...atividade,[name]:value}) //to jogando uma nova propriedade ao meu array atividade
  }

  const handleCancelar = (e) => {
    e.preventDefault();
    setAtividade(atividadeInicial);
  }

  function atividadeAtual(){
    if (props.ativSelecionada.id === 0){
        return props.ativSelecionada;
    }else{
        return atividadeInicial;
    }
  }

  return (
    <>
        <h1>Atividade { atividade.id !== 0 ? atividade.id : '' }</h1>
        <form className="row g-3">
            {/*<div className="col-md-6">
                <label className='form-label'>Id</label>
                <input 
                    name="id" 
                    id="id" 
                    type="text" 
                    className="form-control" 
                    //readOnly
                    onChange={inputTextHandler}
                    value={ props.ativSelecionada.id }
                    //incrementado id de uma forma bem legal
                    //value={ props.ativSelecionada !== undefined ? Math.max.apply(Math, props.atividades.map(item => item.id)) + 1 : props.ativSelecionada.id} />
            </div>*/}

            <div className="col-md-6">
                <label className="form-label">Título</label>
                <input 
                    name='titulo'
                    value={ atividade.titulo }
                    onChange={ inputTextHandler }
                    id="titulo" 
                    type="text" 
                    className="form-control" />
            </div>

            <div className="col-md-6">
                <label className='form-label'>Prioridade</label>
                <select 
                    name='prioridade'
                    value={ atividade.prioridade }
                    onChange={ inputTextHandler }
                    id='prioridade'
                    className='form-select'>
                <option defaultValue="0">Selecionar...</option>
                <option value="1">Baixa</option>
                <option value="2">Média</option>
                <option value="3">Alta</option>
                </select>
            </div>

            <div className="col-md-12">
                <label className="form-label">Descricao</label>
                <textarea 
                    name='descricao'
                    value={ atividade.descricao }
                    onChange={ inputTextHandler }
                    id="descricao" 
                    type="text" 
                    className="form-control" />
            </div>

            <hr/>
            <div className="col-12">
                {atividade.id === 0 ? (
                    <button 
                        className="btn btn-outline-secondary" 
                        onClick={ props.addAtividade }>
                            <i className='fas fa-plus me-2'></i>
                            Atividade
                    </button>
                ) : (
                    <>
                        <button 
                            className="btn btn-outline-success me-2" type='submit'>
                                <i className='fas fa-plus me-2'></i>
                                Salvar
                        </button>

                        <button 
                            className="btn btn-outline-warning" 
                            onClick={ handleCancelar }>
                                <i className='fas fa-plus me-2'></i>
                                Cancelar
                        </button>
                    </>
                )}
            </div>

        </form>
    </>
  )
}
