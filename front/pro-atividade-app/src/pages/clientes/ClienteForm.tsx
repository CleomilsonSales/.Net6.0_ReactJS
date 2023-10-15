import React from 'react'
import TitlePage from '../../components/TitlePage';
import { useNavigate, useParams } from 'react-router-dom'; //useHistory não existe mais no router-dom 6, agora é useNavigate
import { Button } from 'react-bootstrap';

const ClienteForm = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  return (
    <>
        <TitlePage title={ 'Cliente Detalhes ' + (id !== undefined ? id : '')}>
          <Button
            variant='outline-secondary'
            //onClick={ () => history.goBack() } //apenas volta a pagina do navegador, detalhe, goBack não existe no route-dom 6
            onClick={ () => navigate('/clientes/lista') } 
          >
            <i className='fas fa-arrow-left me-2'></i>
            Voltar
          </Button>
        </TitlePage>
        <div></div>
    </>
    
  )
}

export default ClienteForm;