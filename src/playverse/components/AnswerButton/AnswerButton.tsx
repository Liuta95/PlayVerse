import correctIcon from '../../../assets/icons/answer-correct.svg';
import correctIconLg from '../../../assets/icons/answer-correct-lg.svg';
import incorrectIcon from '../../../assets/icons/answer-incorrect.svg';
import timeoutIcon from '../../../assets/icons/answer-timeout.svg';
import checkSmall from '../../../assets/icons/check-small.svg';
import './AnswerButton.css';

/**
 * default → selected → correct | incorrect | timeout.
 * `dimmed` is an unchosen option after the answer locks; `missed` is every option once time runs out.
 */
export type AnswerState = 'default' | 'selected' | 'correct' | 'incorrect' | 'timeout' | 'dimmed' | 'missed';

export interface AnswerButtonProps {
  label: string;
  state?: AnswerState;
  /** md is the reference size; lg is used on the live quiz screens */
  size?: 'md' | 'lg';
  /** Shown under an incorrect answer, e.g. "Mars" */
  correctAnswer?: string;
  onClick?: () => void;
}

export const AnswerButton = ({ label, state = 'default', size = 'md', correctAnswer, onClick }: AnswerButtonProps) => {
  const text = state === 'timeout' ? 'Not answered in time' : label;
  return (
    <div className="pv-answer">
      <button
        type="button"
        className={`pv-answer__button pv-answer__button--${state} pv-answer__button--${size}`}
        disabled={state !== 'default'}
        aria-pressed={state === 'selected'}
        onClick={onClick}
      >
        <span>{text}</span>
        {state === 'selected' && <span className="pv-answer__dot" aria-hidden />}
        {state === 'correct' &&
          (size === 'lg'
            ? <img src={correctIconLg} alt="Correct" width={18} height={18} />
            : <img src={correctIcon} alt="Correct" width={17} height={17} />)}
        {state === 'incorrect' && <img src={incorrectIcon} alt="Incorrect" width={17} height={17} />}
        {state === 'timeout' && <img src={timeoutIcon} alt="" width={16} height={16} />}
      </button>
      {state === 'incorrect' && correctAnswer && (
        <p className="pv-answer__hint">
          <img src={checkSmall} alt="" width={13} height={13} />
          Correct answer: {correctAnswer}
        </p>
      )}
    </div>
  );
};
