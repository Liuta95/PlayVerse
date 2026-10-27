import wifiOff from '../../../assets/icons/wifi-off.svg';
import { AnswerButton } from '../../components/AnswerButton/AnswerButton';
import { Dialog } from '../../components/Dialog/Dialog';
import { IconBadge } from '../../components/IconBadge/IconBadge';
import { ProgressSegments } from '../../components/QuizTopBar/QuizTopBar';
import { SecondaryButton } from '../../components/SecondaryButton/SecondaryButton';
import { TextButton } from '../../components/TextButton/TextButton';
import './ConnectionLost.css';

export interface ConnectionLostProps {
  question: string;
  /** The first few options, shown faded behind the dialog */
  answers: string[];
  questionNumber: number;
  totalQuestions: number;
  entryFee: number;
  onRetry?: () => void;
  onExit?: () => void;
}

export const ConnectionLost = ({ question, answers, questionNumber, totalQuestions, entryFee, onRetry, onExit }: ConnectionLostProps) => (
  <div className="pv-screen">
    <div className="pv-offline__behind" aria-hidden>
      <ProgressSegments completed={questionNumber - 1} total={totalQuestions} />
      <p className="pv-offline__question">{question}</p>
      <div className="pv-offline__answers">
        {answers.map((a) => (
          <AnswerButton key={a} label={a} size="lg" />
        ))}
      </div>
    </div>
    <div className="pv-offline__scrim" />
    <div className="pv-offline__center">
      <Dialog
        icon={<IconBadge icon={wifiOff} iconSize={26} size={56} tone="danger" />}
        title="Connection lost"
        description="Reconnecting… your progress and entry are protected."
      >
        <div className="pv-offline__dots" role="status" aria-label="Reconnecting">
          <span className="is-active" />
          <span />
          <span />
        </div>
        <p className="pv-offline__refund">
          If we can’t reconnect, your {entryFee}-coin entry will be refunded automatically.
        </p>
        <SecondaryButton label="Retry Now" fullWidth compact onClick={onRetry} />
        <div className="pv-offline__exit">
          <TextButton label="Exit tournament" size="sm" tone="muted" onClick={onExit} />
        </div>
      </Dialog>
    </div>
  </div>
);
