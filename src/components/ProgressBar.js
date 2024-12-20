import { useQuiz } from "../contexts/QuizContext";

function ProgressBar() {
  const { score, index, maxScore, answer, numQuestions } = useQuiz();

  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        {score} / <strong>{maxScore}</strong>
      </p>
    </header>
  );
}

export default ProgressBar;
