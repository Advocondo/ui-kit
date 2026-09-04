const { Card, DataTable, StatusPill, Button, Tabs, Alert, IconButton } = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;

function Prazos({ onOpenProcesso, onNovo }) {
  const { prazos } = window.EA_DATA;
  const [tab, setTab] = React.useState('abertos');
  return (
    <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
      <Alert tone="warn" title="Todo prazo fatal exige confirmação de duas pessoas">
        Prazos marcados como fatais só podem ser encerrados pelo responsável e por um sócio.
      </Alert>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
        <Tabs activeId={tab} onSelect={setTab} items={[{ id: 'abertos', label: 'Abertos', count: 4 }, { id: 'cumpridos', label: 'Cumpridos', count: 128 }, { id: 'perdidos', label: 'Perdidos', count: 0 }]} style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 'var(--space-2)', paddingBottom: 6 }}>
          <IconButton icon="calendar" label="Ver em calendário" />
          <Button icon="plus" onClick={onNovo}>Novo prazo</Button>
        </div>
      </div>
      <DataTable onRowClick={() => onOpenProcesso('p1')} rows={prazos}
        columns={[
          { key: 'tipo', label: 'Prazo', strong: true },
          { key: 'processo', label: 'Processo', mono: true },
          { key: 'cliente', label: 'Cliente' },
          { key: 'data', label: 'Vencimento', mono: true },
          { key: 'dias', label: 'Situação', render: (r) => <StatusPill status={r.fatal ? 'urgente' : 'prazo'} label={r.dias === 1 ? 'em 1 dia' : 'em ' + r.dias + ' dias'} /> },
          { key: 'responsavel', label: 'Responsável' }
        ]} />
      <Card title="Setembro 2026">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6 }}>
            {['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'].map((d) => (
              <p key={d} className="ea-eyebrow" style={{ color: 'var(--text-muted)', textAlign: 'center' }}>{d}</p>
            ))}
            {Array.from({ length: 1 }).map((_, i) => <div key={'pad' + i} />)}
            {Array.from({ length: 30 }).map((_, i) => {
              const day = i + 1;
              const marks = { 4: 'risk', 9: 'risk', 18: 'warn', 24: 'warn' };
              const t = marks[day];
              return (
                <div key={day} style={{
                  minHeight: 46, padding: '5px 7px', borderRadius: 'var(--radius-xs)',
                  border: '1px solid ' + (t ? 'var(--status-' + t + '-border)' : 'var(--border-subtle)'),
                  background: t ? 'var(--status-' + t + '-bg)' : 'var(--stone-0)'
                }}>
                  <p style={{ font: 'var(--fw-medium) var(--fs-caption)/1.3 var(--font-mono)', color: t ? 'var(--status-' + t + '-fg)' : 'var(--text-muted)' }}>{day}</p>
                  {t && <p style={{ marginTop: 2, font: 'var(--fw-medium) var(--fs-micro)/1.3 var(--font-sans)', color: 'var(--status-' + t + '-fg)' }}>{t === 'risk' ? 'Prazo fatal' : 'Prazo'}</p>}
                </div>
              );
            })}
          </div>
      </Card>
    </div>
  );
}
Object.assign(window, { Prazos });
