import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
     <Navbar
  expand="lg"
  data-bs-theme="dark"
  style={{ backgroundColor: '#024876' }}
>
        <Container>
          <Navbar.Brand href="#home">

            Censo Escolar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="header-navbar" />
          <Navbar.Collapse id="header-navbar">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/instituicoesensino">
                <Nav.Link>Instituições Ensino</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
