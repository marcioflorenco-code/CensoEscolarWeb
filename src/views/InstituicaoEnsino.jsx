import { Badge, Table } from 'react-bootstrap';
import ie from '../datasets/ie_paraiba_2025.json';
import { formatarNumero, rankingPorMatriculas } from '../utils/ranking';

const InstituicaoEnsino = () => {
  // Ranking das 10 IEs da Paraíba com mais matrículas
  const top10 = rankingPorMatriculas(ie, 10);

  return (
    <>
      <h2 className="pt-4">TOP 10 Instituições de ensino com mais matrículas na Paraíba</h2>
      <p className="text-muted">
        Ranking por matrículas totais
      </p>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>posição</th>
            <th>Instituição</th>
            <th>Município</th>
            <th className="text-end">Infantil</th>
            <th className="text-end">Fundamental</th>
            <th className="text-end">Médio</th>
            <th className="text-end">Total de matriculas</th>
          </tr>
        </thead>
        <tbody>
          {top10.map((instituicao) => (
            <tr key={instituicao.co_entidade}>
              <td>
                <Badge bg={instituicao.posicao <= 3 ? 'warning' : 'secondary'}>
                  {instituicao.posicao}º
                </Badge>
              </td>
              <td>{instituicao.no_entidade}</td>
              <td>{instituicao.no_municipio}</td>
              <td className="text-end">
                {formatarNumero(instituicao.qt_mat_inf)}
              </td>
              <td className="text-end">
                {formatarNumero(instituicao.qt_mat_fund)}
              </td>
              <td className="text-end">
                {formatarNumero(instituicao.qt_mat_med)}
              </td>
              <td className="text-end fw-bold">
                {formatarNumero(instituicao.qt_mat_bas)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default InstituicaoEnsino;
