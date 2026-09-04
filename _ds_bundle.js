/* @ds-bundle: {"format":4,"namespace":"EdsonAlexandreAdvogadosDesignSystem_e96c05","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PracticeCard","sourcePath":"components/brand/PracticeCard.jsx"},{"name":"SectionTitle","sourcePath":"components/brand/SectionTitle.jsx"},{"name":"TeamCard","sourcePath":"components/brand/TeamCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"SortHeader","sourcePath":"components/data/DataTable.jsx"},{"name":"EmptyState","sourcePath":"components/data/EmptyState.jsx"},{"name":"MetricCard","sourcePath":"components/data/MetricCard.jsx"},{"name":"Timeline","sourcePath":"components/data/Timeline.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FieldLabel","sourcePath":"components/forms/FieldLabel.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"},{"name":"TopBarSearch","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"f140cc604256","components/brand/PracticeCard.jsx":"e312a3c0732d","components/brand/SectionTitle.jsx":"3fc62176fec6","components/brand/TeamCard.jsx":"a4c5d4434db3","components/core/Badge.jsx":"ca17ada37973","components/core/Button.jsx":"21d727981fac","components/core/Card.jsx":"5d6e573acff0","components/core/Icon.jsx":"38ec107010ac","components/core/IconButton.jsx":"da7f160f8397","components/core/StatusPill.jsx":"c4299d57cc97","components/core/Tag.jsx":"8dbdda9bacd1","components/data/DataTable.jsx":"7572af68713f","components/data/EmptyState.jsx":"427aa35a228a","components/data/MetricCard.jsx":"fe3adc5bdf31","components/data/Timeline.jsx":"fc358df97a13","components/feedback/Alert.jsx":"0e5a37d97ded","components/feedback/Dialog.jsx":"3503cfed539c","components/feedback/Toast.jsx":"fe21e73c7987","components/feedback/Tooltip.jsx":"75e8d1368141","components/forms/Checkbox.jsx":"1ff720095450","components/forms/FieldLabel.jsx":"c267435816f4","components/forms/Input.jsx":"02dd87557b7d","components/forms/Radio.jsx":"9cc17222276c","components/forms/Select.jsx":"fdc3112fcd0e","components/forms/Switch.jsx":"39d551375930","components/forms/Textarea.jsx":"10102ab80e9f","components/navigation/Breadcrumb.jsx":"f4bb7f2d5813","components/navigation/SidebarNav.jsx":"36282d3828d1","components/navigation/Tabs.jsx":"80307740dc2f","components/navigation/TopBar.jsx":"3161eb85b1af","ui_kits/plataforma_processos/App.jsx":"ea317b8e8f42","ui_kits/plataforma_processos/Auditoria.jsx":"2364ab3afa0c","ui_kits/plataforma_processos/Condominios.jsx":"28d5fdf9d376","ui_kits/plataforma_processos/Login.jsx":"90e7ab88cdde","ui_kits/plataforma_processos/Painel.jsx":"34e3f1d21eee","ui_kits/plataforma_processos/Prazos.jsx":"0c058a4e2248","ui_kits/plataforma_processos/ProcessoDetalhe.jsx":"94b0db306476","ui_kits/plataforma_processos/Processos.jsx":"9a978701650e","ui_kits/plataforma_processos/data.js":"016a8bf16aec","ui_kits/site_institucional/Sections.jsx":"db24defce289"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EdsonAlexandreAdvogadosDesignSystem_e96c05 = window.EdsonAlexandreAdvogadosDesignSystem_e96c05 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = 'assets/';
function Logo({
  variant = 'lockup',
  height = 56,
  base = BASE,
  onNavy = true,
  style,
  ...rest
}) {
  if (variant === 'wordmark') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-grid',
        justifyItems: 'center',
        gap: 2,
        color: onNavy ? 'var(--stone-0)' : 'var(--navy-900)',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-logotype)',
        fontWeight: 'var(--fw-semibold)',
        fontSize: height * 0.42,
        letterSpacing: 'var(--ls-logotype)',
        lineHeight: 1.1,
        textTransform: 'uppercase'
      }
    }, "Edson Alexandre"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-logotype)',
        fontWeight: 'var(--fw-regular)',
        fontSize: height * 0.2,
        letterSpacing: '.34em',
        lineHeight: 1,
        textTransform: 'uppercase',
        opacity: .82
      }
    }, "Advogados"));
  }
  const src = base + (variant === 'mark' ? onNavy ? 'logo-mark-white.png' : 'logo-mark-navy.png' : onNavy ? 'logo-lockup-white.png' : 'logo-lockup-navy.png');
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "Edson Alexandre Advogados",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PracticeCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PracticeCard({
  title,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      textAlign: 'center',
      padding: 'var(--space-6) var(--space-5)',
      background: 'var(--stone-200)',
      borderRadius: 'var(--radius-md)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-card-site)',
      transition: 'box-shadow var(--dur-normal) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--fw-bold) var(--fs-h3)/1.3 var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: '.01em',
      color: 'var(--navy-900)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) var(--fs-body-sm)/1.7 var(--font-sans)',
      color: 'var(--stone-700)'
    }
  }, children));
}
Object.assign(__ds_scope, { PracticeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PracticeCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionTitle({
  children,
  sub,
  align = 'center',
  size = 'md',
  onNavy = true,
  sentenceCase = false,
  style,
  ...rest
}) {
  const fs = {
    sm: 'var(--fs-h1)',
    md: 'var(--fs-display-3)',
    lg: 'var(--fs-display-2)'
  }[size];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      display: 'grid',
      justifyItems: align === 'center' ? 'center' : 'start',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--fw-bold) ' + fs + '/var(--lh-heading) var(--font-display)',
      textTransform: sentenceCase ? 'none' : 'uppercase',
      letterSpacing: sentenceCase ? '0' : 'var(--ls-heading)',
      color: onNavy ? 'var(--text-on-inverse)' : 'var(--text-heading)'
    }
  }, children), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '62ch',
      font: 'var(--fw-light) var(--fs-body)/var(--lh-body) var(--font-sans)',
      color: onNavy ? 'var(--text-on-inverse-muted)' : 'var(--text-body)'
    }
  }, sub));
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/brand/TeamCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TeamCard({
  name,
  role,
  photo,
  width = 132,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      width,
      display: 'grid',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      aspectRatio: '3 / 4',
      background: 'var(--navy-800)',
      overflow: 'hidden'
    }
  }, photo && /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-semibold) var(--fs-body-sm)/1.35 var(--font-sans)',
      color: 'var(--text-on-inverse)'
    }
  }, name), role && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 1,
      font: 'var(--fw-light) var(--fs-caption)/1.4 var(--font-sans)',
      color: 'var(--text-on-inverse-muted)'
    }
  }, role)));
}
Object.assign(__ds_scope, { TeamCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TeamCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  neutral: {
    color: 'var(--status-neutral-fg)',
    background: 'var(--status-neutral-bg)',
    borderColor: 'var(--status-neutral-border)'
  },
  brand: {
    color: 'var(--navy-600)',
    background: 'var(--navy-50)',
    borderColor: 'var(--navy-200)'
  },
  ok: {
    color: 'var(--status-ok-fg)',
    background: 'var(--status-ok-bg)',
    borderColor: 'var(--status-ok-border)'
  },
  warn: {
    color: 'var(--status-warn-fg)',
    background: 'var(--status-warn-bg)',
    borderColor: 'var(--status-warn-border)'
  },
  risk: {
    color: 'var(--status-risk-fg)',
    background: 'var(--status-risk-bg)',
    borderColor: 'var(--status-risk-border)'
  },
  info: {
    color: 'var(--status-info-fg)',
    background: 'var(--status-info-bg)',
    borderColor: 'var(--status-info-border)'
  },
  solid: {
    color: 'var(--stone-0)',
    background: 'var(--navy-600)',
    borderColor: 'var(--navy-600)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  size = 'md',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      padding: size === 'sm' ? '1px 7px' : '3px 10px',
      font: 'var(--fw-semibold) ' + (size === 'sm' ? 'var(--fs-micro)' : 'var(--fs-caption)') + '/1.5 var(--font-sans)',
      border: '1px solid',
      borderRadius: 'var(--radius-xs)',
      whiteSpace: 'nowrap',
      ...TONE[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  tone = 'default',
  padding = 'md',
  title,
  action,
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const TONE = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xs)',
      color: 'var(--text-body)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid transparent',
      boxShadow: 'none',
      color: 'var(--text-body)'
    },
    onNavy: {
      background: 'var(--stone-200)',
      border: 'none',
      boxShadow: 'var(--shadow-card-site)',
      color: 'var(--navy-900)'
    },
    inverse: {
      background: 'var(--surface-inverse-raised)',
      border: '1px solid var(--border-inverse)',
      boxShadow: 'none',
      color: 'var(--text-on-inverse)'
    }
  }[tone];
  const P = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  }[padding];
  const headerPad = padding === 'none' ? 'var(--space-5) var(--space-5) var(--space-4)' : '0';
  return /*#__PURE__*/React.createElement("section", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: tone === 'onNavy' ? 'var(--radius-md)' : 'var(--radius-sm)',
      padding: P,
      overflow: 'hidden',
      transition: 'var(--transition-control)',
      cursor: interactive ? 'pointer' : undefined,
      ...TONE,
      ...(interactive && hover ? {
        boxShadow: 'var(--shadow-md)',
        borderColor: 'var(--navy-200)'
      } : null),
      ...style
    }
  }, rest), (title || action) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: headerPad,
      marginBottom: padding === 'none' ? 0 : 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--fw-semibold) var(--fs-h3)/1.3 var(--font-sans)',
      color: 'inherit',
      margin: 0
    }
  }, title), action), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const pascal = n => n.replace(/(^|[-_ ])(\w)/g, (_, __, c) => c.toUpperCase());

/** Thin wrapper over the Lucide icon set (window.lucide, loaded from CDN).
 *  Renders nothing but a reserved box when the set has not loaded yet. */
function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  style,
  ...rest
}) {
  const set = typeof window !== 'undefined' && window.lucide && window.lucide.icons || null;
  const node = set ? set[pascal(name)] || set[name] : null;
  const box = {
    width: size,
    height: size,
    flex: '0 0 auto',
    display: 'inline-block'
  };
  // Unresolved name (icon set not loaded yet, or a deprecated brand glyph): draw a neutral
  // placeholder ring rather than a blank gap, so a missing glyph is visible in review.
  if (!node) return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    "aria-hidden": "true",
    style: {
      ...box,
      opacity: set ? 0.5 : 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }));
  const children = typeof node[0] === 'string' ? node[2] || [] : node;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      ...box,
      ...style
    }
  }, rest), children.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  sm: 'var(--control-h-sm)',
  md: 'var(--control-h-md)',
  lg: 'var(--control-h-lg)'
};
const PAD = {
  sm: '0 12px',
  md: '0 18px',
  lg: '0 26px'
};
const FS = {
  sm: 'var(--fs-caption)',
  md: 'var(--fs-body-sm)',
  lg: 'var(--fs-body)'
};
const VARIANTS = {
  primary: {
    background: 'var(--navy-600)',
    color: 'var(--text-on-brand)',
    border: '1px solid var(--navy-600)'
  },
  secondary: {
    background: 'var(--stone-0)',
    color: 'var(--navy-600)',
    border: '1px solid var(--border-default)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--stone-0)',
    border: '1px solid var(--stone-0)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-brand)',
    border: '1px solid transparent'
  },
  danger: {
    background: 'var(--red-600)',
    color: 'var(--stone-0)',
    border: '1px solid var(--red-600)'
  }
};
const HOVER = {
  primary: {
    background: 'var(--navy-700)',
    borderColor: 'var(--navy-700)'
  },
  secondary: {
    background: 'var(--stone-100)',
    borderColor: 'var(--stone-400)'
  },
  outline: {
    background: 'var(--stone-0)',
    color: 'var(--navy-900)'
  },
  ghost: {
    background: 'var(--surface-brand-subtle)'
  },
  danger: {
    background: 'var(--red-700)',
    borderColor: 'var(--red-700)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconEnd,
  block = false,
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const isOff = disabled || loading;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: isOff,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      height: H[size],
      padding: PAD[size],
      fontSize: FS[size],
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '.01em',
      borderRadius: 'var(--radius-sm)',
      cursor: isOff ? 'not-allowed' : 'pointer',
      opacity: isOff ? 0.45 : 1,
      whiteSpace: 'nowrap',
      transition: 'var(--transition-control), transform var(--dur-instant) var(--ease-standard)',
      transform: press && !isOff ? 'translateY(1px)' : 'none',
      ...v,
      ...(hover && !isOff ? HOVER[variant] : null),
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-circle",
    size: size === 'sm' ? 14 : 16
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 14 : 16
  }) : null, children, iconEnd ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconEnd,
    size: size === 'sm' ? 14 : 16
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const S = {
  sm: 28,
  md: 34,
  lg: 40
};
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  active = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const onNavy = variant === 'inverse';
  const base = onNavy ? {
    color: active ? 'var(--stone-0)' : 'var(--text-on-inverse-muted)',
    background: active ? 'rgba(255,255,255,.12)' : 'transparent'
  } : {
    color: active ? 'var(--navy-600)' : 'var(--text-body)',
    background: active ? 'var(--surface-selected)' : 'transparent'
  };
  const hov = onNavy ? {
    color: 'var(--stone-0)',
    background: 'rgba(255,255,255,.12)'
  } : {
    color: 'var(--navy-600)',
    background: 'var(--surface-hover)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: S[size],
      height: S[size],
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid transparent',
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'var(--transition-control)',
      ...base,
      ...(hover && !disabled ? hov : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 15 : size === 'lg' ? 20 : 17
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MAP = {
  ativo: {
    tone: 'info',
    label: 'Ativo'
  },
  suspenso: {
    tone: 'warn',
    label: 'Suspenso'
  },
  arquivado: {
    tone: 'neutral',
    label: 'Arquivado'
  },
  ganho: {
    tone: 'ok',
    label: 'Ganho'
  },
  perdido: {
    tone: 'risk',
    label: 'Perdido'
  },
  acordo: {
    tone: 'ok',
    label: 'Acordo'
  },
  prazo: {
    tone: 'warn',
    label: 'Prazo próximo'
  },
  urgente: {
    tone: 'risk',
    label: 'Prazo fatal'
  },
  transitado: {
    tone: 'neutral',
    label: 'Trânsito em julgado'
  }
};
const TONE = {
  neutral: ['var(--status-neutral-fg)', 'var(--status-neutral-bg)', 'var(--status-neutral-border)'],
  ok: ['var(--status-ok-fg)', 'var(--status-ok-bg)', 'var(--status-ok-border)'],
  warn: ['var(--status-warn-fg)', 'var(--status-warn-bg)', 'var(--status-warn-border)'],
  risk: ['var(--status-risk-fg)', 'var(--status-risk-bg)', 'var(--status-risk-border)'],
  info: ['var(--status-info-fg)', 'var(--status-info-bg)', 'var(--status-info-border)']
};
function StatusPill({
  status = 'ativo',
  label,
  tone,
  dot = true,
  style,
  ...rest
}) {
  const cfg = MAP[status] || MAP.ativo;
  const [fg, bg, bd] = TONE[tone || cfg.tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px 3px 8px',
      font: 'var(--fw-medium) var(--fs-caption)/1.5 var(--font-sans)',
      color: fg,
      background: bg,
      border: '1px solid ' + bd,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: fg,
      flex: '0 0 auto'
    }
  }), label || cfg.label);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  onRemove,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      font: 'var(--fw-medium) var(--fs-caption)/1.4 var(--font-sans)',
      color: selected ? 'var(--navy-600)' : 'var(--text-body)',
      background: selected ? 'var(--surface-selected)' : hover && clickable ? 'var(--surface-hover)' : 'var(--stone-0)',
      border: '1px solid ' + (selected ? 'var(--navy-200)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-sm)',
      cursor: clickable ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remover",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  onRowClick,
  selectedId,
  empty,
  dense = false,
  style,
  ...rest
}) {
  const [hoverRow, setHoverRow] = React.useState(null);
  const pad = dense ? '9px 14px' : '13px 16px';
  if (!rows.length && empty) return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)'
    }
  }, empty);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-xs)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: pad,
      background: 'var(--stone-50)',
      borderBottom: '1px solid var(--border-subtle)',
      width: c.width,
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => {
    const active = selectedId != null && r.id === selectedId;
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id ?? i,
      onClick: () => onRowClick && onRowClick(r),
      onMouseEnter: () => setHoverRow(i),
      onMouseLeave: () => setHoverRow(null),
      style: {
        cursor: onRowClick ? 'pointer' : 'default',
        background: active ? 'var(--surface-selected)' : hoverRow === i ? 'var(--surface-hover)' : 'transparent',
        transition: 'background-color var(--dur-fast) var(--ease-standard)'
      }
    }, columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        padding: pad,
        textAlign: c.align || 'left',
        borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-subtle)',
        font: c.mono ? 'var(--type-numeric)' : 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
        fontVariantNumeric: c.mono ? 'tabular-nums' : undefined,
        color: c.strong ? 'var(--text-heading)' : 'var(--text-body)',
        fontWeight: c.strong ? 'var(--fw-medium)' : undefined,
        verticalAlign: 'middle'
      }
    }, c.render ? c.render(r) : r[c.key])));
  }))));
}
function SortHeader({
  label,
  dir,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      font: 'inherit',
      letterSpacing: 'inherit',
      textTransform: 'inherit',
      color: 'inherit'
    }
  }, label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: dir === 'asc' ? 'chevron-up' : 'chevron-down',
    size: 12,
    style: {
      opacity: dir ? 1 : 0.35
    }
  }));
}
Object.assign(__ds_scope, { DataTable, SortHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  icon = 'inbox',
  title,
  description,
  action,
  compact = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      justifyItems: 'center',
      textAlign: 'center',
      gap: 'var(--space-3)',
      padding: compact ? 'var(--space-8)' : 'var(--space-16) var(--space-8)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--stone-100)',
      color: 'var(--stone-500)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-semibold) var(--fs-h3)/1.3 var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) var(--fs-body-sm)/1.6 var(--font-sans)',
      color: 'var(--text-muted)',
      maxWidth: '46ch'
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetricCard({
  label,
  value,
  unit,
  delta,
  deltaTone = 'neutral',
  icon,
  footnote,
  tone = 'default',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  const dTone = {
    up: 'var(--green-600)',
    down: 'var(--red-600)',
    neutral: 'var(--text-muted)'
  }[deltaTone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: 'var(--space-5)',
      borderRadius: 'var(--radius-sm)',
      background: inverse ? 'var(--surface-inverse-raised)' : 'var(--surface-card)',
      border: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-subtle)'),
      boxShadow: inverse ? 'none' : 'var(--shadow-xs)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: inverse ? 'var(--navy-200)' : 'var(--stone-400)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      font: 'var(--fw-bold) var(--fs-display-3)/1.05 var(--font-display)',
      color: inverse ? 'var(--text-on-inverse)' : 'var(--text-heading)'
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1 var(--font-sans)',
      color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)'
    }
  }, unit)), (delta || footnote) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, delta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      font: 'var(--fw-medium) var(--fs-caption)/1.4 var(--font-sans)',
      color: dTone
    }
  }, deltaTone !== 'neutral' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: deltaTone === 'up' ? 'trending-up' : 'trending-down',
    size: 13
  }), delta), footnote && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-light) var(--fs-caption)/1.4 var(--font-sans)',
      color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)'
    }
  }, footnote)));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Timeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  neutral: 'var(--stone-400)',
  brand: 'var(--navy-600)',
  ok: 'var(--green-600)',
  warn: 'var(--amber-600)',
  risk: 'var(--red-600)'
};
function Timeline({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    const color = TONE[it.tone || 'neutral'];
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '26px 1fr',
        columnGap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        color,
        background: 'var(--stone-0)',
        border: '1px solid var(--border-default)',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon || 'circle-dot',
      size: 13
    })), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        width: 1,
        background: 'var(--border-default)',
        minHeight: 12
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: last ? 0 : 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 'var(--space-3)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--fw-medium) var(--fs-body-sm)/1.45 var(--font-sans)',
        color: 'var(--text-heading)'
      }
    }, it.title), it.date && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--fw-regular) var(--fs-caption)/1.4 var(--font-mono)',
        color: 'var(--text-muted)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, it.date)), it.description && /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 3,
        font: 'var(--fw-light) var(--fs-body-sm)/1.6 var(--font-sans)',
        color: 'var(--text-body)',
        maxWidth: '68ch'
      }
    }, it.description), it.meta && /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 5,
        font: 'var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, it.meta)));
  }));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  info: ['var(--status-info-fg)', 'var(--status-info-bg)', 'var(--status-info-border)', 'info'],
  ok: ['var(--status-ok-fg)', 'var(--status-ok-bg)', 'var(--status-ok-border)', 'circle-check'],
  warn: ['var(--status-warn-fg)', 'var(--status-warn-bg)', 'var(--status-warn-border)', 'triangle-alert'],
  risk: ['var(--status-risk-fg)', 'var(--status-risk-bg)', 'var(--status-risk-border)', 'octagon-alert']
};
function Alert({
  tone = 'info',
  title,
  children,
  action,
  icon,
  onClose,
  style,
  ...rest
}) {
  const [fg, bg, bd, defIcon] = TONE[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      background: bg,
      border: '1px solid ' + bd,
      borderRadius: 'var(--radius-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: fg,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || defIcon,
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-semibold) var(--fs-body-sm)/1.45 var(--font-sans)',
      color: fg
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: title ? 3 : 0,
      font: 'var(--fw-light) var(--fs-body-sm)/1.6 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Fechar",
    onClick: onClose,
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: fg,
      display: 'flex',
      height: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-6)',
      background: 'var(--surface-overlay)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      padding: 'var(--space-6) var(--space-6) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--fw-semibold) var(--fs-h2)/1.3 var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 4,
      font: 'var(--fw-light) var(--fs-body-sm)/1.6 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Fechar",
    onClick: onClose,
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text-muted)',
      display: 'flex',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-6) var(--space-6)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-6)',
      background: 'var(--stone-50)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON = {
  info: 'info',
  ok: 'circle-check',
  warn: 'triangle-alert',
  risk: 'octagon-alert'
};
const ACCENT = {
  info: 'var(--navy-300)',
  ok: 'var(--green-300)',
  warn: 'var(--amber-300)',
  risk: 'var(--red-300)'
};
function Toast({
  tone = 'info',
  title,
  description,
  onClose,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      minWidth: 300,
      maxWidth: 420,
      padding: 'var(--space-4)',
      background: 'var(--navy-900)',
      color: 'var(--text-on-inverse)',
      border: '1px solid var(--border-inverse)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: ACCENT[tone],
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICON[tone],
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-medium) var(--fs-body-sm)/1.45 var(--font-sans)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 2,
      font: 'var(--fw-light) var(--fs-caption)/1.55 var(--font-sans)',
      color: 'var(--text-on-inverse-muted)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Fechar",
    onClick: onClose,
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text-on-inverse-muted)',
      display: 'flex',
      height: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 15
  })));
}
function ToastStack({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 'var(--space-6)',
      bottom: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      zIndex: 60,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  children,
  label,
  placement = 'top',
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-6px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,6px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-6px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(6px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 70,
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      padding: '5px 9px',
      borderRadius: 'var(--radius-xs)',
      background: 'var(--navy-900)',
      color: 'var(--text-on-inverse)',
      font: 'var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)',
      boxShadow: 'var(--shadow-md)',
      opacity: show ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-standard)',
      ...pos
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 17,
      height: 17,
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      marginTop: description ? 2 : 0,
      borderRadius: 'var(--radius-xs)',
      color: 'var(--stone-0)',
      background: checked ? 'var(--navy-600)' : 'var(--stone-0)',
      border: '1px solid ' + (checked ? 'var(--navy-600)' : 'var(--border-default)'),
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    strokeWidth: 3
  })), label && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--fw-light) var(--fs-caption)/1.5 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FieldLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FieldLabel({
  children,
  htmlFor,
  required = false,
  hint,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: htmlFor,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      marginBottom: 'var(--space-2)',
      font: 'var(--fw-medium) var(--fs-body-sm)/1.4 var(--font-sans)',
      color: 'var(--text-heading)',
      ...style
    }
  }, rest), children, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-600)'
    }
  }, "*"), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { FieldLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FieldLabel.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldBase = state => ({
  width: '100%',
  font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
  color: 'var(--text-heading)',
  background: 'var(--stone-0)',
  border: '1px solid ' + (state.invalid ? 'var(--red-600)' : state.focus ? 'var(--border-focus)' : 'var(--border-default)'),
  borderRadius: 'var(--radius-sm)',
  outline: 'none',
  boxShadow: state.focus ? 'var(--ring-focus)' : 'var(--shadow-inset-field)',
  transition: 'var(--transition-control)',
  opacity: state.disabled ? 0.45 : 1
});
function Input({
  value,
  onChange,
  placeholder,
  type = 'text',
  icon,
  invalid = false,
  disabled = false,
  mono = false,
  error,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 11,
      display: 'flex',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldBase({
        focus,
        invalid,
        disabled
      }),
      height: 'var(--field-h)',
      padding: icon ? '0 12px 0 34px' : '0 12px',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontVariantNumeric: mono ? 'tabular-nums' : undefined,
      ...style
    }
  }, rest))), error && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6,
      font: 'var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)',
      color: 'var(--red-600)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked = false,
  onChange,
  label,
  name,
  value,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 17,
      height: 17,
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      borderRadius: '50%',
      background: 'var(--stone-0)',
      border: '1px solid ' + (checked ? 'var(--navy-600)' : 'var(--border-default)'),
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--navy-600)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldBase = state => ({
  width: '100%',
  font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
  color: 'var(--text-heading)',
  background: 'var(--stone-0)',
  border: '1px solid ' + (state.invalid ? 'var(--red-600)' : state.focus ? 'var(--border-focus)' : 'var(--border-default)'),
  borderRadius: 'var(--radius-sm)',
  outline: 'none',
  boxShadow: state.focus ? 'var(--ring-focus)' : 'var(--shadow-inset-field)',
  transition: 'var(--transition-control)',
  opacity: state.disabled ? 0.45 : 1
});
function Select({
  value,
  onChange,
  options = [],
  placeholder,
  invalid = false,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldBase({
        focus,
        invalid,
        disabled
      }),
      height: 'var(--field-h)',
      padding: '0 34px 0 12px',
      appearance: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 11,
      display: 'flex',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 20,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      padding: 2,
      background: checked ? 'var(--navy-600)' : 'var(--stone-300)',
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: 'var(--stone-0)',
      boxShadow: 'var(--shadow-xs)',
      transform: checked ? 'translateX(16px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldBase = state => ({
  width: '100%',
  font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
  color: 'var(--text-heading)',
  background: 'var(--stone-0)',
  border: '1px solid ' + (state.invalid ? 'var(--red-600)' : state.focus ? 'var(--border-focus)' : 'var(--border-default)'),
  borderRadius: 'var(--radius-sm)',
  outline: 'none',
  boxShadow: state.focus ? 'var(--ring-focus)' : 'var(--shadow-inset-field)',
  transition: 'var(--transition-control)',
  opacity: state.disabled ? 0.45 : 1
});
function Textarea({
  value,
  onChange,
  placeholder,
  rows = 4,
  invalid = false,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldBase({
        focus,
        invalid,
        disabled
      }),
      padding: '10px 12px',
      resize: 'vertical',
      lineHeight: 'var(--lh-body)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Trilha",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 2,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--stone-400)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 13
  })), i === items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-caption)/1.4 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, it.label) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onNavigate && onNavigate(it.id),
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      font: 'var(--fw-medium) var(--fs-caption)/1.4 var(--font-sans)',
      color: 'var(--text-link)'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SidebarNav({
  items = [],
  activeId,
  onSelect,
  header,
  footer,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      width: 'var(--app-sidebar-w)',
      flex: '0 0 auto',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-inverse)',
      borderRight: '1px solid var(--border-inverse)',
      ...style
    }
  }, rest), header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-5) var(--space-4)'
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 var(--space-3) var(--space-4)'
    }
  }, items.map(it => it.section ? /*#__PURE__*/React.createElement("p", {
    key: it.section,
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.42)',
      padding: '18px 12px 8px'
    }
  }, it.section) : /*#__PURE__*/React.createElement(SidebarItem, {
    key: it.id,
    item: it,
    active: it.id === activeId,
    onSelect: onSelect
  }))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-5)',
      borderTop: '1px solid var(--border-inverse)'
    }
  }, footer));
}
function SidebarItem({
  item,
  active,
  onSelect
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onSelect && onSelect(item.id),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: '9px 12px',
      border: 0,
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      textAlign: 'left',
      font: 'var(--fw-medium) var(--fs-body-sm)/1.4 var(--font-sans)',
      color: active ? 'var(--stone-0)' : hover ? 'var(--stone-0)' : 'var(--text-on-inverse-muted)',
      background: active ? 'rgba(255,255,255,.10)' : hover ? 'rgba(255,255,255,.055)' : 'transparent',
      transition: 'var(--transition-control)'
    }
  }, active && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 7,
      bottom: 7,
      width: 2,
      background: 'var(--navy-200)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: item.icon,
    size: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label), item.count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-micro)/1.6 var(--font-mono)',
      color: active ? 'var(--navy-900)' : 'var(--text-on-inverse-muted)',
      background: active ? 'var(--stone-0)' : 'rgba(255,255,255,.10)',
      borderRadius: 'var(--radius-pill)',
      padding: '1px 7px'
    }
  }, item.count));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  activeId,
  onSelect,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), items.map(it => {
    const active = it.id === activeId;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": active,
      type: "button",
      onClick: () => onSelect && onSelect(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '0 0 10px',
        border: 0,
        background: 'none',
        cursor: 'pointer',
        font: (active ? 'var(--fw-semibold)' : 'var(--fw-regular)') + ' var(--fs-body-sm)/1.4 var(--font-sans)',
        color: active ? 'var(--navy-600)' : 'var(--text-muted)',
        boxShadow: active ? 'inset 0 -2px 0 var(--navy-600)' : 'none',
        transition: 'var(--transition-control)'
      }
    }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--fw-medium) var(--fs-micro)/1.6 var(--font-mono)',
        color: 'var(--text-muted)',
        background: 'var(--stone-100)',
        borderRadius: 'var(--radius-pill)',
        padding: '1px 6px'
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TopBar({
  title,
  subtitle,
  breadcrumb,
  actions,
  tone = 'light',
  style,
  ...rest
}) {
  const inverse = tone === 'navy';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      minHeight: 'var(--app-topbar-h)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: '0 var(--app-pad)',
      background: inverse ? 'var(--surface-brand)' : 'var(--surface-card)',
      borderBottom: '1px solid ' + (inverse ? 'transparent' : 'var(--border-subtle)'),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, breadcrumb, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--fw-semibold) var(--fs-h2)/1.25 var(--font-sans)',
      color: inverse ? 'var(--text-on-inverse)' : 'var(--text-heading)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 2,
      font: 'var(--fw-light) var(--fs-body-sm)/1.5 var(--font-sans)',
      color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)'
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, actions));
}
function TopBarSearch({
  placeholder = 'Buscar',
  value,
  onChange,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: 300,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 11,
      display: 'flex',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 16
  })), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 'var(--control-h-md)',
      padding: '0 12px 0 34px',
      font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
      color: 'var(--text-heading)',
      background: 'var(--stone-0)',
      border: '1px solid ' + (focus ? 'var(--border-focus)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      transition: 'var(--transition-control)'
    }
  }));
}
Object.assign(__ds_scope, { TopBar, TopBarSearch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma_processos/App.jsx
try { (() => {
const {
  SidebarNav,
  TopBar,
  TopBarSearch,
  Button,
  IconButton,
  Logo,
  Dialog,
  Input,
  Select,
  FieldLabel,
  Toast,
  ToastStack,
  Breadcrumb,
  Icon
} = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;
const NAV = [{
  id: 'painel',
  label: 'Painel',
  icon: 'layout-dashboard'
}, {
  section: 'Acompanhamento'
}, {
  id: 'processos',
  label: 'Processos',
  icon: 'gavel',
  count: 248
}, {
  id: 'prazos',
  label: 'Prazos',
  icon: 'calendar-clock',
  count: 7
}, {
  id: 'condominios',
  label: 'Condomínios',
  icon: 'building-2',
  count: 34
}, {
  section: 'Controle'
}, {
  id: 'auditoria',
  label: 'Trilha de auditoria',
  icon: 'shield-check'
}];
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
  const openProcesso = id => {
    setProcessoId(id);
    setView('processo');
  };
  const salvar = () => {
    setDialog(false);
    setToast('Prazo cadastrado · Contestação · 09/09/2026');
    setTimeout(() => setToast(null), 4200);
  };
  if (!logged) return /*#__PURE__*/React.createElement(Login, {
    onEnter: () => setLogged(true)
  });
  const [title, subtitle] = TITLES[view];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(SidebarNav, {
    items: NAV,
    activeId: view === 'processo' ? 'processos' : view,
    onSelect: id => {
      setView(id);
      setProcessoId(null);
    },
    header: /*#__PURE__*/React.createElement(Logo, {
      variant: "lockup",
      height: 78,
      base: "../../assets/"
    }),
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/team/edson-alexandre.png",
      alt: "",
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--fw-medium) var(--fs-caption)/1.35 var(--font-sans)',
        color: 'var(--text-on-inverse)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, "Dr. Edson Alexandre"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--fw-light) var(--fs-micro)/1.4 var(--font-sans)',
        color: 'var(--text-on-inverse-muted)'
      }
    }, "Advogado s\xF3cio")), /*#__PURE__*/React.createElement(IconButton, {
      icon: "log-out",
      label: "Sair",
      variant: "inverse",
      size: "sm",
      onClick: () => setLogged(false)
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: view === 'processo' ? 'Detalhe do processo' : title,
    subtitle: view === 'processo' ? 'Res. Villa Verde · 3ª Vara Cível de Taguatinga' : subtitle,
    breadcrumb: view === 'processo' ? /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        id: 'processos',
        label: 'Processos'
      }, {
        label: 'Cobrança de taxas condominiais'
      }],
      onNavigate: () => setView('processos')
    }) : undefined,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBarSearch, {
      placeholder: "Buscar processo, cliente ou prazo",
      style: {
        width: 260
      }
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      label: "Notifica\xE7\xF5es"
    }), /*#__PURE__*/React.createElement(Button, {
      icon: "plus",
      onClick: () => setDialog(true)
    }, "Novo prazo"))
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--app-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '0 auto'
    }
  }, view === 'painel' && /*#__PURE__*/React.createElement(Painel, {
    onOpenProcesso: openProcesso,
    onGoPrazos: () => setView('prazos')
  }), view === 'processos' && /*#__PURE__*/React.createElement(Processos, {
    onOpenProcesso: openProcesso,
    onNovo: () => setDialog(true)
  }), view === 'prazos' && /*#__PURE__*/React.createElement(Prazos, {
    onOpenProcesso: openProcesso,
    onNovo: () => setDialog(true)
  }), view === 'condominios' && /*#__PURE__*/React.createElement(Condominios, {
    onOpenProcesso: openProcesso
  }), view === 'auditoria' && /*#__PURE__*/React.createElement(Auditoria, null), view === 'processo' && /*#__PURE__*/React.createElement(ProcessoDetalhe, {
    id: processoId,
    onBack: () => setView('processos')
  })))), /*#__PURE__*/React.createElement(Dialog, {
    open: dialog,
    title: "Novo prazo",
    description: "Vincule o prazo a um processo em andamento.",
    onClose: () => setDialog(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setDialog(false)
    }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
      onClick: salvar
    }, "Salvar prazo"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, {
    required: true
  }, "Processo"), /*#__PURE__*/React.createElement(Input, {
    mono: true,
    icon: "gavel",
    value: "0705620-13.2026.8.07.0020",
    onChange: () => {}
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, {
    required: true
  }, "Tipo"), /*#__PURE__*/React.createElement(Select, {
    options: ['Contestação', 'Réplica', 'Recurso', 'Diligência', 'Audiência']
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, {
    required: true
  }, "Vencimento"), /*#__PURE__*/React.createElement(Input, {
    type: "date",
    value: "2026-09-09",
    onChange: () => {}
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, null, "Respons\xE1vel"), /*#__PURE__*/React.createElement(Select, {
    options: ['Dr. Edson Alexandre', 'Dra. Amanda Pessoa', 'Dra. Sarah Holanda', 'Dr. Paulo Roberto']
  })))), toast && /*#__PURE__*/React.createElement(ToastStack, null, /*#__PURE__*/React.createElement(Toast, {
    tone: "ok",
    title: "Prazo cadastrado",
    description: toast,
    onClose: () => setToast(null)
  })));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma_processos/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma_processos/Auditoria.jsx
try { (() => {
const {
  DataTable,
  Badge,
  Card,
  MetricCard,
  Select,
  Input,
  Button,
  Icon
} = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;
function Auditoria() {
  const {
    auditoria
  } = window.EA_DATA;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "Registros nos \xFAltimos 30 dias",
    value: "1.284",
    icon: "shield-check"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Diverg\xEAncias abertas",
    value: "1",
    icon: "triangle-alert",
    footnote: "movimenta\xE7\xE3o sem pasta vinculada"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "\xDAltima concilia\xE7\xE3o com o TJDFT",
    value: "14:22",
    unit: "hoje",
    icon: "refresh-cw"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Buscar por processo, autor ou a\xE7\xE3o",
    style: {
      width: 320
    }
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "Todos os autores",
    options: ['Sistema', 'Dr. Edson Alexandre', 'Dra. Amanda Pessoa', 'Dra. Sarah Holanda', 'Emanoela Felício'],
    style: {
      width: 200
    }
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "\xDAltimos 30 dias",
    options: ['Hoje', 'Últimos 7 dias', 'Últimos 30 dias', 'Este ano'],
    style: {
      width: 170
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "download"
  }, "Exportar trilha")), /*#__PURE__*/React.createElement(DataTable, {
    rows: auditoria,
    columns: [{
      key: 'data',
      label: 'Data e hora',
      mono: true,
      width: '150px'
    }, {
      key: 'ator',
      label: 'Autor',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: r.ator === 'Sistema' ? 'cpu' : 'user',
        size: 14,
        style: {
          color: 'var(--text-muted)'
        }
      }), r.ator)
    }, {
      key: 'acao',
      label: 'Ação',
      strong: true,
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone
      }, r.acao)
    }, {
      key: 'alvo',
      label: 'Processo / cliente',
      mono: true
    }, {
      key: 'origem',
      label: 'Detalhe',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--fw-light) var(--fs-caption)/1.5 var(--font-sans)',
          color: 'var(--text-muted)'
        }
      }, r.origem)
    }]
  }), /*#__PURE__*/React.createElement(Card, {
    title: "Regras de auditoria vigentes"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      display: 'grid',
      gap: 'var(--space-2)',
      font: 'var(--fw-light) var(--fs-body-sm)/1.7 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("li", null, "Toda altera\xE7\xE3o de prazo fatal registra autor, valor anterior e valor novo."), /*#__PURE__*/React.createElement("li", null, "Movimenta\xE7\xE3o capturada sem pasta vinculada gera diverg\xEAncia aberta em at\xE9 6 horas."), /*#__PURE__*/React.createElement("li", null, "Arquivamento de processo exige justificativa textual do respons\xE1vel."), /*#__PURE__*/React.createElement("li", null, "Acessos de s\xEDndico s\xE3o somente leitura e ficam registrados por 5 anos."))));
}
Object.assign(window, {
  Auditoria
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma_processos/Auditoria.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma_processos/Condominios.jsx
try { (() => {
const {
  DataTable,
  Card,
  Button,
  Badge,
  Input,
  Icon
} = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;
function Condominios({
  onOpenProcesso
}) {
  const {
    condominios
  } = window.EA_DATA;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Buscar condom\xEDnio ou s\xEDndico",
    style: {
      width: 320
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    icon: "plus"
  }, "Novo condom\xEDnio")), /*#__PURE__*/React.createElement(DataTable, {
    onRowClick: () => onOpenProcesso('p1'),
    rows: condominios,
    columns: [{
      key: 'nome',
      label: 'Condomínio',
      strong: true,
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "building-2",
        size: 16,
        style: {
          color: 'var(--text-muted)'
        }
      }), r.nome)
    }, {
      key: 'cidade',
      label: 'Localidade'
    }, {
      key: 'sindico',
      label: 'Síndico'
    }, {
      key: 'unidades',
      label: 'Unidades',
      mono: true,
      align: 'right'
    }, {
      key: 'processos',
      label: 'Processos',
      mono: true,
      align: 'right',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: "brand"
      }, r.processos)
    }, {
      key: 'inadimplencia',
      label: 'Inadimplência acumulada',
      mono: true,
      align: 'right'
    }]
  }), /*#__PURE__*/React.createElement(Card, {
    title: "Assessoria full service",
    tone: "sunken"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) var(--fs-body-sm)/1.75 var(--font-sans)',
      color: 'var(--text-body)',
      maxWidth: '86ch'
    }
  }, "Cada condom\xEDnio assessorado tem uma pasta \xFAnica reunindo processos, prazos, atas de assembleia, contratos com prestadores e o hist\xF3rico de recupera\xE7\xE3o de cr\xE9dito. O s\xEDndico acessa a pasta em modo somente leitura.")));
}
Object.assign(window, {
  Condominios
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma_processos/Condominios.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma_processos/Login.jsx
try { (() => {
const {
  Button,
  Input,
  FieldLabel,
  Checkbox,
  Logo
} = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;
function Login({
  onEnter
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      background: 'var(--navy-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-8)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    height: 150,
    base: "../../assets/"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--fw-bold) var(--fs-display-3)/var(--lh-heading) var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--stone-0)'
    }
  }, "Plataforma de acompanhamento"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) var(--fs-body)/var(--lh-body) var(--font-sans)',
      color: 'var(--text-on-inverse-muted)'
    }
  }, "Administra\xE7\xE3o, monitoramento e auditoria dos processos do escrit\xF3rio e dos condom\xEDnios que assessoramos.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      background: 'var(--surface-page)',
      padding: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onEnter();
    },
    style: {
      width: '100%',
      maxWidth: 340,
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--fw-semibold) var(--fs-h1)/1.25 var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, "Entrar"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6,
      font: 'var(--fw-light) var(--fs-body-sm)/1.6 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Acesso restrito \xE0 equipe e aos s\xEDndicos autorizados.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, {
    htmlFor: "em",
    required: true
  }, "E-mail"), /*#__PURE__*/React.createElement(Input, {
    id: "em",
    type: "email",
    icon: "mail",
    value: "edson.alexandre.adv@gmail.com",
    onChange: () => {}
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, {
    htmlFor: "pw",
    required: true
  }, "Senha"), /*#__PURE__*/React.createElement(Input, {
    id: "pw",
    type: "password",
    icon: "lock",
    value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    onChange: () => {}
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    label: "Manter conectado",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("a", {
    href: "#recuperar",
    onClick: e => e.preventDefault(),
    style: {
      font: 'var(--fw-medium) var(--fs-caption)/1.4 var(--font-sans)'
    }
  }, "Esqueci minha senha")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    block: true,
    size: "lg"
  }, "Entrar na plataforma"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) var(--fs-caption)/1.6 var(--font-sans)',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "D\xFAvidas de acesso: (61) 3021-8539 \xB7 seg a sex, 09h \xE0s 17h"))));
}
Object.assign(window, {
  Login
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma_processos/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma_processos/Painel.jsx
try { (() => {
const {
  MetricCard,
  Card,
  DataTable,
  StatusPill,
  Badge,
  Button,
  Alert,
  Timeline,
  Icon
} = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;
function Painel({
  onOpenProcesso,
  onGoPrazos
}) {
  const {
    prazos,
    processos,
    condominios
  } = window.EA_DATA;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "risk",
    title: "2 prazos fatais vencem nos pr\xF3ximos 7 dias",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconEnd: "arrow-right",
      onClick: onGoPrazos
    }, "Ver prazos")
  }, "Impugna\xE7\xE3o ao cumprimento (Res. Villa Verde) e contesta\xE7\xE3o (Cond. Jardins do Sul)."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "Processos ativos",
    value: "248",
    icon: "gavel",
    delta: "+12 no m\xEAs",
    deltaTone: "up"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Prazos em 7 dias",
    value: "7",
    icon: "calendar-clock",
    footnote: "2 fatais"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Condom\xEDnios assessorados",
    value: "34",
    icon: "building-2",
    footnote: "1.482 unidades"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Cr\xE9dito recuperado no ano",
    value: "R$ 1,4M",
    icon: "banknote",
    delta: "+18% vs. 2025",
    deltaTone: "up"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.35fr .65fr',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Prazos mais pr\xF3ximos",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: onGoPrazos
    }, "Todos os prazos"),
    padding: "none"
  }, /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    onRowClick: () => onOpenProcesso('p1'),
    style: {
      border: 0,
      borderRadius: 0,
      boxShadow: 'none'
    },
    columns: [{
      key: 'tipo',
      label: 'Prazo',
      strong: true
    }, {
      key: 'cliente',
      label: 'Cliente'
    }, {
      key: 'data',
      label: 'Vencimento',
      mono: true
    }, {
      key: 'dias',
      label: 'Situação',
      render: r => /*#__PURE__*/React.createElement(StatusPill, {
        status: r.fatal ? 'urgente' : 'prazo',
        label: r.dias === 1 ? '1 dia' : r.dias + ' dias'
      })
    }, {
      key: 'responsavel',
      label: 'Responsável'
    }],
    rows: prazos
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Movimenta\xE7\xF5es de hoje"
  }, /*#__PURE__*/React.createElement(Timeline, {
    items: [{
      title: 'Certidão de decurso de prazo',
      date: '14:22',
      tone: 'risk',
      icon: 'calendar-clock',
      description: 'Parte contrária silente — Res. Villa Verde.',
      meta: 'TJDFT · automático'
    }, {
      title: 'Prazo alterado',
      date: '11:04',
      tone: 'warn',
      icon: 'pencil',
      description: 'Contestação antecipada para 09/09/2026.',
      meta: 'Dra. Sarah Holanda'
    }, {
      title: 'Documento anexado',
      date: '09:38',
      tone: 'neutral',
      icon: 'paperclip',
      description: 'planilha-debitos-502.pdf',
      meta: 'Emanoela Felício'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Carteira por condom\xEDnio",
    action: /*#__PURE__*/React.createElement(Badge, {
      tone: "brand"
    }, "34 clientes"),
    padding: "none"
  }, /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    style: {
      border: 0,
      borderRadius: 0,
      boxShadow: 'none'
    },
    columns: [{
      key: 'nome',
      label: 'Condomínio',
      strong: true
    }, {
      key: 'unidades',
      label: 'Unidades',
      mono: true,
      align: 'right'
    }, {
      key: 'processos',
      label: 'Processos',
      mono: true,
      align: 'right'
    }, {
      key: 'inadimplencia',
      label: 'Inadimplência',
      mono: true,
      align: 'right'
    }],
    rows: condominios
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Processos por \xE1rea"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, [['Condominial', 63, 'var(--navy-600)'], ['Imobiliário', 14, 'var(--navy-400)'], ['Civil', 11, 'var(--navy-300)'], ['Consumidor', 6, 'var(--navy-200)'], ['Família e Sucessões', 4, 'var(--stone-300)'], ['Trabalhista', 2, 'var(--stone-200)']].map(([label, pct, color]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'grid',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--fw-medium) var(--fs-body-sm)/1.4 var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    className: "ea-num",
    style: {
      color: 'var(--text-muted)'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 3,
      background: 'var(--stone-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      borderRadius: 3,
      background: color
    }
  }))))))));
}
Object.assign(window, {
  Painel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma_processos/Painel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma_processos/Prazos.jsx
try { (() => {
const {
  Card,
  DataTable,
  StatusPill,
  Button,
  Tabs,
  Alert,
  IconButton
} = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;
function Prazos({
  onOpenProcesso,
  onNovo
}) {
  const {
    prazos
  } = window.EA_DATA;
  const [tab, setTab] = React.useState('abertos');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "warn",
    title: "Todo prazo fatal exige confirma\xE7\xE3o de duas pessoas"
  }, "Prazos marcados como fatais s\xF3 podem ser encerrados pelo respons\xE1vel e por um s\xF3cio."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    activeId: tab,
    onSelect: setTab,
    items: [{
      id: 'abertos',
      label: 'Abertos',
      count: 4
    }, {
      id: 'cumpridos',
      label: 'Cumpridos',
      count: 128
    }, {
      id: 'perdidos',
      label: 'Perdidos',
      count: 0
    }],
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "calendar",
    label: "Ver em calend\xE1rio"
  }), /*#__PURE__*/React.createElement(Button, {
    icon: "plus",
    onClick: onNovo
  }, "Novo prazo"))), /*#__PURE__*/React.createElement(DataTable, {
    onRowClick: () => onOpenProcesso('p1'),
    rows: prazos,
    columns: [{
      key: 'tipo',
      label: 'Prazo',
      strong: true
    }, {
      key: 'processo',
      label: 'Processo',
      mono: true
    }, {
      key: 'cliente',
      label: 'Cliente'
    }, {
      key: 'data',
      label: 'Vencimento',
      mono: true
    }, {
      key: 'dias',
      label: 'Situação',
      render: r => /*#__PURE__*/React.createElement(StatusPill, {
        status: r.fatal ? 'urgente' : 'prazo',
        label: r.dias === 1 ? 'em 1 dia' : 'em ' + r.dias + ' dias'
      })
    }, {
      key: 'responsavel',
      label: 'Responsável'
    }]
  }), /*#__PURE__*/React.createElement(Card, {
    title: "Setembro 2026"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 6
    }
  }, ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'].map(d => /*#__PURE__*/React.createElement("p", {
    key: d,
    className: "ea-eyebrow",
    style: {
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, d)), Array.from({
    length: 1
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: 'pad' + i
  })), Array.from({
    length: 30
  }).map((_, i) => {
    const day = i + 1;
    const marks = {
      4: 'risk',
      9: 'risk',
      18: 'warn',
      24: 'warn'
    };
    const t = marks[day];
    return /*#__PURE__*/React.createElement("div", {
      key: day,
      style: {
        minHeight: 46,
        padding: '5px 7px',
        borderRadius: 'var(--radius-xs)',
        border: '1px solid ' + (t ? 'var(--status-' + t + '-border)' : 'var(--border-subtle)'),
        background: t ? 'var(--status-' + t + '-bg)' : 'var(--stone-0)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--fw-medium) var(--fs-caption)/1.3 var(--font-mono)',
        color: t ? 'var(--status-' + t + '-fg)' : 'var(--text-muted)'
      }
    }, day), t && /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 2,
        font: 'var(--fw-medium) var(--fs-micro)/1.3 var(--font-sans)',
        color: 'var(--status-' + t + '-fg)'
      }
    }, t === 'risk' ? 'Prazo fatal' : 'Prazo'));
  }))));
}
Object.assign(window, {
  Prazos
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma_processos/Prazos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma_processos/ProcessoDetalhe.jsx
try { (() => {
const {
  Card,
  Tabs,
  Timeline,
  StatusPill,
  Badge,
  Button,
  IconButton,
  Icon,
  Alert,
  DataTable,
  EmptyState,
  Tooltip
} = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;
function ProcessoDetalhe({
  id,
  onBack
}) {
  const {
    processos,
    movimentacoes
  } = window.EA_DATA;
  const p = processos.find(x => x.id === id) || processos[0];
  const [tab, setTab] = React.useState('movimentacoes');
  const items = movimentacoes[p.id] || movimentacoes.p1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ea-num",
    style: {
      font: 'var(--fw-medium) var(--fs-h1)/1.2 var(--font-mono)',
      color: 'var(--text-heading)'
    }
  }, p.numero), /*#__PURE__*/React.createElement(StatusPill, {
    status: p.status
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, p.area), /*#__PURE__*/React.createElement(Tooltip, {
    label: "N\xFAmero copiado do painel do TJDFT"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 15
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6,
      font: 'var(--fw-light) var(--fs-body)/1.6 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, p.tipo)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "arrow-left",
    onClick: onBack
  }, "Voltar"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "paperclip",
    label: "Anexar documento"
  }), /*#__PURE__*/React.createElement(Button, {
    icon: "calendar-plus"
  }, "Novo prazo"))), p.status === 'urgente' && /*#__PURE__*/React.createElement(Alert, {
    tone: "risk",
    title: "Prazo fatal amanh\xE3 \u2014 impugna\xE7\xE3o ao cumprimento de senten\xE7a",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Registrar pe\xE7a protocolada")
  }, "Vencimento em ", p.prazo, ". Respons\xE1vel: ", p.responsavel, "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    activeId: tab,
    onSelect: setTab,
    items: [{
      id: 'movimentacoes',
      label: 'Movimentações',
      count: items.length
    }, {
      id: 'documentos',
      label: 'Documentos',
      count: 3
    }, {
      id: 'partes',
      label: 'Partes'
    }, {
      id: 'financeiro',
      label: 'Financeiro'
    }]
  }), tab === 'movimentacoes' && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Timeline, {
    items: items
  })), tab === 'documentos' && /*#__PURE__*/React.createElement(DataTable, {
    rows: [{
      id: 1,
      nome: 'Petição inicial.pdf',
      tipo: 'Petição',
      data: '11/11/2025',
      autor: 'Emanoela Felício'
    }, {
      id: 2,
      nome: 'Convenção do condomínio.pdf',
      tipo: 'Prova',
      data: '11/11/2025',
      autor: 'Emanoela Felício'
    }, {
      id: 3,
      nome: 'Planilha de débitos — un. 502.xlsx',
      tipo: 'Prova',
      data: '02/09/2026',
      autor: 'Emanoela Felício'
    }],
    columns: [{
      key: 'nome',
      label: 'Arquivo',
      strong: true,
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "file-text",
        size: 15,
        style: {
          color: 'var(--text-muted)'
        }
      }), r.nome)
    }, {
      key: 'tipo',
      label: 'Tipo',
      render: r => /*#__PURE__*/React.createElement(Badge, null, r.tipo)
    }, {
      key: 'data',
      label: 'Anexado em',
      mono: true
    }, {
      key: 'autor',
      label: 'Por'
    }]
  }), tab === 'partes' && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, [['Autor', p.cliente, 'CNPJ 12.345.678/0001-90 · representado por Marcos Tavares (síndico)'], ['Réu', 'Proprietário da unidade 502', 'CPF 000.000.000-00'], ['Patrono do autor', p.responsavel, 'OAB/DF 00.000']].map(([papel, nome, det]) => /*#__PURE__*/React.createElement("div", {
    key: papel,
    style: {
      display: 'grid',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ea-eyebrow",
    style: {
      color: 'var(--text-muted)'
    }
  }, papel), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-medium) var(--fs-body)/1.4 var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, nome), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) var(--fs-body-sm)/1.6 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, det))))), tab === 'financeiro' && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(EmptyState, {
    compact: true,
    icon: "banknote",
    title: "Nenhum lan\xE7amento registrado",
    description: "Vincule honor\xE1rios, custas e valores recuperados a este processo.",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: "plus"
    }, "Novo lan\xE7amento")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Resumo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, [['Cliente', p.cliente], ['Vara', p.vara], ['Fase', p.fase], ['Responsável', p.responsavel], ['Valor da causa', p.valor], ['Próximo prazo', p.prazo]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ea-eyebrow",
    style: {
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-medium) var(--fs-body-sm)/1.5 var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    title: "Monitoramento"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) var(--fs-body-sm)/1.6 var(--font-sans)',
      color: 'var(--text-on-inverse-muted)'
    }
  }, "Consulta autom\xE1tica ao TJDFT a cada 6 horas. \xDAltima verifica\xE7\xE3o hoje \xE0s 14:22."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    icon: "refresh-cw"
  }, "Verificar agora"))))));
}
Object.assign(window, {
  ProcessoDetalhe
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma_processos/ProcessoDetalhe.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma_processos/Processos.jsx
try { (() => {
const {
  DataTable,
  SortHeader,
  StatusPill,
  Badge,
  Tag,
  Button,
  Select,
  Input,
  IconButton,
  EmptyState,
  Card
} = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;
function Processos({
  onOpenProcesso,
  onNovo
}) {
  const {
    processos
  } = window.EA_DATA;
  const [area, setArea] = React.useState('');
  const [busca, setBusca] = React.useState('');
  const [fatais, setFatais] = React.useState(false);
  const rows = processos.filter(p => (!area || p.area === area) && (!fatais || p.status === 'urgente' || p.status === 'prazo') && (!busca || (p.numero + p.cliente + p.tipo).toLowerCase().includes(busca.toLowerCase())));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Buscar por n\xFAmero CNJ, cliente ou objeto",
    value: busca,
    onChange: e => setBusca(e.target.value),
    style: {
      width: 340
    }
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "Todas as \xE1reas",
    value: area,
    onChange: e => setArea(e.target.value),
    options: ['Condominial', 'Imobiliário', 'Civil', 'Trabalhista'],
    style: {
      width: 190
    }
  }), /*#__PURE__*/React.createElement(Tag, {
    selected: fatais,
    onClick: () => setFatais(!fatais)
  }, "Somente com prazo aberto"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "download",
    label: "Exportar planilha"
  }), /*#__PURE__*/React.createElement(Button, {
    icon: "plus",
    onClick: onNovo
  }, "Novo processo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) var(--fs-body-sm)/1.5 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, rows.length, " de ", processos.length, " processos"), area && /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => setArea('')
  }, "\xC1rea: ", area), fatais && /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => setFatais(false)
  }, "Com prazo aberto")), /*#__PURE__*/React.createElement(DataTable, {
    onRowClick: r => onOpenProcesso(r.id),
    rows: rows,
    empty: /*#__PURE__*/React.createElement(EmptyState, {
      icon: "search-x",
      title: "Nenhum processo encontrado",
      description: "Ajuste a busca ou remova os filtros aplicados.",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        size: "sm",
        onClick: () => {
          setArea('');
          setBusca('');
          setFatais(false);
        }
      }, "Limpar filtros")
    }),
    columns: [{
      key: 'numero',
      label: /*#__PURE__*/React.createElement(SortHeader, {
        label: "N\xFAmero CNJ",
        dir: "asc"
      }),
      mono: true,
      strong: true,
      width: '215px'
    }, {
      key: 'cliente',
      label: 'Cliente',
      render: r => /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          color: 'var(--text-heading)',
          fontWeight: 'var(--fw-medium)'
        }
      }, r.cliente), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          font: 'var(--fw-light) var(--fs-caption)/1.5 var(--font-sans)',
          color: 'var(--text-muted)'
        }
      }, r.tipo))
    }, {
      key: 'area',
      label: 'Área',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.area === 'Condominial' ? 'brand' : 'neutral'
      }, r.area)
    }, {
      key: 'vara',
      label: 'Vara',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--fw-light) var(--fs-caption)/1.5 var(--font-sans)',
          color: 'var(--text-body)'
        }
      }, r.vara)
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(StatusPill, {
        status: r.status
      })
    }, {
      key: 'prazo',
      label: /*#__PURE__*/React.createElement(SortHeader, {
        label: "Prazo"
      }),
      mono: true
    }, {
      key: 'valor',
      label: 'Valor da causa',
      mono: true,
      align: 'right'
    }]
  }));
}
Object.assign(window, {
  Processos
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma_processos/Processos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma_processos/data.js
try { (() => {
window.EA_DATA = (() => {
  const condominios = [{
    id: 'villa-verde',
    nome: 'Res. Villa Verde',
    unidades: 184,
    cidade: 'Águas Claras/DF',
    sindico: 'Marcos Tavares',
    processos: 14,
    inadimplencia: 'R$ 312.480,00'
  }, {
    id: 'parque-aguas',
    nome: 'Cond. Parque das Águas',
    unidades: 96,
    cidade: 'Águas Claras/DF',
    sindico: 'Rita Belmonte',
    processos: 9,
    inadimplencia: 'R$ 128.900,00'
  }, {
    id: 'century-plaza',
    nome: 'Ed. DF Century Plaza',
    unidades: 320,
    cidade: 'Águas Claras/DF',
    sindico: 'Conselho Gestor',
    processos: 21,
    inadimplencia: 'R$ 704.115,00'
  }, {
    id: 'jardins-sul',
    nome: 'Cond. Jardins do Sul',
    unidades: 140,
    cidade: 'Taguatinga/DF',
    sindico: 'Helena Prado',
    processos: 7,
    inadimplencia: 'R$ 87.240,00'
  }, {
    id: 'terra-nova',
    nome: 'Res. Terra Nova',
    unidades: 72,
    cidade: 'Vicente Pires/DF',
    sindico: 'Aldo Ferraz',
    processos: 4,
    inadimplencia: 'R$ 41.660,00'
  }];
  const processos = [{
    id: 'p1',
    numero: '0703451-22.2025.8.07.0020',
    cliente: 'Res. Villa Verde',
    area: 'Condominial',
    tipo: 'Cobrança de taxas condominiais',
    vara: '3ª Vara Cível de Taguatinga',
    status: 'urgente',
    prazo: '04/09/2026',
    responsavel: 'Dr. Edson Alexandre',
    valor: 'R$ 48.320,00',
    fase: 'Cumprimento de sentença'
  }, {
    id: 'p2',
    numero: '0711902-04.2025.8.07.0001',
    cliente: 'Cond. Parque das Águas',
    area: 'Condominial',
    tipo: 'Ação de prestação de contas',
    vara: '1ª Vara Cível de Brasília',
    status: 'ativo',
    prazo: '18/09/2026',
    responsavel: 'Dra. Amanda Pessoa',
    valor: 'R$ 12.700,00',
    fase: 'Instrução'
  }, {
    id: 'p3',
    numero: '0698114-77.2024.8.07.0016',
    cliente: 'Ed. DF Century Plaza',
    area: 'Imobiliário',
    tipo: 'Vícios construtivos — ação contra construtora',
    vara: '2ª Vara Cível de Águas Claras',
    status: 'acordo',
    prazo: '—',
    responsavel: 'Dr. Edson Alexandre',
    valor: 'R$ 205.480,00',
    fase: 'Acordo homologado'
  }, {
    id: 'p4',
    numero: '0705620-13.2026.8.07.0020',
    cliente: 'Cond. Jardins do Sul',
    area: 'Condominial',
    tipo: 'Nulidade de assembleia',
    vara: '4ª Vara Cível de Taguatinga',
    status: 'prazo',
    prazo: '09/09/2026',
    responsavel: 'Dra. Sarah Holanda',
    valor: 'R$ 30.000,00',
    fase: 'Contestação'
  }, {
    id: 'p5',
    numero: '0700877-58.2026.8.07.0001',
    cliente: 'Res. Terra Nova',
    area: 'Civil',
    tipo: 'Responsabilidade civil — infiltração',
    vara: '5ª Vara Cível de Brasília',
    status: 'ativo',
    prazo: '30/09/2026',
    responsavel: 'Dr. Paulo Roberto',
    valor: 'R$ 22.150,00',
    fase: 'Saneamento'
  }, {
    id: 'p6',
    numero: '0688201-90.2023.8.07.0020',
    cliente: 'Res. Villa Verde',
    area: 'Condominial',
    tipo: 'Cobrança — unidade 502',
    vara: '3ª Vara Cível de Taguatinga',
    status: 'ganho',
    prazo: '—',
    responsavel: 'Emanoela Felício',
    valor: 'R$ 61.040,00',
    fase: 'Trânsito em julgado'
  }, {
    id: 'p7',
    numero: '0712488-31.2026.8.07.0016',
    cliente: 'Ed. DF Century Plaza',
    area: 'Trabalhista',
    tipo: 'Reclamação — ex-porteiro',
    vara: '9ª Vara do Trabalho de Brasília',
    status: 'ativo',
    prazo: '24/09/2026',
    responsavel: 'Dr. Leonor Soares',
    valor: 'R$ 74.900,00',
    fase: 'Audiência inicial'
  }, {
    id: 'p8',
    numero: '0690455-12.2024.8.07.0020',
    cliente: 'Cond. Jardins do Sul',
    area: 'Condominial',
    tipo: 'Cobrança — unidade 21B',
    vara: '3ª Vara Cível de Taguatinga',
    status: 'suspenso',
    prazo: '—',
    responsavel: 'Emanoela Felício',
    valor: 'R$ 18.300,00',
    fase: 'Suspenso por acordo extrajudicial'
  }];
  const prazos = [{
    id: 'd1',
    processo: '0703451-22.2025.8.07.0020',
    cliente: 'Res. Villa Verde',
    tipo: 'Impugnação ao cumprimento',
    data: '04/09/2026',
    dias: 1,
    fatal: true,
    responsavel: 'Dr. Edson Alexandre'
  }, {
    id: 'd2',
    processo: '0705620-13.2026.8.07.0020',
    cliente: 'Cond. Jardins do Sul',
    tipo: 'Contestação',
    data: '09/09/2026',
    dias: 6,
    fatal: true,
    responsavel: 'Dra. Sarah Holanda'
  }, {
    id: 'd3',
    processo: '0711902-04.2025.8.07.0001',
    cliente: 'Cond. Parque das Águas',
    tipo: 'Réplica',
    data: '18/09/2026',
    dias: 15,
    fatal: false,
    responsavel: 'Dra. Amanda Pessoa'
  }, {
    id: 'd4',
    processo: '0712488-31.2026.8.07.0016',
    cliente: 'Ed. DF Century Plaza',
    tipo: 'Audiência inicial',
    data: '24/09/2026',
    dias: 21,
    fatal: false,
    responsavel: 'Dr. Leonor Soares'
  }];
  const movimentacoes = {
    p1: [{
      title: 'Intimação para impugnação ao cumprimento de sentença',
      date: '20/08/2026',
      tone: 'risk',
      icon: 'calendar-clock',
      description: 'Prazo fatal de 15 dias contados da publicação. Vencimento em 04/09/2026.',
      meta: 'Capturado do TJDFT · conciliado automaticamente'
    }, {
      title: 'Penhora de valores deferida',
      date: '19/08/2026',
      tone: 'ok',
      icon: 'banknote',
      description: 'Bloqueio parcial via SISBAJUD no valor de R$ 19.412,80.',
      meta: 'Registrado por Dr. Edson Alexandre'
    }, {
      title: 'Sentença publicada',
      date: '28/06/2026',
      tone: 'ok',
      icon: 'gavel',
      description: 'Procedência dos pedidos. Cobrança das taxas condominiais em atraso deferida, com juros e multa convencional.',
      meta: 'Capturado do TJDFT'
    }, {
      title: 'Audiência de conciliação',
      date: '14/03/2026',
      tone: 'brand',
      icon: 'users',
      description: 'Sem acordo entre as partes. Prosseguimento do feito.',
      meta: 'Registrado por Dra. Amanda Pessoa'
    }, {
      title: 'Distribuição da ação',
      date: '11/11/2025',
      tone: 'neutral',
      icon: 'file-plus',
      description: 'Ação de cobrança distribuída à 3ª Vara Cível de Taguatinga.',
      meta: 'Registrado por Emanoela Felício'
    }]
  };
  const auditoria = [{
    id: 'a1',
    data: '03/09/2026 14:22',
    ator: 'Sistema',
    acao: 'Movimentação capturada',
    alvo: '0703451-22.2025.8.07.0020',
    origem: 'TJDFT · consulta automática',
    tone: 'info'
  }, {
    id: 'a2',
    data: '03/09/2026 11:04',
    ator: 'Dra. Sarah Holanda',
    acao: 'Prazo alterado',
    alvo: '0705620-13.2026.8.07.0020',
    origem: '12/09/2026 → 09/09/2026',
    tone: 'warn'
  }, {
    id: 'a3',
    data: '02/09/2026 17:47',
    ator: 'Emanoela Felício',
    acao: 'Documento anexado',
    alvo: '0688201-90.2023.8.07.0020',
    origem: 'planilha-debitos-502.pdf',
    tone: 'neutral'
  }, {
    id: 'a4',
    data: '02/09/2026 09:15',
    ator: 'Dr. Edson Alexandre',
    acao: 'Processo arquivado',
    alvo: '0690455-12.2024.8.07.0020',
    origem: 'Acordo extrajudicial firmado',
    tone: 'neutral'
  }, {
    id: 'a5',
    data: '01/09/2026 16:30',
    ator: 'Sistema',
    acao: 'Divergência detectada',
    alvo: '0712488-31.2026.8.07.0016',
    origem: 'Movimentação sem pasta vinculada',
    tone: 'risk'
  }, {
    id: 'a6',
    data: '01/09/2026 08:02',
    ator: 'Dra. Amanda Pessoa',
    acao: 'Acesso concedido',
    alvo: 'Cond. Parque das Águas',
    origem: 'Perfil síndico · somente leitura',
    tone: 'ok'
  }];
  return {
    condominios,
    processos,
    prazos,
    movimentacoes,
    auditoria
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma_processos/data.js", error: String((e && e.message) || e) }); }

// ui_kits/site_institucional/Sections.jsx
try { (() => {
const {
  Logo,
  SectionTitle,
  PracticeCard,
  TeamCard,
  Button,
  Card,
  Icon,
  Input,
  Textarea,
  FieldLabel,
  Checkbox
} = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;
const WRAP = {
  maxWidth: 'var(--layout-max)',
  margin: '0 auto',
  padding: '0 var(--layout-gutter)'
};
const NAVY = {
  background: 'var(--navy-900)'
};
const LIGHT = {
  background: 'var(--stone-200)'
};
function TopNav() {
  const links = ['Atuação', 'Assessoria', 'Por que nós?', 'Contato'];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--navy-600)',
      height: 40,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      color: 'var(--stone-0)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "facebook",
    size: 14
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 14
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l
  }, i === 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 12,
      background: 'var(--border-inverse)'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#s",
    onClick: e => e.preventDefault(),
    style: {
      font: 'var(--fw-medium) var(--fs-micro)/1.2 var(--font-sans)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--stone-0)',
      textDecoration: 'none'
    }
  }, l))))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      ...NAVY,
      padding: 'var(--section-y) 0 var(--section-y-tight)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-8)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    height: 128,
    base: "../../assets/"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      justifyItems: 'center',
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--fw-bold) var(--fs-display-2)/var(--lh-display) var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--stone-0)'
    }
  }, "Seu direito \xE9 a nossa luta!"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) var(--fs-body)/var(--lh-body) var(--font-sans)',
      color: 'var(--text-on-inverse-muted)',
      maxWidth: 620
    }
  }, "H\xE1 mais de 14 anos defendendo os seus direitos com \xE9tica e responsabilidade, oferecendo solu\xE7\xF5es jur\xEDdicas altamente eficazes.")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconEnd: "message-circle"
  }, "Fale conosco no WhatsApp")));
}
const AREAS = [['Direito Condominial', 'Somos especialistas em Direito Condominial! Temos mais de 14 anos de experiência!'], ['Direito Imobiliário', 'Problemas com questões relacionadas a imóveis, incluindo compra, venda, locação, condomínios e litígios imobiliários?'], ['Direito Civil', 'Estamos aqui para resolver questões relacionadas a contratos, responsabilidade civil, disputas de propriedade, entre outros.'], ['Direito do Consumidor', 'Deixe-nos ajudar em questões como problemas com produtos ou serviços defeituosos, cobranças indevidas, entre outros.'], ['Família e Sucessões', 'Estamos aqui para resolver ou cuidar de divórcio, guarda e visitação dos filhos, partilha de bens, testamentos, inventários, pensão alimentícia e outros.'], ['Outras áreas do Direito', 'Não hesite em nos contatar para obter aconselhamento jurídico confiável e excelente em qualquer área do Direito.']];
function Areas() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...NAVY,
      padding: '0 0 var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'grid',
      gap: 'var(--space-10)',
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    size: "md"
  }, "Se voc\xEA est\xE1 enfrentando problemas de:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      width: '100%'
    }
  }, AREAS.map(([t, d]) => /*#__PURE__*/React.createElement(PracticeCard, {
    key: t,
    title: t
  }, d))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) var(--fs-body)/var(--lh-body) var(--font-sans)',
      color: 'var(--text-on-inverse-muted)',
      textAlign: 'center'
    }
  }, "Chegou a hora de assumirmos o seu caso para fazer valer os seus direitos!")));
}
function FaixaOnline() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...LIGHT,
      padding: 'var(--section-y-tight) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-6)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    onNavy: false,
    sentenceCase: true,
    sub: "Nosso escrit\xF3rio de advocacia realiza atendimentos virtuais para clientes em outros estados. Se este \xE9 o seu caso, saiba que pode contar conosco."
  }, "Tamb\xE9m atendemos online para todo o Brasil."), /*#__PURE__*/React.createElement(Button, null, "Quero ser atendido por um especialista")));
}
function Assessoria() {
  const paras = ['Um condomínio bem assessorado, juridicamente, corre menos riscos de enfrentar problemas em seus contratos com prestadores de serviços, condôminos e até mesmo com a própria construtora do edifício.', 'Temos uma vasta experiência no assessoramento de síndicos para melhorarem a gestão de seus condomínios, dando foco total na recuperação de crédito, diminuindo, significativamente, dívidas condominiais.', 'Dispomos de profissionais com conhecimento irrestrito da área e suporte técnico para atender as demandas de nossos clientes de forma personalizada.', 'Nosso maior objetivo é agir preventivamente, em todas as situações, para resguardar os direitos dos nossos clientes e evitar danos para eles.'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...NAVY,
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, null, "Assessoria jur\xEDdica para condom\xEDnios"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)',
      maxWidth: 760,
      textAlign: 'center'
    }
  }, paras.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      font: 'var(--fw-light) var(--fs-body)/var(--lh-body) var(--font-sans)',
      color: 'var(--text-on-inverse-muted)'
    }
  }, p)))));
}
const AVALIACOES = [['Amigo DF', 'Local Guide', 'Avaliação positiva: Profissionalismo. O escritório atendeu todas as minhas expectativas. Assumiram a causa do condomínio e recuperamos boa parte das dívidas em atraso.'], ['Bárbara Sampaio', '2 comentários', 'Avaliação positiva: Profissionalismo. Pessoas atentas, dedicadas e de fácil acesso. Recomendo o trabalho da equipe para qualquer questão condominial.'], ['Fernando Thadeu', '4 comentários', 'Avaliação positiva: Profissionalismo. Fui muito bem atendido desde o primeiro contato. Explicaram cada etapa do processo com clareza.'], ['Thiago Guimarães', '5 comentários · Fotos', 'Profissionais de altíssima competência, capacitados e dedicados a prestar serviços advocatícios de qualidade e com excelência ao cliente. Recomendo!']];
function Avaliacoes() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...NAVY,
      padding: '0 0 var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    size: "sm"
  }, "Veja o que nossos clientes falam sobre n\xF3s:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)',
      width: '100%',
      maxWidth: 940
    }
  }, AVALIACOES.map(([nome, meta, texto]) => /*#__PURE__*/React.createElement("article", {
    key: nome,
    style: {
      background: 'var(--stone-0)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card-site)',
      padding: 'var(--space-5)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--stone-200)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--stone-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 15
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-semibold) var(--fs-body-sm)/1.35 var(--font-sans)',
      color: 'var(--navy-900)'
    }
  }, nome), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) var(--fs-micro)/1.4 var(--font-sans)',
      color: 'var(--stone-500)'
    }
  }, meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 1,
      color: 'var(--amber-600)'
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: 12
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) var(--fs-caption)/1.75 var(--font-sans)',
      color: 'var(--stone-700)'
    }
  }, texto)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-5)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    size: "sm",
    sub: "Sua avalia\xE7\xE3o \xE9 importante para que outras pessoas que precisam de profissionais s\xE9rios nos encontrem."
  }, "Nos avalie no Google tamb\xE9m"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Avaliar"))));
}
const EQUIPE = [['Dr. Edson Alexandre', 'Advogado Sócio', 'edson-alexandre'], ['Dra. Amanda Pessoa', 'Advogada Sócia', 'amanda-pessoa'], ['Emanoela Felício', 'Recuperação de crédito', 'emanoela-felicio'], ['Dra. Sarah Holanda', 'Advogada', 'sarah-holanda'], ['Dr. Leonor Soares', 'Advogado', 'leonor-soares'], ['Dr. Paulo Roberto', 'Advogado', 'paulo-roberto']];
function Equipe() {
  const paras = ['Nosso diferencial é a prestação de um atendimento personalizado.', 'Esse conceito, onde a advocacia é vista como um trabalho artesanal, aumenta drasticamente as chances de êxito nas causas que assumimos, pois conseguimos atender cirurgicamente as necessidades de cada cliente, prestando uma assessoria jurídica altamente eficaz.', 'Nosso maior objetivo é resguardar nossos clientes de todo e qualquer prejuízo financeiro, físico e moral.', 'Com muita ética e competência, ao longo de mais de 14 anos de experiência no mundo jurídico, temos o prazer de carregar em nosso histórico mais de 95% de causas ganhas na justiça.'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...NAVY,
      padding: '0 0 var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-6)',
      maxWidth: 760,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    size: "sm"
  }, "Ainda tem d\xFAvidas se devemos assumir o seu caso?"), paras.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      font: 'var(--fw-light) var(--fs-body-sm)/var(--lh-body) var(--font-sans)',
      color: 'var(--text-on-inverse-muted)'
    }
  }, p)), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "Quero ser atendido por um especialista")), /*#__PURE__*/React.createElement(SectionTitle, {
    size: "sm"
  }, "Conhe\xE7a nossa equipe"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, EQUIPE.map(([n, r, f]) => /*#__PURE__*/React.createElement(TeamCard, {
    key: n,
    name: n,
    role: r,
    photo: '../../assets/team/' + f + '.png'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, ['Atendimento Personalizado.', 'Profissionalismo e Dedicação.', 'Equipe altamente experiente e preparada.'].map(t => /*#__PURE__*/React.createElement(Checkbox, {
    key: t,
    checked: true,
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--stone-0)'
      }
    }, t),
    onChange: () => {}
  })))));
}
function Formulario({
  onSubmit,
  enviado
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...LIGHT,
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      maxWidth: 860,
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--fw-semibold) var(--fs-h1)/1.3 var(--font-sans)',
      color: 'var(--navy-900)'
    }
  }, "Preencha o formul\xE1rio abaixo com as informa\xE7\xF5es solicitadas"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) var(--fs-body-sm)/var(--lh-body) var(--font-sans)',
      color: 'var(--stone-600)'
    }
  }, "Nossa equipe entrar\xE1 em contato o mais breve poss\xEDvel!")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit();
    },
    style: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, {
    required: true
  }, "Nome e Sobrenome"), /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, {
    required: true
  }, "Telefone"), /*#__PURE__*/React.createElement(Input, {
    type: "tel",
    placeholder: "(61) 00000-0000"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(FieldLabel, {
    required: true
  }, "E-mail"), /*#__PURE__*/React.createElement(Input, {
    type: "email"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(FieldLabel, null, "Mensagem"), /*#__PURE__*/React.createElement(Textarea, {
    rows: 4
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    block: true,
    style: {
      maxWidth: 420
    }
  }, enviado ? 'Mensagem enviada' : 'Enviar'), enviado && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) var(--fs-caption)/1.5 var(--font-sans)',
      color: 'var(--green-600)'
    }
  }, "Recebemos a sua mensagem. Entraremos em contato em breve."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      color: 'var(--navy-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 20
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "facebook",
    size: 20
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 20
  }))))));
}
function Visita() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...NAVY,
      padding: 'var(--section-y-tight) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-6)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    size: "sm",
    sub: "Teremos o prazer em te receber para tomarmos um caf\xE9!"
  }, "Venha nos fazer uma visita"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconEnd: "message-circle"
  }, "Fale conosco no WhatsApp")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-950)',
      paddingTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 'var(--space-16)',
      alignItems: 'center',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    height: 104,
    base: "../../assets/"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--border-inverse)',
      paddingLeft: 'var(--space-10)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ea-eyebrow",
    style: {
      color: 'var(--stone-0)'
    }
  }, "Contatos:"), [['phone', '(61) 3021-8539'], ['mail', 'edson.alexandre.adv@gmail.com'], ['map-pin', 'Rua Copaíba, Lote 1, Torre B, Sala 1910 — DF Century Plaza, Águas Claras/DF'], ['clock', 'Horários de atendimento: segunda a sexta de 09h às 17h']].map(([ic, tx]) => /*#__PURE__*/React.createElement("p", {
    key: tx,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      font: 'var(--fw-light) var(--fs-body-sm)/1.7 var(--font-sans)',
      color: 'var(--text-on-inverse-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--navy-200)',
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 15
  })), tx)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'flex',
      gap: 'var(--space-8)',
      justifyContent: 'center',
      padding: 'var(--space-5) var(--layout-gutter)'
    }
  }, ['© 2026 por Edson Alexandre Advogados.', 'Política de privacidade', 'Política de cookies'].map(t => /*#__PURE__*/React.createElement("p", {
    key: t,
    style: {
      font: 'var(--fw-light) var(--fs-micro)/1.5 var(--font-sans)',
      color: 'rgba(255,255,255,.5)'
    }
  }, t)))));
}
Object.assign(window, {
  TopNav,
  Hero,
  Areas,
  FaixaOnline,
  Assessoria,
  Avaliacoes,
  Equipe,
  Formulario,
  Visita,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site_institucional/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PracticeCard = __ds_scope.PracticeCard;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.TeamCard = __ds_scope.TeamCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.SortHeader = __ds_scope.SortHeader;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FieldLabel = __ds_scope.FieldLabel;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

__ds_ns.TopBarSearch = __ds_scope.TopBarSearch;

})();
