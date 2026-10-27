import clockGold from '../../../assets/icons/clock-gold.svg';
import { AnswerButton, type AnswerState } from '../../components/AnswerButton/AnswerButton';
import { Dialog } from '../../components/Dialog/Dialog';
import { IconBadge } from '../../components/IconBadge/IconBadge';
import { Pill } from '../../components/Pill/Pill';
import { QuizTopBar } from '../../components/QuizTopBar/QuizTopBar';
import './QuizQuestion.css';

export type QuizPhase = 'answering' | 'feedback' | 'timeout';

export interface QuizQuestionProps {
  question: string;
  answers: string[];
  questionNumber: number;
  totalQuestions: number;
  /** answering: pick an option · feedback: result after lock-in · timeout: time ran out */
  phase?: QuizPhase;
  timeLeft?: string;
  /** feedback: the option the player picked */
  selected?: string;
  /** feedback: the right option */
  correct?: string;
  /** feedback: points awarded for a correct answer */
  points?: number;
  onAnswer?: (answer: string) => void;
  onClose?: () => void;
}

const stateFor = (answer: string, selected?: string, correct?: string): AnswerState => {
  if (answer === correct) return 'correct';
  if (answer === selected) return 'incorrect';
  return 'dimmed';
};

export const QuizQuestion = ({
  question,
  answers,
  questionNumber,
  totalQuestions,
  phase = 'answering',
  timeLeft = '0:11',
  selected,
  correct,
  points = 20,
  onAnswer,
  onClose,
}: QuizQuestionProps) => {
  const isCorrect = selected === correct;

  if (phase === 'timeout') {
    return (
      <div className="pv-screen">
        <div className="pv-quiz__faded">
          <QuizTopBar question={questionNumber} total={totalQuestions} timeLeft="0:00" onClose={onClose} />
          <main className="pv-quiz__timeout-body">
            <h1 className="pv-quiz__question">{question}</h1>
            <div className="pv-quiz__answers">
              {answers.map((a) => (
                <AnswerButton key={a} label={a} size="lg" state="missed" />
              ))}
            </div>
          </main>
        </div>
        <div className="pv-quiz__overlay">
          <Dialog
            size="sm"
            icon={<IconBadge icon={clockGold} iconSize={24} size={52} />}
            title="Time’s up!"
            description="No answer selected — moving to the next question."
          />
        </div>
      </div>
    );
  }

  return (
    <div className="pv-screen">
      <QuizTopBar
        question={questionNumber}
        total={totalQuestions}
        timeLeft={timeLeft}
        locked={phase === 'feedback'}
        onClose={onClose}
      />
      <main className="pv-quiz__body">
        <h1 className="pv-quiz__question">{question}</h1>
        {phase === 'answering' && <p className="pv-quiz__hint">Tap an answer to lock it in</p>}
        <div className="pv-quiz__answers">
          {answers.map((a) => (
            <AnswerButton
              key={a}
              label={a}
              size="lg"
              state={phase === 'feedback' ? stateFor(a, selected, correct) : 'default'}
              onClick={() => onAnswer?.(a)}
            />
          ))}
        </div>
        {phase === 'feedback' && (
          <div className="pv-quiz__result">
            {isCorrect
              ? <Pill label={`Correct! +${points} pts`} tone="success" size="lg" />
              : <Pill label="Not quite · +0 pts" tone="danger" size="lg" />}
          </div>
        )}
        <p className="pv-quiz__footnote">
          {phase === 'feedback'
            ? questionNumber < totalQuestions ? `Advancing to question ${questionNumber + 1}…` : 'Calculating your results…'
            : '15 seconds per question · one attempt'}
        </p>
      </main>
    </div>
  );
};
