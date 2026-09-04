// Renderiza todos os componentes publicados via react-dom/server e falha se algum lançar
// exceção. Não substitui uma suíte de testes real, mas cobre a superfície inteira do
// pacote com pouquíssimo código — útil como último passo antes de publicar uma versão.
// Uso: npm run build && npm run smoke

import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as DS from '../dist/index.js';

const EXPECTED = [
  'Button', 'Icon', 'Badge', 'Card', 'IconButton', 'StatusPill', 'Tag',
  'Logo', 'PracticeCard', 'SectionTitle', 'TeamCard',
  'DataTable', 'SortHeader', 'EmptyState', 'MetricCard', 'Timeline',
  'Alert', 'Dialog', 'Toast', 'ToastStack', 'Tooltip',
  'Checkbox', 'FieldLabel', 'Input', 'Radio', 'Select', 'Switch', 'Textarea',
  'Breadcrumb', 'SidebarNav', 'Tabs', 'TopBar', 'TopBarSearch',
];

const missing = EXPECTED.filter((name) => typeof DS[name] !== 'function');
if (missing.length) {
  console.error('Exports ausentes no build:', missing.join(', '));
  process.exit(1);
}

const cases = [
  h(DS.Button, { icon: 'message-circle' }, 'Fale conosco'),
  h(DS.Icon, { name: 'message-circle' }),
  h(DS.Icon, { name: 'nome-inexistente' }), // caminho de fallback do placeholder
  h(DS.Badge, { tone: 'brand' }, 'Condominial'),
  h(DS.StatusPill, { status: 'urgente' }),
  h(DS.Card, { title: 'x' }, 'y'),
  h(DS.IconButton, { icon: 'bell', label: 'Notificações' }),
  h(DS.Tag, { onRemove: () => {} }, 'Vara'),
  h(DS.Logo, { variant: 'wordmark' }),
  h(DS.PracticeCard, { title: 'Direito Condominial' }, 'texto'),
  h(DS.SectionTitle, { sub: 'sub' }, 'Título'),
  h(DS.TeamCard, { name: 'Dr. Edson', role: 'Sócio' }),
  h(DS.DataTable, { columns: [{ key: 'a', label: 'A' }], rows: [{ id: '1', a: 'x' }] }),
  h(DS.DataTable, { columns: [], rows: [], empty: h(DS.EmptyState, { title: 'Nada' }) }),
  h(DS.SortHeader, { label: 'Num', dir: 'asc' }),
  h(DS.MetricCard, { label: 'Processos', value: '248', icon: 'gavel' }),
  h(DS.Timeline, { items: [{ title: 'x', tone: 'ok', icon: 'gavel' }] }),
  h(DS.Alert, { tone: 'risk', title: 'x' }),
  h(DS.Dialog, { title: 'x', footer: 'f' }, 'body'),
  h(DS.Toast, { tone: 'ok', title: 'x' }),
  h(DS.ToastStack, {}, 'x'),
  h(DS.Tooltip, { label: 'x' }, h('span', {}, 'y')),
  h(DS.Checkbox, { label: 'x' }),
  h(DS.FieldLabel, { required: true }, 'Nome'),
  h(DS.Input, { icon: 'search', placeholder: 'x' }),
  h(DS.Radio, { name: 'n', value: 'v', label: 'x' }),
  h(DS.Select, { options: ['a', 'b'], placeholder: 'x' }),
  h(DS.Switch, { label: 'x' }),
  h(DS.Textarea, { placeholder: 'x' }),
  h(DS.Breadcrumb, { items: [{ id: 'a', label: 'A' }, { label: 'B' }] }),
  h(DS.SidebarNav, { items: [{ id: 'a', label: 'A', icon: 'gavel' }, { section: 'S' }] }),
  h(DS.Tabs, { items: [{ id: 'a', label: 'A' }], activeId: 'a' }),
  h(DS.TopBar, { title: 'x' }),
  h(DS.TopBarSearch, {}),
];

let ok = 0;
for (const [i, el] of cases.entries()) {
  try {
    if (!renderToStaticMarkup(el)) throw new Error('saída vazia');
    ok++;
  } catch (err) {
    console.error(`Falhou no caso ${i}:`, err.message);
    process.exitCode = 1;
  }
}

console.log(`${ok}/${cases.length} componentes renderizados sem lançar exceção.`);
