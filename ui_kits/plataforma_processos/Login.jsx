const { Button, Input, FieldLabel, Checkbox, Logo } = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;

function Login({ onEnter }) {
  return (
    <div style={{ minHeight: '100%', display: 'grid', gridTemplateColumns: '1.1fr .9fr', background: 'var(--navy-900)' }}>
      <div style={{ display: 'grid', placeItems: 'center', padding: 'var(--space-16)' }}>
        <div style={{ display: 'grid', justifyItems: 'center', gap: 'var(--space-8)', textAlign: 'center' }}>
          <Logo variant="lockup" height={150} base="../../assets/" />
          <div style={{ display: 'grid', gap: 'var(--space-4)', maxWidth: 460 }}>
            <h1 style={{ font: 'var(--fw-bold) var(--fs-display-3)/var(--lh-heading) var(--font-display)', textTransform: 'uppercase', color: 'var(--stone-0)' }}>Plataforma de acompanhamento</h1>
            <p style={{ font: 'var(--fw-light) var(--fs-body)/var(--lh-body) var(--font-sans)', color: 'var(--text-on-inverse-muted)' }}>
              Administração, monitoramento e auditoria dos processos do escritório e dos condomínios que assessoramos.
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', placeItems: 'center', background: 'var(--surface-page)', padding: 'var(--space-12)' }}>
        <form onSubmit={(e) => { e.preventDefault(); onEnter(); }} style={{ width: '100%', maxWidth: 340, display: 'grid', gap: 'var(--space-5)' }}>
          <div>
            <h2 style={{ font: 'var(--fw-semibold) var(--fs-h1)/1.25 var(--font-sans)', color: 'var(--text-heading)' }}>Entrar</h2>
            <p style={{ marginTop: 6, font: 'var(--fw-light) var(--fs-body-sm)/1.6 var(--font-sans)', color: 'var(--text-muted)' }}>Acesso restrito à equipe e aos síndicos autorizados.</p>
          </div>
          <div><FieldLabel htmlFor="em" required>E-mail</FieldLabel><Input id="em" type="email" icon="mail" value="edson.alexandre.adv@gmail.com" onChange={() => {}} /></div>
          <div><FieldLabel htmlFor="pw" required>Senha</FieldLabel><Input id="pw" type="password" icon="lock" value="••••••••••" onChange={() => {}} /></div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
            <Checkbox checked label="Manter conectado" onChange={() => {}} />
            <a href="#recuperar" onClick={(e) => e.preventDefault()} style={{ font: 'var(--fw-medium) var(--fs-caption)/1.4 var(--font-sans)' }}>Esqueci minha senha</a>
          </div>
          <Button type="submit" block size="lg">Entrar na plataforma</Button>
          <p style={{ font: 'var(--fw-light) var(--fs-caption)/1.6 var(--font-sans)', color: 'var(--text-muted)', textAlign: 'center' }}>
            Dúvidas de acesso: (61) 3021-8539 · seg a sex, 09h às 17h
          </p>
        </form>
      </div>
    </div>
  );
}
Object.assign(window, { Login });
