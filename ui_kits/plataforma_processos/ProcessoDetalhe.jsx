const { Card, Tabs, Timeline, StatusPill, Badge, Button, IconButton, Icon, Alert, DataTable, EmptyState, Tooltip } = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;

function ProcessoDetalhe({ id, onBack }) {
  const { processos, movimentacoes } = window.EA_DATA;
  const p = processos.find((x) => x.id === id) || processos[0];
  const [tab, setTab] = React.useState('movimentacoes');
  const items = movimentacoes[p.id] || movimentacoes.p1;
  return (
    <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <h2 className="ea-num" style={{ font: 'var(--fw-medium) var(--fs-h1)/1.2 var(--font-mono)', color: 'var(--text-heading)' }}>{p.numero}</h2>
            <StatusPill status={p.status} />
            <Badge tone="brand">{p.area}</Badge>
            <Tooltip label="Número copiado do painel do TJDFT"><span style={{ display: 'flex', color: 'var(--text-muted)' }}><Icon name="info" size={15} /></span></Tooltip>
          </div>
          <p style={{ marginTop: 6, font: 'var(--fw-light) var(--fs-body)/1.6 var(--font-sans)', color: 'var(--text-body)' }}>{p.tipo}</p>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button variant="secondary" icon="arrow-left" onClick={onBack}>Voltar</Button>
          <IconButton icon="paperclip" label="Anexar documento" />
          <Button icon="calendar-plus">Novo prazo</Button>
        </div>
      </div>

      {p.status === 'urgente' && (
        <Alert tone="risk" title="Prazo fatal amanhã — impugnação ao cumprimento de sentença"
          action={<Button variant="ghost" size="sm">Registrar peça protocolada</Button>}>
          Vencimento em {p.prazo}. Responsável: {p.responsavel}.
        </Alert>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 'var(--space-6)', alignItems: 'start' }}>
        <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
          <Tabs activeId={tab} onSelect={setTab} items={[
            { id: 'movimentacoes', label: 'Movimentações', count: items.length },
            { id: 'documentos', label: 'Documentos', count: 3 },
            { id: 'partes', label: 'Partes' },
            { id: 'financeiro', label: 'Financeiro' }
          ]} />
          {tab === 'movimentacoes' && <Card><Timeline items={items} /></Card>}
          {tab === 'documentos' && (
            <DataTable rows={[
              { id: 1, nome: 'Petição inicial.pdf', tipo: 'Petição', data: '11/11/2025', autor: 'Emanoela Felício' },
              { id: 2, nome: 'Convenção do condomínio.pdf', tipo: 'Prova', data: '11/11/2025', autor: 'Emanoela Felício' },
              { id: 3, nome: 'Planilha de débitos — un. 502.xlsx', tipo: 'Prova', data: '02/09/2026', autor: 'Emanoela Felício' }
            ]} columns={[
              { key: 'nome', label: 'Arquivo', strong: true, render: (r) => (<span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="file-text" size={15} style={{ color: 'var(--text-muted)' }} />{r.nome}</span>) },
              { key: 'tipo', label: 'Tipo', render: (r) => <Badge>{r.tipo}</Badge> },
              { key: 'data', label: 'Anexado em', mono: true },
              { key: 'autor', label: 'Por' }
            ]} />
          )}
          {tab === 'partes' && (
            <Card>
              <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
                {[['Autor', p.cliente, 'CNPJ 12.345.678/0001-90 · representado por Marcos Tavares (síndico)'], ['Réu', 'Proprietário da unidade 502', 'CPF 000.000.000-00'], ['Patrono do autor', p.responsavel, 'OAB/DF 00.000']].map(([papel, nome, det]) => (
                  <div key={papel} style={{ display: 'grid', gap: 3 }}>
                    <p className="ea-eyebrow" style={{ color: 'var(--text-muted)' }}>{papel}</p>
                    <p style={{ font: 'var(--fw-medium) var(--fs-body)/1.4 var(--font-sans)', color: 'var(--text-heading)' }}>{nome}</p>
                    <p style={{ font: 'var(--fw-light) var(--fs-body-sm)/1.6 var(--font-sans)', color: 'var(--text-muted)' }}>{det}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}
          {tab === 'financeiro' && (
            <Card><EmptyState compact icon="banknote" title="Nenhum lançamento registrado" description="Vincule honorários, custas e valores recuperados a este processo." action={<Button size="sm" icon="plus">Novo lançamento</Button>} /></Card>
          )}
        </div>

        <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
          <Card title="Resumo">
            <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
              {[['Cliente', p.cliente], ['Vara', p.vara], ['Fase', p.fase], ['Responsável', p.responsavel], ['Valor da causa', p.valor], ['Próximo prazo', p.prazo]].map(([k, v]) => (
                <div key={k} style={{ display: 'grid', gap: 2 }}>
                  <p className="ea-eyebrow" style={{ color: 'var(--text-muted)' }}>{k}</p>
                  <p style={{ font: 'var(--fw-medium) var(--fs-body-sm)/1.5 var(--font-sans)', color: 'var(--text-heading)' }}>{v}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card tone="inverse" title="Monitoramento">
            <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
              <p style={{ font: 'var(--fw-light) var(--fs-body-sm)/1.6 var(--font-sans)', color: 'var(--text-on-inverse-muted)' }}>
                Consulta automática ao TJDFT a cada 6 horas. Última verificação hoje às 14:22.
              </p>
              <Button variant="outline" size="sm" icon="refresh-cw">Verificar agora</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { ProcessoDetalhe });
