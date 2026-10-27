import checkTiny from '../../../assets/icons/check-tiny.svg';
import closeSmall from '../../../assets/icons/close-small.svg';
import { Pill } from '../Pill/Pill';
import './QuizTopBar.css';

export interface ProgressSegmentsProps {
  /** Number of filled segments */
  completed: number;
  total: number;
}

export const ProgressSegments = ({ completed, total }: ProgressSegmentsProps) => (
  <div className="pv-progress-segments" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={completed}>
    {Array.from({ length: total }, (_, i) => (
      <span key={i} className={i < completed ? 'is-filled' : undefined} />
    ))}
  </div>
);

export interface QuizTopBarProps {
  /** 1-based question number; questions before it count as filled */
  question: number;
  total: number;
  /** Countdown text, e.g. "0:11". Ignored when `locked`. */
  timeLeft?: string;
  /** Answer locked in — swaps the timer for a success pill */
  locked?: boolean;
  onClose?: () => void;
}

export const QuizTopBar = ({ question, total, timeLeft = '0:15', locked = false, onClose }: QuizTopBarProps) => {
  const expired = timeLeft === '0:00';
  return (
    <div className="pv-quiz-top-bar">
      <div className="pv-quiz-top-bar__row">
        <button type="button" className="pv-quiz-top-bar__close" aria-label="Leave quiz" onClick={onClose}>
          <img src={closeSmall} alt="" width={18} height={18} />
        </button>
        <ProgressSegments completed={question} total={total} />
        {locked ? (
          <Pill label="Locked in" tone="success" outlined icon={checkTiny} />
        ) : (
          <span className={`pv-quiz-top-bar__timer${expired ? ' is-expired' : ''}`} aria-label={`${timeLeft} left`}>
            {timeLeft}
          </span>
        )}
      </div>
      <p className="pv-quiz-top-bar__count">
        Question {question} of {total}
      </p>
    </div>
  );
};
