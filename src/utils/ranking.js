export const rankingPorMatriculas = (instituicoes, limite = 10) => {
  return [...instituicoes] // cópia: não altera o array original
    .sort(
      (a, b) =>
        b.qt_mat_bas - a.qt_mat_bas ||
        a.no_entidade.localeCompare(b.no_entidade, 'pt-BR'),
    )
    .slice(0, limite)
    .map((ie, i) => ({ ...ie, posicao: i + 1 }));
};

export const calcularResumo = (instituicoes) => {
  const municipios = new Set(instituicoes.map((ie) => ie.co_municipio));
  const totalMatriculas = instituicoes.reduce(
    (soma, ie) => soma + ie.qt_mat_bas,
    0,
  );
  return {
    totalIEs: instituicoes.length,
    totalMunicipios: municipios.size,
    totalMatriculas,
  };
};

export const formatarNumero = (n) => n.toLocaleString('pt-BR');
