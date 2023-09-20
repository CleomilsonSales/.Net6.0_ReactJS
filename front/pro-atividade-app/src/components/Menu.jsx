import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default function Menu() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Ativy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link rhref="#home">Clientes</Nav.Link>
                    <Nav.Link rhref="#link">Atividades</Nav.Link>
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