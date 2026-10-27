import type { ReactNode } from 'react'

export interface StateGridProps {
  states: { label: string; node: ReactNode }[]
  /** Lay states out in a row instead of a column */
  row?: boolean
}

/** Storybook-only: labelled list of a component's states, styled like Figma's "States" reference frame. */
export const StateGrid = ({ states, row = false }: StateGridProps) => (
  <div style={{ display: 'flex', flexDirection: row ? 'row' : 'column', flexWrap: 'wrap', gap: 18, alignItems: row ? 'flex-end' : 'stretch' }}>
    {states.map(({ label, node }) => (
      <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
        <span style={{ color: 'var(--text-muted)', fontSize: 10, fontWeight: 700, letterSpacing: 0.4, textTransform: 'uppercase' }}>
          {label}
        </span>
        <div style={{ alignSelf: 'stretch' }}>{node}</div>
      </div>
    ))}
  </div>
)
