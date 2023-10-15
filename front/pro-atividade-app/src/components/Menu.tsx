import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';


const Menu = () => {
  const getActiveRoute = useLocation().pathname ? 'Active' : '';

  return (
    <Navbar className='navbar-dark' bg="primary" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand as={NavLink} to='/'>Ativy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    
                    {
                    /*<Nav.Link rhref="#home">Clientes</Nav.Link>
                    <Nav.Link rhref="#link">Atividades</Nav.Link> 

                    //as={ NavLink } estou dizendo que um componente se comporta como outro componente */}
                    <Nav.Link 
                        //activeClassName='active' //não existi no route-dom 6
                        //className={(navData) => navData.isActive ? 'Active' : ''}  //usado no java
                        className={getActiveRoute}
                        as={NavLink} 
                        to='/atividades'
                    >Atividades</Nav.Link>

                    <Nav.Link 
                        className={getActiveRoute}
                        as={NavLink} 
                        to='/clientes'
                    >Clientes</Nav.Link>

                </Nav>
                <Nav>
                    <NavDropdown align="end" title="Administrador" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Configurações</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Sair</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Menu;