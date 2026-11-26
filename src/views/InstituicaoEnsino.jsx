import { useEffect, useMemo, useState } from 'react';
import { Alert, Badge, Button, OverlayTrigger, Table, Tooltip } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { formatarNumero, rankingPorMatriculas } from '../utils/ranking';

const API_URL = 'http://localhost:5000/instituicoesensino';

const InstituicaoEnsino = () => {
  const [instituicoesEnsino, setInstituicoesEnsino] = useState([]);
  const [erro, setErro] = useState(null);

  // Carrega as IEs da API (json-server) ao abrir a tela
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Status ${response.status}`);
        }
        return response.json();
      })
      .then((dados) => setInstituicoesEnsino(dados))
      .catch((error) => {
        console.log('Erro ao carregar as IEs.', error);
        setErro('Não foi possível carregar as Instituições de Ensino.');
      });
  }, []);

  // Ranking das 10 IEs da Paraíba com mais matrículas (recalculado quando a lista muda)
  const top10 = useMemo(
    () => rankingPorMatriculas(instituicoesEnsino, 10),
    [instituicoesEnsino],
  );

  const removerHandleClick = (id) => {
    if (!window.confirm('Deseja realmente remover esta Instituição de Ensino?')) {
      return;
    }

    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Status ${response.status}`);
        }
        // Só remove da tabela depois que a API confirmou a remoção
        setInstituicoesEnsino((anteriores) =>
          anteriores.filter((ie) => ie.id !== id),
        );
      })
      .catch((error) => {
        console.log('Erro ao remover a IE.', error);
        setErro('Não foi possível remover a Instituição de Ensino.');
      });
  };

  return (
    <>
      <h2 className="pt-4">TOP 10 Instituições de ensino com mais matrículas na Paraíba</h2>
      <p className="text-muted">
        Ranking por matrículas totais
      </p>

      {erro && (
        <Alert variant="danger" dismissible onClose={() => setErro(null)}>
          {erro}
        </Alert>
      )}

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
            <th className="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {top10.map((instituicao) => (
            <tr key={instituicao.id}>
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
              <td className="text-center">
                <OverlayTrigger placement="top" overlay={<Tooltip>Remover</Tooltip>}>
                  <Button
                    variant="danger"
                    size="sm"
                    aria-label={`Remover ${instituicao.no_entidade}`}
                    onClick={() => removerHandleClick(instituicao.id)}
                  >
                    <FaTrash />
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default InstituicaoEnsino;

