import { Col, Container, Row } from 'react-bootstrap';
import { IoHomeOutline, IoSchoolOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const estiloLink = {
  color: 'rgba(255, 255, 255, 0.75)',
  textDecoration: 'none',
};

const Footer = () => {
  return (
    <footer
      className="text-light mt-5 pt-5 pb-3"
      style={{ backgroundColor: '#003f69' }}
    >
      <Container>
        <Row className="gy-4">
          {/* Marca */}
          <Col xs={12} md={5}>
            <div className="d-flex align-items-center gap-2 mb-2">
            
              <span className="fs-5 fw-semibold">Censo Escolar</span>
            </div>
            <p className="mb-0 small" style={{ color: 'rgba(255,255,255,.7)' }}>
              Instituições de ensino da Paraíba organizadas a partir dos dados
              abertos do Censo Escolar 2025.
            </p>
          </Col>

          {/* Navegação */}
          <Col xs={6} md={3} className="offset-md-1">
            <h6 className="text-uppercase small fw-bold mb-3">Navegação</h6>
            <ul className="list-unstyled mb-0 d-grid gap-2">
              <li>
                <Link to="/" style={estiloLink}>
                  <IoHomeOutline className="me-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/instituicoesensino" style={estiloLink}>
                  <IoSchoolOutline className="me-2" />
                  Instituições de Ensino
                </Link>
              </li>
            </ul>
          </Col>

          {/* Fonte dos dados */}
          <Col xs={6} md={3}>
            <h6 className="text-uppercase small fw-bold mb-3">Dados</h6>
            <ul className="list-unstyled mb-0 d-grid gap-2 small">
              <li style={{ color: 'rgba(255,255,255,.75)' }}>INEP</li>
              <li style={{ color: 'rgba(255,255,255,.75)' }}>
                Censo Escolar 2025
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,.25)' }} />

        <p
          className="text-center small mb-0"
          style={{ color: 'rgba(255,255,255,.6)' }}
        >
          © {new Date().getFullYear()} Censo Escolar · Todos os direitos
          reservados.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;