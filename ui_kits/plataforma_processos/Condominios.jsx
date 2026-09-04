const { DataTable, Card, Button, Badge, Input, Icon } = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;

function Condominios({ onOpenProcesso }) {
  const { condominios } = window.EA_DATA;
  return (
    <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
        <Input icon="search" placeholder="Buscar condomínio ou síndico" style={{ width: 320 }} />
        <div style={{ flex: 1 }} />
        <Button icon="plus">Novo condomínio</Button>
      </div>
      <DataTable onRowClick={() => onOpenProcesso('p1')} rows={condominios} columns={[
        { key: 'nome', label: 'Condomínio', strong: true, render: (r) => (<span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="building-2" size={16} style={{ color: 'var(--text-muted)' }} />{r.nome}</span>) },
        { key: 'cidade', label: 'Localidade' },
        { key: 'sindico', label: 'Síndico' },
        { key: 'unidades', label: 'Unidades', mono: true, align: 'right' },
        { key: 'processos', label: 'Processos', mono: true, align: 'right', render: (r) => <Badge tone="brand">{r.processos}</Badge> },
        { key: 'inadimplencia', label: 'Inadimplência acumulada', mono: true, align: 'right' }
      ]} />
      <Card title="Assessoria full service" tone="sunken">
        <p style={{ font: 'var(--fw-light) var(--fs-body-sm)/1.75 var(--font-sans)', color: 'var(--text-body)', maxWidth: '86ch' }}>
          Cada condomínio assessorado tem uma pasta única reunindo processos, prazos, atas de assembleia, contratos com prestadores e o histórico de recuperação de crédito. O síndico acessa a pasta em modo somente leitura.
        </p>
      </Card>
    </div>
  );
}
Object.assign(window, { Condominios });
