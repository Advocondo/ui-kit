const { DataTable, SortHeader, StatusPill, Badge, Tag, Button, Select, Input, IconButton, EmptyState, Card } = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;

function Processos({ onOpenProcesso, onNovo }) {
  const { processos } = window.EA_DATA;
  const [area, setArea] = React.useState('');
  const [busca, setBusca] = React.useState('');
  const [fatais, setFatais] = React.useState(false);
  const rows = processos.filter((p) =>
    (!area || p.area === area) &&
    (!fatais || p.status === 'urgente' || p.status === 'prazo') &&
    (!busca || (p.numero + p.cliente + p.tipo).toLowerCase().includes(busca.toLowerCase()))
  );
  return (
    <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <Input icon="search" placeholder="Buscar por número CNJ, cliente ou objeto" value={busca} onChange={(e) => setBusca(e.target.value)} style={{ width: 340 }} />
        <Select placeholder="Todas as áreas" value={area} onChange={(e) => setArea(e.target.value)} options={['Condominial', 'Imobiliário', 'Civil', 'Trabalhista']} style={{ width: 190 }} />
        <Tag selected={fatais} onClick={() => setFatais(!fatais)}>Somente com prazo aberto</Tag>
        <div style={{ flex: 1 }} />
        <IconButton icon="download" label="Exportar planilha" />
        <Button icon="plus" onClick={onNovo}>Novo processo</Button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
        <p style={{ font: 'var(--fw-light) var(--fs-body-sm)/1.5 var(--font-sans)', color: 'var(--text-muted)' }}>
          {rows.length} de {processos.length} processos
        </p>
        {area && <Tag onRemove={() => setArea('')}>Área: {area}</Tag>}
        {fatais && <Tag onRemove={() => setFatais(false)}>Com prazo aberto</Tag>}
      </div>

      <DataTable onRowClick={(r) => onOpenProcesso(r.id)} rows={rows}
        empty={<EmptyState icon="search-x" title="Nenhum processo encontrado" description="Ajuste a busca ou remova os filtros aplicados." action={<Button variant="secondary" size="sm" onClick={() => { setArea(''); setBusca(''); setFatais(false); }}>Limpar filtros</Button>} />}
        columns={[
          { key: 'numero', label: <SortHeader label="Número CNJ" dir="asc" />, mono: true, strong: true, width: '215px' },
          { key: 'cliente', label: 'Cliente', render: (r) => (<span><span style={{ display: 'block', color: 'var(--text-heading)', fontWeight: 'var(--fw-medium)' }}>{r.cliente}</span><span style={{ display: 'block', font: 'var(--fw-light) var(--fs-caption)/1.5 var(--font-sans)', color: 'var(--text-muted)' }}>{r.tipo}</span></span>) },
          { key: 'area', label: 'Área', render: (r) => <Badge tone={r.area === 'Condominial' ? 'brand' : 'neutral'}>{r.area}</Badge> },
          { key: 'vara', label: 'Vara', render: (r) => <span style={{ font: 'var(--fw-light) var(--fs-caption)/1.5 var(--font-sans)', color: 'var(--text-body)' }}>{r.vara}</span> },
          { key: 'status', label: 'Status', render: (r) => <StatusPill status={r.status} /> },
          { key: 'prazo', label: <SortHeader label="Prazo" />, mono: true },
          { key: 'valor', label: 'Valor da causa', mono: true, align: 'right' }
        ]} />
    </div>
  );
}
Object.assign(window, { Processos });
