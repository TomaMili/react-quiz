function ProgressBar({ numQuestions, score, index, maxScore, answer }) {
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
