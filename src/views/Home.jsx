import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import Carrossel from '../components/Carrossel';
import ie from '../datasets/ie_paraiba_2025.json';
import { calcularResumo, formatarNumero } from '../utils/ranking';

const Home = () => {
  const resumo = calcularResumo(ie);

  const itensCarrossel = [
    {
      srcImagem: 'https://s2-g1.glbimg.com/BtpdUF1Vl4s1v6e4Rn_x9NpXBXM=/0x0:1700x1065/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2017/03/09/ufpb_reitoria.jpg',
      titulo: 'Censo Escolar',
      descricao: 'Conheça as instituições de ensino da Paraíba.',
    },
    {
      srcImagem: 'https://www.brasildefato.com.br/wp-content/uploads/2025/04/campus-picui-do-instituto-federal-da-paraiba.webp',
      titulo: 'Dados abertos do INEP',
      descricao: 'Informações organizadas a partir dos microdados oficiais.',
    },
    {
      srcImagem: 'https://media.licdn.com/dms/image/v2/C4E1BAQGJcUg5vZC70A/company-background_10000/company-background_10000/0/1583778102133/ifpb_cover?e=2147483647&v=beta&t=iZiycpP_ruE16LnXvLYtoVzi81-Gi0uRhJ76WH0fWyo',
      titulo: 'Instituições TOP 10',
      descricao: 'Veja as 10 instituições com mais matriculas.',
    },
  ];

  const cartoes = [
    {
      srcImagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbqxiosEHqysPzPlzMDRNUrOE7HElW4zcN2pY8SmQ-iR7jsShh8pKiaU&s=10',
      titulo: 'Instituições de ensino',
      texto: `${formatarNumero(resumo.totalIEs)} escolas em atividade na Paraíba, distribuídas em ${formatarNumero(resumo.totalMunicipios)} municípios.`,
    },
    {
      srcImagem:
        'https://www.atribunadosertao.com.br/images/noticias/8357/8d42e48227df1e6451a435524b11db41.jpg',
      titulo: 'Matrículas',
      texto: `${formatarNumero(resumo.totalMatriculas)} matrículas na educação básica registradas no Censo Escolar 2025.`,
    },
    {
      srcImagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZu0sORwSpaE4aLq5Lu0bK3SS0OO66w-tAZhaQYd1VTa0eyxqkOky_-NSd&s=10',
      titulo: 'Maiores instituições',
      texto: 'Veja o ranking das 10 instituições com mais matrículas da Paraíba.',
    },
  ];

  return (
    <>
      {/* Carrossel */}
      <div className="mt-5"></div>
      <Carrossel itensCarrossel={itensCarrossel}></Carrossel>
      {/* Cards */}
      <Container className="mt-5">
        <Row>
          {cartoes.map((c, i) => (
            <Col key={i}>
              <Card>
                <Card.Img variant="top" src={c.srcImagem} />
                <Card.Body>
                  <Card.Title>{c.titulo}</Card.Title>
                  <Card.Text>{c.texto}</Card.Text>
                  <Button
                    as={Link}
                    to="/instituicoesensino"
                    variant="primary"
                  >
                    Ver instituições
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;