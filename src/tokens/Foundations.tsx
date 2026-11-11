import type { CSSProperties, ReactNode } from 'react';
import tokens from './tokens.json';

// Docs-only helpers that render tokens.json. Every colour/size below is read through the generated
// CSS variables (tokens.css), so the page shows exactly what components get.

type Dimension = { value: number; unit: string };
type Token = { $type: string; $value: string | number | Dimension };

const flat: { path: string; token: Token }[] = [];
const walk = (node: Record<string, unknown>, path: string[]) => {
  for (const [key, child] of Object.entries(node)) {
    if (key.startsWith('$') || typeof child !== 'object' || child === null) continue;
    if ('$value' in child) flat.push({ path: [...path, key].join('.'), token: child as Token });
    else walk(child as Record<string, unknown>, [...path, key]);
  }
};
walk(tokens as Record<string, unknown>, []);
const byPath = new Map(flat.map((t) => [t.path, t.token]));

// Same rule as scripts/build-tokens.mjs: camelCase is split (BottomNavBar → bottom-nav-bar).
const cssVar = (path: string) =>
  `--${path.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/[._\s/]+/g, '-').toLowerCase()}`;
const aliasOf = (token: Token) =>
  typeof token.$value === 'string' && token.$value.startsWith('{') ? token.$value.slice(1, -1) : null;
const resolve = (token: Token): Token => {
  const alias = aliasOf(token);
  return alias ? resolve(byPath.get(alias)!) : token;
};
const display = (token: Token) => {
  const v = resolve(token).$value;
  return typeof v === 'object' ? `${v.value}${v.unit}` : String(v);
};

const panel: CSSProperties = {
  background: 'var(--surface-page)',
  color: 'var(--content-emphasis)',
  borderRadius: 'var(--radius-16)',
  padding: 'var(--spacing-24)',
  fontFamily: 'var(--font-family-body), system-ui, sans-serif',
  fontSize: 'var(--font-size-13)',
  margin: '16px 0',
};
const mono: CSSProperties = { fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 'var(--font-size-11)' };
const muted: CSSProperties = { color: 'var(--content-subtle)' };

const Panel = ({ children }: { children: ReactNode }) => <div style={panel}>{children}</div>;

const Swatch = ({ varName, size = 56 }: { varName: string; size?: number }) => (
  <span
    style={{
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      borderRadius: 'var(--radius-12)',
      border: '1px solid var(--color-gray-650)',
      // Checkerboard so semi-transparent tokens stay readable.
      backgroundImage: `linear-gradient(var(${varName}), var(${varName})), conic-gradient(var(--color-gray-700) 25%, var(--color-gray-800) 0 50%, var(--color-gray-700) 0 75%, var(--color-gray-800) 0)`,
      backgroundSize: '100% 100%, 12px 12px',
    }}
  />
);

/** Primitive colour ramps: color.<hue>.<step> */
export const ColorRamps = () => {
  const hues = Object.keys((tokens as { color: Record<string, unknown> }).color);
  return (
    <Panel>
      {hues.map((hue) => {
        const steps = flat.filter((t) => t.path.startsWith(`color.${hue}.`));
        return (
          <section key={hue} style={{ marginBottom: 'var(--spacing-24)' }}>
            <h4 style={{ margin: '0 0 var(--spacing-12)', textTransform: 'capitalize' }}>{hue}</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-16)' }}>
              {steps.map(({ path, token }) => (
                <div key={path} style={{ width: 92, overflowWrap: 'anywhere' }}>
                  <Swatch varName={cssVar(path)} size={92} />
                  <div style={{ marginTop: 'var(--spacing-8)', fontWeight: 'var(--font-weight-semibold)' }}>
                    {path.split('.').slice(2).join('.')}
                  </div>
                  <div style={{ ...mono, ...muted }}>{display(token)}</div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </Panel>
  );
};

const SEMANTIC_GROUPS = ['action', 'content', 'surface', 'border', 'feedback', 'currency'];
const COMPONENT_GROUPS = ['buttons', 'chips', 'inputs', 'sidebar', 'checkboxes', 'coins', 'app-bars', 'BottomNavBar', 'Alert'];

/** Token groups with the alias each token points to. */
const TokenGroups = ({ groups }: { groups: string[] }) => (
  <Panel>
    {groups.map((group) => {
      const rows = flat.filter((t) => t.path.startsWith(`${group}.`));
      if (!rows.length) return null;
      return (
        <details key={group} open={rows.length <= 12} style={{ marginBottom: 'var(--spacing-16)' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 'var(--font-weight-bold)', textTransform: 'capitalize' }}>
            {group} <span style={{ ...muted, fontWeight: 'var(--font-weight-regular)' }}>· {rows.length}</span>
          </summary>
          <div style={{ marginTop: 'var(--spacing-12)', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 'var(--spacing-12)' }}>
            {rows.map(({ path, token }) => (
              <div key={path} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-12)' }}>
                <Swatch varName={cssVar(path)} size={36} />
                <div style={{ minWidth: 0 }}>
                  <div style={mono}>{cssVar(path)}</div>
                  <div style={{ ...mono, ...muted }}>
                    {aliasOf(token) ? `→ ${cssVar(aliasOf(token)!)} · ` : ''}
                    {display(token)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </details>
      );
    })}
  </Panel>
);

/** Level 2: semantic tokens (aliases of primitives). */
export const SemanticColors = () => <TokenGroups groups={SEMANTIC_GROUPS} />;

/** Level 3: component tokens (aliases of semantic tokens). */
export const ComponentColors = () => <TokenGroups groups={COMPONENT_GROUPS} />;

/** Spacing + radius scales. */
export const Scales = () => (
  <Panel>
    <h4 style={{ margin: '0 0 var(--spacing-12)' }}>Spacing</h4>
    {flat.filter((t) => t.path.startsWith('spacing.')).map(({ path, token }) => (
      <div key={path} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-16)', marginBottom: 'var(--spacing-8)' }}>
        <span style={{ ...mono, width: 150 }}>{cssVar(path)}</span>
        <span style={{ ...mono, ...muted, width: 48 }}>{display(token)}</span>
        <span style={{ height: 12, width: `var(${cssVar(path)})`, background: 'var(--color-purple-450)', borderRadius: 2 }} />
      </div>
    ))}
    <h4 style={{ margin: 'var(--spacing-24) 0 var(--spacing-12)' }}>Radius</h4>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-16)' }}>
      {flat.filter((t) => t.path.startsWith('radius.')).map(({ path, token }) => (
        <div key={path} style={{ width: 84 }}>
          <div style={{ width: 84, height: 84, background: 'var(--surface-panel)', border: '2px solid var(--color-purple-450)', borderRadius: `var(${cssVar(path)})` }} />
          <div style={{ ...mono, marginTop: 'var(--spacing-8)' }}>{path.split('.')[1]}</div>
          <div style={{ ...mono, ...muted }}>{display(token)}</div>
        </div>
      ))}
    </div>
  </Panel>
);

/** Font families, weights, sizes, letter-spacing and line-height. */
export const Typography = () => (
  <Panel>
    {(['display', 'body', 'inter'] as const).map((f) => (
      <div key={f} style={{ marginBottom: 'var(--spacing-16)' }}>
        <div style={{ ...mono, ...muted }}>
          --font-family-{f} · {display(byPath.get(`font.family.${f}`)!)}
        </div>
        <div style={{ fontFamily: `var(--font-family-${f}), sans-serif`, fontSize: 'var(--font-size-34)', fontWeight: 'var(--font-weight-bold)' }}>
          Friday Night Trivia Blitz
        </div>
      </div>
    ))}
    <h4 style={{ margin: 'var(--spacing-24) 0 var(--spacing-12)' }}>Weights</h4>
    <div style={{ display: 'flex', gap: 'var(--spacing-24)' }}>
      {['regular', 'semibold', 'bold'].map((w) => (
        <span key={w} style={{ fontSize: 'var(--font-size-20)', fontWeight: `var(--font-weight-${w})` as CSSProperties['fontWeight'] }}>
          {w} <span style={{ ...mono, ...muted }}>{display(byPath.get(`font.weight.${w}`)!)}</span>
        </span>
      ))}
    </div>
    <h4 style={{ margin: 'var(--spacing-24) 0 var(--spacing-12)' }}>Sizes</h4>
    {flat.filter((t) => t.path.startsWith('font.size.')).map(({ path, token }) => (
      <div key={path} style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--spacing-16)', marginBottom: 'var(--spacing-4)' }}>
        <span style={{ ...mono, ...muted, width: 190 }}>{cssVar(path)}</span>
        <span style={{ ...mono, ...muted, width: 56 }}>{display(token)}</span>
        <span style={{ fontSize: `var(${cssVar(path)})` }}>5 questions · 15s each</span>
      </div>
    ))}
    <h4 style={{ margin: 'var(--spacing-24) 0 var(--spacing-12)' }}>Letter-spacing &amp; line-height</h4>
    {flat.filter((t) => t.path.startsWith('letter-spacing.') || t.path.startsWith('line-height.')).map(({ path, token }) => (
      <div key={path} style={{ display: 'flex', gap: 'var(--spacing-16)', marginBottom: 'var(--spacing-4)' }}>
        <span style={{ ...mono, ...muted, width: 240 }}>{cssVar(path)}</span>
        <span style={mono}>{display(token)}</span>
      </div>
    ))}
  </Panel>
);
