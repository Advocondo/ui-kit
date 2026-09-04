window.EA_DATA = (() => {
  const condominios = [
    { id: 'villa-verde', nome: 'Res. Villa Verde', unidades: 184, cidade: 'Águas Claras/DF', sindico: 'Marcos Tavares', processos: 14, inadimplencia: 'R$ 312.480,00' },
    { id: 'parque-aguas', nome: 'Cond. Parque das Águas', unidades: 96, cidade: 'Águas Claras/DF', sindico: 'Rita Belmonte', processos: 9, inadimplencia: 'R$ 128.900,00' },
    { id: 'century-plaza', nome: 'Ed. DF Century Plaza', unidades: 320, cidade: 'Águas Claras/DF', sindico: 'Conselho Gestor', processos: 21, inadimplencia: 'R$ 704.115,00' },
    { id: 'jardins-sul', nome: 'Cond. Jardins do Sul', unidades: 140, cidade: 'Taguatinga/DF', sindico: 'Helena Prado', processos: 7, inadimplencia: 'R$ 87.240,00' },
    { id: 'terra-nova', nome: 'Res. Terra Nova', unidades: 72, cidade: 'Vicente Pires/DF', sindico: 'Aldo Ferraz', processos: 4, inadimplencia: 'R$ 41.660,00' }
  ];
  const processos = [
    { id: 'p1', numero: '0703451-22.2025.8.07.0020', cliente: 'Res. Villa Verde', area: 'Condominial', tipo: 'Cobrança de taxas condominiais', vara: '3ª Vara Cível de Taguatinga', status: 'urgente', prazo: '04/09/2026', responsavel: 'Dr. Edson Alexandre', valor: 'R$ 48.320,00', fase: 'Cumprimento de sentença' },
    { id: 'p2', numero: '0711902-04.2025.8.07.0001', cliente: 'Cond. Parque das Águas', area: 'Condominial', tipo: 'Ação de prestação de contas', vara: '1ª Vara Cível de Brasília', status: 'ativo', prazo: '18/09/2026', responsavel: 'Dra. Amanda Pessoa', valor: 'R$ 12.700,00', fase: 'Instrução' },
    { id: 'p3', numero: '0698114-77.2024.8.07.0016', cliente: 'Ed. DF Century Plaza', area: 'Imobiliário', tipo: 'Vícios construtivos — ação contra construtora', vara: '2ª Vara Cível de Águas Claras', status: 'acordo', prazo: '—', responsavel: 'Dr. Edson Alexandre', valor: 'R$ 205.480,00', fase: 'Acordo homologado' },
    { id: 'p4', numero: '0705620-13.2026.8.07.0020', cliente: 'Cond. Jardins do Sul', area: 'Condominial', tipo: 'Nulidade de assembleia', vara: '4ª Vara Cível de Taguatinga', status: 'prazo', prazo: '09/09/2026', responsavel: 'Dra. Sarah Holanda', valor: 'R$ 30.000,00', fase: 'Contestação' },
    { id: 'p5', numero: '0700877-58.2026.8.07.0001', cliente: 'Res. Terra Nova', area: 'Civil', tipo: 'Responsabilidade civil — infiltração', vara: '5ª Vara Cível de Brasília', status: 'ativo', prazo: '30/09/2026', responsavel: 'Dr. Paulo Roberto', valor: 'R$ 22.150,00', fase: 'Saneamento' },
    { id: 'p6', numero: '0688201-90.2023.8.07.0020', cliente: 'Res. Villa Verde', area: 'Condominial', tipo: 'Cobrança — unidade 502', vara: '3ª Vara Cível de Taguatinga', status: 'ganho', prazo: '—', responsavel: 'Emanoela Felício', valor: 'R$ 61.040,00', fase: 'Trânsito em julgado' },
    { id: 'p7', numero: '0712488-31.2026.8.07.0016', cliente: 'Ed. DF Century Plaza', area: 'Trabalhista', tipo: 'Reclamação — ex-porteiro', vara: '9ª Vara do Trabalho de Brasília', status: 'ativo', prazo: '24/09/2026', responsavel: 'Dr. Leonor Soares', valor: 'R$ 74.900,00', fase: 'Audiência inicial' },
    { id: 'p8', numero: '0690455-12.2024.8.07.0020', cliente: 'Cond. Jardins do Sul', area: 'Condominial', tipo: 'Cobrança — unidade 21B', vara: '3ª Vara Cível de Taguatinga', status: 'suspenso', prazo: '—', responsavel: 'Emanoela Felício', valor: 'R$ 18.300,00', fase: 'Suspenso por acordo extrajudicial' }
  ];
  const prazos = [
    { id: 'd1', processo: '0703451-22.2025.8.07.0020', cliente: 'Res. Villa Verde', tipo: 'Impugnação ao cumprimento', data: '04/09/2026', dias: 1, fatal: true, responsavel: 'Dr. Edson Alexandre' },
    { id: 'd2', processo: '0705620-13.2026.8.07.0020', cliente: 'Cond. Jardins do Sul', tipo: 'Contestação', data: '09/09/2026', dias: 6, fatal: true, responsavel: 'Dra. Sarah Holanda' },
    { id: 'd3', processo: '0711902-04.2025.8.07.0001', cliente: 'Cond. Parque das Águas', tipo: 'Réplica', data: '18/09/2026', dias: 15, fatal: false, responsavel: 'Dra. Amanda Pessoa' },
    { id: 'd4', processo: '0712488-31.2026.8.07.0016', cliente: 'Ed. DF Century Plaza', tipo: 'Audiência inicial', data: '24/09/2026', dias: 21, fatal: false, responsavel: 'Dr. Leonor Soares' }
  ];
  const movimentacoes = {
    p1: [
      { title: 'Intimação para impugnação ao cumprimento de sentença', date: '20/08/2026', tone: 'risk', icon: 'calendar-clock', description: 'Prazo fatal de 15 dias contados da publicação. Vencimento em 04/09/2026.', meta: 'Capturado do TJDFT · conciliado automaticamente' },
      { title: 'Penhora de valores deferida', date: '19/08/2026', tone: 'ok', icon: 'banknote', description: 'Bloqueio parcial via SISBAJUD no valor de R$ 19.412,80.', meta: 'Registrado por Dr. Edson Alexandre' },
      { title: 'Sentença publicada', date: '28/06/2026', tone: 'ok', icon: 'gavel', description: 'Procedência dos pedidos. Cobrança das taxas condominiais em atraso deferida, com juros e multa convencional.', meta: 'Capturado do TJDFT' },
      { title: 'Audiência de conciliação', date: '14/03/2026', tone: 'brand', icon: 'users', description: 'Sem acordo entre as partes. Prosseguimento do feito.', meta: 'Registrado por Dra. Amanda Pessoa' },
      { title: 'Distribuição da ação', date: '11/11/2025', tone: 'neutral', icon: 'file-plus', description: 'Ação de cobrança distribuída à 3ª Vara Cível de Taguatinga.', meta: 'Registrado por Emanoela Felício' }
    ]
  };
  const auditoria = [
    { id: 'a1', data: '03/09/2026 14:22', ator: 'Sistema', acao: 'Movimentação capturada', alvo: '0703451-22.2025.8.07.0020', origem: 'TJDFT · consulta automática', tone: 'info' },
    { id: 'a2', data: '03/09/2026 11:04', ator: 'Dra. Sarah Holanda', acao: 'Prazo alterado', alvo: '0705620-13.2026.8.07.0020', origem: '12/09/2026 → 09/09/2026', tone: 'warn' },
    { id: 'a3', data: '02/09/2026 17:47', ator: 'Emanoela Felício', acao: 'Documento anexado', alvo: '0688201-90.2023.8.07.0020', origem: 'planilha-debitos-502.pdf', tone: 'neutral' },
    { id: 'a4', data: '02/09/2026 09:15', ator: 'Dr. Edson Alexandre', acao: 'Processo arquivado', alvo: '0690455-12.2024.8.07.0020', origem: 'Acordo extrajudicial firmado', tone: 'neutral' },
    { id: 'a5', data: '01/09/2026 16:30', ator: 'Sistema', acao: 'Divergência detectada', alvo: '0712488-31.2026.8.07.0016', origem: 'Movimentação sem pasta vinculada', tone: 'risk' },
    { id: 'a6', data: '01/09/2026 08:02', ator: 'Dra. Amanda Pessoa', acao: 'Acesso concedido', alvo: 'Cond. Parque das Águas', origem: 'Perfil síndico · somente leitura', tone: 'ok' }
  ];
  return { condominios, processos, prazos, movimentacoes, auditoria };
})();
