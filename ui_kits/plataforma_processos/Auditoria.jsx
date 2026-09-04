const { DataTable, Badge, Card, MetricCard, Select, Input, Button, Icon } = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;

function Auditoria() {
  const { auditoria } = window.EA_DATA;
  return (
    <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-4)' }}>
        <MetricCard label="Registros nos últimos 30 dias" value="1.284" icon="shield-check" />
        <MetricCard label="Divergências abertas" value="1" icon="triangle-alert" footnote="movimentação sem pasta vinculada" />
        <MetricCard label="Última conciliação com o TJDFT" value="14:22" unit="hoje" icon="refresh-cw" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
        <Input icon="search" placeholder="Buscar por processo, autor ou ação" style={{ width: 320 }} />
        <Select placeholder="Todos os autores" options={['Sistema', 'Dr. Edson Alexandre', 'Dra. Amanda Pessoa', 'Dra. Sarah Holanda', 'Emanoela Felício']} style={{ width: 200 }} />
        <Select placeholder="Últimos 30 dias" options={['Hoje', 'Últimos 7 dias', 'Últimos 30 dias', 'Este ano']} style={{ width: 170 }} />
        <div style={{ flex: 1 }} />
        <Button variant="secondary" icon="download">Exportar trilha</Button>
      </div>
      <DataTable rows={auditoria} columns={[
        { key: 'data', label: 'Data e hora', mono: true, width: '150px' },
        { key: 'ator', label: 'Autor', render: (r) => (<span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><Icon name={r.ator === 'Sistema' ? 'cpu' : 'user'} size={14} style={{ color: 'var(--text-muted)' }} />{r.ator}</span>) },
        { key: 'acao', label: 'Ação', strong: true, render: (r) => <Badge tone={r.tone}>{r.acao}</Badge> },
        { key: 'alvo', label: 'Processo / cliente', mono: true },
        { key: 'origem', label: 'Detalhe', render: (r) => <span style={{ font: 'var(--fw-light) var(--fs-caption)/1.5 var(--font-sans)', color: 'var(--text-muted)' }}>{r.origem}</span> }
      ]} />
      <Card title="Regras de auditoria vigentes">
        <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 'var(--space-2)', font: 'var(--fw-light) var(--fs-body-sm)/1.7 var(--font-sans)', color: 'var(--text-body)' }}>
          <li>Toda alteração de prazo fatal registra autor, valor anterior e valor novo.</li>
          <li>Movimentação capturada sem pasta vinculada gera divergência aberta em até 6 horas.</li>
          <li>Arquivamento de processo exige justificativa textual do responsável.</li>
          <li>Acessos de síndico são somente leitura e ficam registrados por 5 anos.</li>
        </ul>
      </Card>
    </div>
  );
}
Object.assign(window, { Auditoria });
