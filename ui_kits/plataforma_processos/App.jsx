const { SidebarNav, TopBar, TopBarSearch, Button, IconButton, Logo, Dialog, Input, Select, FieldLabel, Toast, ToastStack, Breadcrumb, Icon } = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;

const NAV = [
  { id: 'painel', label: 'Painel', icon: 'layout-dashboard' },
  { section: 'Acompanhamento' },
  { id: 'processos', label: 'Processos', icon: 'gavel', count: 248 },
  { id: 'prazos', label: 'Prazos', icon: 'calendar-clock', count: 7 },
  { id: 'condominios', label: 'Condomínios', icon: 'building-2', count: 34 },
  { section: 'Controle' },
  { id: 'auditoria', label: 'Trilha de auditoria', icon: 'shield-check' }
];

const TITLES = {
  painel: ['Painel', 'Quinta-feira, 3 de setembro de 2026'],
  processos: ['Processos', '248 processos ativos em 34 condomínios'],
  prazos: ['Prazos', '4 prazos abertos · 2 fatais nos próximos 7 dias'],
  condominios: ['Condomínios', 'Carteira de clientes assessorados'],
  auditoria: ['Trilha de auditoria', 'Todo registro é imutável e mantido por 5 anos'],
  processo: ['Processo', 'Detalhe da pasta']
};

function App() {
  const [logged, setLogged] = React.useState(false);
  const [view, setView] = React.useState('painel');
  const [processoId, setProcessoId] = React.useState(null);
  const [dialog, setDialog] = React.useState(false);
  const [toast, setToast] = React.useState(null);

  const openProcesso = (id) => { setProcessoId(id); setView('processo'); };
  const salvar = () => { setDialog(false); setToast('Prazo cadastrado · Contestação · 09/09/2026'); setTimeout(() => setToast(null), 4200); };

  if (!logged) return <Login onEnter={() => setLogged(true)} />;

  const [title, subtitle] = TITLES[view];
  return (
    <div style={{ display: 'flex', height: '100%', background: 'var(--surface-page)' }}>
      <SidebarNav items={NAV} activeId={view === 'processo' ? 'processos' : view} onSelect={(id) => { setView(id); setProcessoId(null); }}
        header={<Logo variant="lockup" height={78} base="../../assets/" />}
        footer={
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <img src="../../assets/team/edson-alexandre.png" alt="" style={{ width: 30, height: 30, borderRadius: '50%', objectFit: 'cover' }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ font: 'var(--fw-medium) var(--fs-caption)/1.35 var(--font-sans)', color: 'var(--text-on-inverse)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Dr. Edson Alexandre</p>
              <p style={{ font: 'var(--fw-light) var(--fs-micro)/1.4 var(--font-sans)', color: 'var(--text-on-inverse-muted)' }}>Advogado sócio</p>
            </div>
            <IconButton icon="log-out" label="Sair" variant="inverse" size="sm" onClick={() => setLogged(false)} />
          </div>
        } />

      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <TopBar title={view === 'processo' ? 'Detalhe do processo' : title} subtitle={view === 'processo' ? 'Res. Villa Verde · 3ª Vara Cível de Taguatinga' : subtitle}
          breadcrumb={view === 'processo'
            ? <Breadcrumb items={[{ id: 'processos', label: 'Processos' }, { label: 'Cobrança de taxas condominiais' }]} onNavigate={() => setView('processos')} />
            : undefined}
          actions={<>
            <TopBarSearch placeholder="Buscar processo, cliente ou prazo" style={{ width: 260 }} />
            <IconButton icon="bell" label="Notificações" />
            <Button icon="plus" onClick={() => setDialog(true)}>Novo prazo</Button>
          </>} />

        <main style={{ flex: 1, overflowY: 'auto', padding: 'var(--app-pad)' }}>
          <div style={{ maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
            {view === 'painel' && <Painel onOpenProcesso={openProcesso} onGoPrazos={() => setView('prazos')} />}
            {view === 'processos' && <Processos onOpenProcesso={openProcesso} onNovo={() => setDialog(true)} />}
            {view === 'prazos' && <Prazos onOpenProcesso={openProcesso} onNovo={() => setDialog(true)} />}
            {view === 'condominios' && <Condominios onOpenProcesso={openProcesso} />}
            {view === 'auditoria' && <Auditoria />}
            {view === 'processo' && <ProcessoDetalhe id={processoId} onBack={() => setView('processos')} />}
          </div>
        </main>
      </div>

      <Dialog open={dialog} title="Novo prazo" description="Vincule o prazo a um processo em andamento." onClose={() => setDialog(false)}
        footer={<><Button variant="secondary" onClick={() => setDialog(false)}>Cancelar</Button><Button onClick={salvar}>Salvar prazo</Button></>}>
        <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
          <div><FieldLabel required>Processo</FieldLabel><Input mono icon="gavel" value="0705620-13.2026.8.07.0020" onChange={() => {}} /></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
            <div><FieldLabel required>Tipo</FieldLabel><Select options={['Contestação', 'Réplica', 'Recurso', 'Diligência', 'Audiência']} /></div>
            <div><FieldLabel required>Vencimento</FieldLabel><Input type="date" value="2026-09-09" onChange={() => {}} /></div>
          </div>
          <div><FieldLabel>Responsável</FieldLabel><Select options={['Dr. Edson Alexandre', 'Dra. Amanda Pessoa', 'Dra. Sarah Holanda', 'Dr. Paulo Roberto']} /></div>
        </div>
      </Dialog>

      {toast && <ToastStack><Toast tone="ok" title="Prazo cadastrado" description={toast} onClose={() => setToast(null)} /></ToastStack>}
    </div>
  );
}
Object.assign(window, { App });
