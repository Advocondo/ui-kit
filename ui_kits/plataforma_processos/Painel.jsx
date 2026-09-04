const { MetricCard, Card, DataTable, StatusPill, Badge, Button, Alert, Timeline, Icon } = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;

function Painel({ onOpenProcesso, onGoPrazos }) {
  const { prazos, processos, condominios } = window.EA_DATA;
  return (
    <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
      <Alert tone="risk" title="2 prazos fatais vencem nos próximos 7 dias"
        action={<Button variant="ghost" size="sm" iconEnd="arrow-right" onClick={onGoPrazos}>Ver prazos</Button>}>
        Impugnação ao cumprimento (Res. Villa Verde) e contestação (Cond. Jardins do Sul).
      </Alert>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-4)' }}>
        <MetricCard label="Processos ativos" value="248" icon="gavel" delta="+12 no mês" deltaTone="up" />
        <MetricCard label="Prazos em 7 dias" value="7" icon="calendar-clock" footnote="2 fatais" />
        <MetricCard label="Condomínios assessorados" value="34" icon="building-2" footnote="1.482 unidades" />
        <MetricCard label="Crédito recuperado no ano" value="R$ 1,4M" icon="banknote" delta="+18% vs. 2025" deltaTone="up" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.35fr .65fr', gap: 'var(--space-6)', alignItems: 'start' }}>
        <Card title="Prazos mais próximos" action={<Button variant="ghost" size="sm" onClick={onGoPrazos}>Todos os prazos</Button>} padding="none">
          <DataTable dense onRowClick={() => onOpenProcesso('p1')} style={{ border: 0, borderRadius: 0, boxShadow: 'none' }}
            columns={[
              { key: 'tipo', label: 'Prazo', strong: true },
              { key: 'cliente', label: 'Cliente' },
              { key: 'data', label: 'Vencimento', mono: true },
              { key: 'dias', label: 'Situação', render: (r) => <StatusPill status={r.fatal ? 'urgente' : 'prazo'} label={r.dias === 1 ? '1 dia' : r.dias + ' dias'} /> },
              { key: 'responsavel', label: 'Responsável' }
            ]} rows={prazos} />
        </Card>

        <Card title="Movimentações de hoje">
          <Timeline items={[
            { title: 'Certidão de decurso de prazo', date: '14:22', tone: 'risk', icon: 'calendar-clock', description: 'Parte contrária silente — Res. Villa Verde.', meta: 'TJDFT · automático' },
            { title: 'Prazo alterado', date: '11:04', tone: 'warn', icon: 'pencil', description: 'Contestação antecipada para 09/09/2026.', meta: 'Dra. Sarah Holanda' },
            { title: 'Documento anexado', date: '09:38', tone: 'neutral', icon: 'paperclip', description: 'planilha-debitos-502.pdf', meta: 'Emanoela Felício' }
          ]} />
        </Card>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', alignItems: 'start' }}>
        <Card title="Carteira por condomínio" action={<Badge tone="brand">34 clientes</Badge>} padding="none">
          <DataTable dense style={{ border: 0, borderRadius: 0, boxShadow: 'none' }}
            columns={[
              { key: 'nome', label: 'Condomínio', strong: true },
              { key: 'unidades', label: 'Unidades', mono: true, align: 'right' },
              { key: 'processos', label: 'Processos', mono: true, align: 'right' },
              { key: 'inadimplencia', label: 'Inadimplência', mono: true, align: 'right' }
            ]} rows={condominios} />
        </Card>
        <Card title="Processos por área">
          <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
            {[['Condominial', 63, 'var(--navy-600)'], ['Imobiliário', 14, 'var(--navy-400)'], ['Civil', 11, 'var(--navy-300)'], ['Consumidor', 6, 'var(--navy-200)'], ['Família e Sucessões', 4, 'var(--stone-300)'], ['Trabalhista', 2, 'var(--stone-200)']].map(([label, pct, color]) => (
              <div key={label} style={{ display: 'grid', gap: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', font: 'var(--fw-medium) var(--fs-body-sm)/1.4 var(--font-sans)', color: 'var(--text-heading)' }}>
                  <span>{label}</span><span className="ea-num" style={{ color: 'var(--text-muted)' }}>{pct}%</span>
                </div>
                <div style={{ height: 6, borderRadius: 3, background: 'var(--stone-100)' }}>
                  <div style={{ width: pct + '%', height: '100%', borderRadius: 3, background: color }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
Object.assign(window, { Painel });
