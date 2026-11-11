import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './AnswerButton.css';

export type AnswerState = 'default' | 'selected' | 'correct' | 'incorrect';

export interface AnswerButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Figma "State". The parent decides the state: pick → `selected`, after reveal → `correct` / `incorrect`. */
  state?: AnswerState;
  /** Answer text. */
  children: ReactNode;
}

const DotIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill="currentColor" />
  </svg>
);

const CheckIcon = () => (
  <svg width="15" height="11" viewBox="0 0 15 11" fill="none" aria-hidden="true">
    <path d="m1 5.5 4 4L14 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloseIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="m1 1 8 8M9 1 1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ICONS = { selected: DotIcon, correct: CheckIcon, incorrect: CloseIcon } as const;
const RESULT_LABEL = { correct: 'correct', incorrect: 'incorrect' } as const;

/** One answer option in a quiz question. */
export function AnswerButton({ state = 'default', className, type = 'button', children, ...rest }: AnswerButtonProps) {
  const classes = ['pv-answer', `pv-answer--${state}`, className].filter(Boolean).join(' ');
  const Icon = state === 'default' ? null : ICONS[state];

  return (
    <button
      {...rest}
      type={type}
      className={classes}
      // Selected is a toggle; correct / incorrect are results, so they carry no pressed state.
      aria-pressed={state === 'default' ? false : state === 'selected' ? true : undefined}
    >
      <span className="pv-answer__text">{children}</span>
      {state === 'correct' || state === 'incorrect' ? (
        <span className="pv-answer__sr">, {RESULT_LABEL[state]}</span>
      ) : null}
      {Icon && (
        <span className="pv-answer__icon" aria-hidden="true">
          <Icon />
        </span>
      )}
    </button>
  );
}
