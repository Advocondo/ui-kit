const { Logo, SectionTitle, PracticeCard, TeamCard, Button, Card, Icon, Input, Textarea, FieldLabel, Checkbox } = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;

const WRAP = { maxWidth: 'var(--layout-max)', margin: '0 auto', padding: '0 var(--layout-gutter)' };
const NAVY = { background: 'var(--navy-900)' };
const LIGHT = { background: 'var(--stone-200)' };

function TopNav() {
  const links = ['Atuação', 'Assessoria', 'Por que nós?', 'Contato'];
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 20, background: 'var(--navy-600)', height: 40, display: 'flex', alignItems: 'center' }}>
      <div style={{ ...WRAP, width: '100%', display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
        <div style={{ display: 'flex', gap: 'var(--space-3)', color: 'var(--stone-0)' }}>
          <Icon name="facebook" size={14} /><Icon name="message-circle" size={14} /><Icon name="instagram" size={14} />
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
          {links.map((l, i) => (
            <React.Fragment key={l}>
              {i === 1 && <span style={{ width: 1, height: 12, background: 'var(--border-inverse)' }} />}
              <a href="#s" onClick={(e) => e.preventDefault()} style={{ font: 'var(--fw-medium) var(--fs-micro)/1.2 var(--font-sans)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--stone-0)', textDecoration: 'none' }}>{l}</a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header style={{ ...NAVY, padding: 'var(--section-y) 0 var(--section-y-tight)' }}>
      <div style={{ ...WRAP, display: 'grid', justifyItems: 'center', gap: 'var(--space-8)', textAlign: 'center' }}>
        <Logo variant="lockup" height={128} base="../../assets/" />
        <div style={{ display: 'grid', gap: 'var(--space-5)', justifyItems: 'center', maxWidth: 720 }}>
          <h1 style={{ font: 'var(--fw-bold) var(--fs-display-2)/var(--lh-display) var(--font-display)', textTransform: 'uppercase', color: 'var(--stone-0)' }}>Seu direito é a nossa luta!</h1>
          <p style={{ font: 'var(--fw-light) var(--fs-body)/var(--lh-body) var(--font-sans)', color: 'var(--text-on-inverse-muted)', maxWidth: 620 }}>
            Há mais de 14 anos defendendo os seus direitos com ética e responsabilidade, oferecendo soluções jurídicas altamente eficazes.
          </p>
        </div>
        <Button variant="outline" iconEnd="message-circle">Fale conosco no WhatsApp</Button>
      </div>
    </header>
  );
}

const AREAS = [
  ['Direito Condominial', 'Somos especialistas em Direito Condominial! Temos mais de 14 anos de experiência!'],
  ['Direito Imobiliário', 'Problemas com questões relacionadas a imóveis, incluindo compra, venda, locação, condomínios e litígios imobiliários?'],
  ['Direito Civil', 'Estamos aqui para resolver questões relacionadas a contratos, responsabilidade civil, disputas de propriedade, entre outros.'],
  ['Direito do Consumidor', 'Deixe-nos ajudar em questões como problemas com produtos ou serviços defeituosos, cobranças indevidas, entre outros.'],
  ['Família e Sucessões', 'Estamos aqui para resolver ou cuidar de divórcio, guarda e visitação dos filhos, partilha de bens, testamentos, inventários, pensão alimentícia e outros.'],
  ['Outras áreas do Direito', 'Não hesite em nos contatar para obter aconselhamento jurídico confiável e excelente em qualquer área do Direito.']
];

function Areas() {
  return (
    <section style={{ ...NAVY, padding: '0 0 var(--section-y)' }}>
      <div style={{ ...WRAP, display: 'grid', gap: 'var(--space-10)', justifyItems: 'center' }}>
        <SectionTitle size="md">Se você está enfrentando problemas de:</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-5)', width: '100%' }}>
          {AREAS.map(([t, d]) => <PracticeCard key={t} title={t}>{d}</PracticeCard>)}
        </div>
        <p style={{ font: 'var(--fw-light) var(--fs-body)/var(--lh-body) var(--font-sans)', color: 'var(--text-on-inverse-muted)', textAlign: 'center' }}>
          Chegou a hora de assumirmos o seu caso para fazer valer os seus direitos!
        </p>
      </div>
    </section>
  );
}

function FaixaOnline() {
  return (
    <section style={{ ...LIGHT, padding: 'var(--section-y-tight) 0' }}>
      <div style={{ ...WRAP, display: 'grid', justifyItems: 'center', gap: 'var(--space-6)', textAlign: 'center' }}>
        <SectionTitle onNavy={false} sentenceCase sub="Nosso escritório de advocacia realiza atendimentos virtuais para clientes em outros estados. Se este é o seu caso, saiba que pode contar conosco.">
          Também atendemos online para todo o Brasil.
        </SectionTitle>
        <Button>Quero ser atendido por um especialista</Button>
      </div>
    </section>
  );
}

function Assessoria() {
  const paras = [
    'Um condomínio bem assessorado, juridicamente, corre menos riscos de enfrentar problemas em seus contratos com prestadores de serviços, condôminos e até mesmo com a própria construtora do edifício.',
    'Temos uma vasta experiência no assessoramento de síndicos para melhorarem a gestão de seus condomínios, dando foco total na recuperação de crédito, diminuindo, significativamente, dívidas condominiais.',
    'Dispomos de profissionais com conhecimento irrestrito da área e suporte técnico para atender as demandas de nossos clientes de forma personalizada.',
    'Nosso maior objetivo é agir preventivamente, em todas as situações, para resguardar os direitos dos nossos clientes e evitar danos para eles.'
  ];
  return (
    <section style={{ ...NAVY, padding: 'var(--section-y) 0' }}>
      <div style={{ ...WRAP, display: 'grid', justifyItems: 'center', gap: 'var(--space-8)' }}>
        <SectionTitle>Assessoria jurídica para condomínios</SectionTitle>
        <div style={{ display: 'grid', gap: 'var(--space-6)', maxWidth: 760, textAlign: 'center' }}>
          {paras.map((p, i) => <p key={i} style={{ font: 'var(--fw-light) var(--fs-body)/var(--lh-body) var(--font-sans)', color: 'var(--text-on-inverse-muted)' }}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}

const AVALIACOES = [
  ['Amigo DF', 'Local Guide', 'Avaliação positiva: Profissionalismo. O escritório atendeu todas as minhas expectativas. Assumiram a causa do condomínio e recuperamos boa parte das dívidas em atraso.'],
  ['Bárbara Sampaio', '2 comentários', 'Avaliação positiva: Profissionalismo. Pessoas atentas, dedicadas e de fácil acesso. Recomendo o trabalho da equipe para qualquer questão condominial.'],
  ['Fernando Thadeu', '4 comentários', 'Avaliação positiva: Profissionalismo. Fui muito bem atendido desde o primeiro contato. Explicaram cada etapa do processo com clareza.'],
  ['Thiago Guimarães', '5 comentários · Fotos', 'Profissionais de altíssima competência, capacitados e dedicados a prestar serviços advocatícios de qualidade e com excelência ao cliente. Recomendo!']
];

function Avaliacoes() {
  return (
    <section style={{ ...NAVY, padding: '0 0 var(--section-y)' }}>
      <div style={{ ...WRAP, display: 'grid', justifyItems: 'center', gap: 'var(--space-10)' }}>
        <SectionTitle size="sm">Veja o que nossos clientes falam sobre nós:</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)', width: '100%', maxWidth: 940 }}>
          {AVALIACOES.map(([nome, meta, texto]) => (
            <article key={nome} style={{ background: 'var(--stone-0)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-card-site)', padding: 'var(--space-5)', display: 'grid', gap: 'var(--space-3)' }}>
              <header style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--stone-200)', display: 'grid', placeItems: 'center', color: 'var(--stone-600)' }}><Icon name="user" size={15} /></span>
                <div style={{ flex: 1 }}>
                  <p style={{ font: 'var(--fw-semibold) var(--fs-body-sm)/1.35 var(--font-sans)', color: 'var(--navy-900)' }}>{nome}</p>
                  <p style={{ font: 'var(--fw-light) var(--fs-micro)/1.4 var(--font-sans)', color: 'var(--stone-500)' }}>{meta}</p>
                </div>
                <div style={{ display: 'flex', gap: 1, color: 'var(--amber-600)' }}>{[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={12} />)}</div>
              </header>
              <p style={{ font: 'var(--fw-light) var(--fs-caption)/1.75 var(--font-sans)', color: 'var(--stone-700)' }}>{texto}</p>
            </article>
          ))}
        </div>
        <div style={{ display: 'grid', justifyItems: 'center', gap: 'var(--space-5)', textAlign: 'center' }}>
          <SectionTitle size="sm" sub="Sua avaliação é importante para que outras pessoas que precisam de profissionais sérios nos encontrem.">Nos avalie no Google também</SectionTitle>
          <Button variant="outline">Avaliar</Button>
        </div>
      </div>
    </section>
  );
}

const EQUIPE = [
  ['Dr. Edson Alexandre', 'Advogado Sócio', 'edson-alexandre'],
  ['Dra. Amanda Pessoa', 'Advogada Sócia', 'amanda-pessoa'],
  ['Emanoela Felício', 'Recuperação de crédito', 'emanoela-felicio'],
  ['Dra. Sarah Holanda', 'Advogada', 'sarah-holanda'],
  ['Dr. Leonor Soares', 'Advogado', 'leonor-soares'],
  ['Dr. Paulo Roberto', 'Advogado', 'paulo-roberto']
];

function Equipe() {
  const paras = [
    'Nosso diferencial é a prestação de um atendimento personalizado.',
    'Esse conceito, onde a advocacia é vista como um trabalho artesanal, aumenta drasticamente as chances de êxito nas causas que assumimos, pois conseguimos atender cirurgicamente as necessidades de cada cliente, prestando uma assessoria jurídica altamente eficaz.',
    'Nosso maior objetivo é resguardar nossos clientes de todo e qualquer prejuízo financeiro, físico e moral.',
    'Com muita ética e competência, ao longo de mais de 14 anos de experiência no mundo jurídico, temos o prazer de carregar em nosso histórico mais de 95% de causas ganhas na justiça.'
  ];
  return (
    <section style={{ ...NAVY, padding: '0 0 var(--section-y)' }}>
      <div style={{ ...WRAP, display: 'grid', justifyItems: 'center', gap: 'var(--space-10)' }}>
        <div style={{ display: 'grid', justifyItems: 'center', gap: 'var(--space-6)', maxWidth: 760, textAlign: 'center' }}>
          <SectionTitle size="sm">Ainda tem dúvidas se devemos assumir o seu caso?</SectionTitle>
          {paras.map((p, i) => <p key={i} style={{ font: 'var(--fw-light) var(--fs-body-sm)/var(--lh-body) var(--font-sans)', color: 'var(--text-on-inverse-muted)' }}>{p}</p>)}
          <Button variant="outline" size="sm">Quero ser atendido por um especialista</Button>
        </div>
        <SectionTitle size="sm">Conheça nossa equipe</SectionTitle>
        <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'center', flexWrap: 'wrap' }}>
          {EQUIPE.map(([n, r, f]) => <TeamCard key={n} name={n} role={r} photo={'../../assets/team/' + f + '.png'} />)}
        </div>
        <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
          {['Atendimento Personalizado.', 'Profissionalismo e Dedicação.', 'Equipe altamente experiente e preparada.'].map((t) => (
            <Checkbox key={t} checked label={<span style={{ color: 'var(--stone-0)' }}>{t}</span>} onChange={() => {}} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Formulario({ onSubmit, enviado }) {
  return (
    <section style={{ ...LIGHT, padding: 'var(--section-y) 0' }}>
      <div style={{ ...WRAP, maxWidth: 860, display: 'grid', justifyItems: 'center', gap: 'var(--space-8)' }}>
        <div style={{ textAlign: 'center', display: 'grid', gap: 'var(--space-3)' }}>
          <h2 style={{ font: 'var(--fw-semibold) var(--fs-h1)/1.3 var(--font-sans)', color: 'var(--navy-900)' }}>Preencha o formulário abaixo com as informações solicitadas</h2>
          <p style={{ font: 'var(--fw-light) var(--fs-body-sm)/var(--lh-body) var(--font-sans)', color: 'var(--stone-600)' }}>Nossa equipe entrará em contato o mais breve possível!</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
          <div><FieldLabel required>Nome e Sobrenome</FieldLabel><Input /></div>
          <div><FieldLabel required>Telefone</FieldLabel><Input type="tel" placeholder="(61) 00000-0000" /></div>
          <div style={{ gridColumn: '1 / -1' }}><FieldLabel required>E-mail</FieldLabel><Input type="email" /></div>
          <div style={{ gridColumn: '1 / -1' }}><FieldLabel>Mensagem</FieldLabel><Textarea rows={4} /></div>
          <div style={{ gridColumn: '1 / -1', display: 'grid', justifyItems: 'center', gap: 'var(--space-4)' }}>
            <Button type="submit" block style={{ maxWidth: 420 }}>{enviado ? 'Mensagem enviada' : 'Enviar'}</Button>
            {enviado && <p style={{ font: 'var(--fw-light) var(--fs-caption)/1.5 var(--font-sans)', color: 'var(--green-600)' }}>Recebemos a sua mensagem. Entraremos em contato em breve.</p>}
            <div style={{ display: 'flex', gap: 'var(--space-4)', color: 'var(--navy-600)' }}>
              <Icon name="message-circle" size={20} /><Icon name="facebook" size={20} /><Icon name="instagram" size={20} />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function Visita() {
  return (
    <section style={{ ...NAVY, padding: 'var(--section-y-tight) 0' }}>
      <div style={{ ...WRAP, display: 'grid', justifyItems: 'center', gap: 'var(--space-6)', textAlign: 'center' }}>
        <SectionTitle size="sm" sub="Teremos o prazer em te receber para tomarmos um café!">Venha nos fazer uma visita</SectionTitle>
        <Button variant="outline" iconEnd="message-circle">Fale conosco no WhatsApp</Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: 'var(--navy-950)', paddingTop: 'var(--space-12)' }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'var(--space-16)', alignItems: 'center', paddingBottom: 'var(--space-10)' }}>
        <Logo variant="lockup" height={104} base="../../assets/" />
        <div style={{ borderLeft: '1px solid var(--border-inverse)', paddingLeft: 'var(--space-10)', display: 'grid', gap: 'var(--space-3)' }}>
          <p className="ea-eyebrow" style={{ color: 'var(--stone-0)' }}>Contatos:</p>
          {[['phone', '(61) 3021-8539'], ['mail', 'edson.alexandre.adv@gmail.com'], ['map-pin', 'Rua Copaíba, Lote 1, Torre B, Sala 1910 — DF Century Plaza, Águas Claras/DF'], ['clock', 'Horários de atendimento: segunda a sexta de 09h às 17h']].map(([ic, tx]) => (
            <p key={tx} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', font: 'var(--fw-light) var(--fs-body-sm)/1.7 var(--font-sans)', color: 'var(--text-on-inverse-muted)' }}>
              <span style={{ display: 'flex', color: 'var(--navy-200)', marginTop: 3 }}><Icon name={ic} size={15} /></span>{tx}
            </p>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border-inverse)' }}>
        <div style={{ ...WRAP, display: 'flex', gap: 'var(--space-8)', justifyContent: 'center', padding: 'var(--space-5) var(--layout-gutter)' }}>
          {['© 2026 por Edson Alexandre Advogados.', 'Política de privacidade', 'Política de cookies'].map((t) => (
            <p key={t} style={{ font: 'var(--fw-light) var(--fs-micro)/1.5 var(--font-sans)', color: 'rgba(255,255,255,.5)' }}>{t}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { TopNav, Hero, Areas, FaixaOnline, Assessoria, Avaliacoes, Equipe, Formulario, Visita, Footer });
