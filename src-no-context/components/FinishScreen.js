function FinishScreen({ score, maxScore, highscore, dispatch }) {
  const percentage = (score / maxScore) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 50 && percentage < 80) emoji = "🥉";
  if (percentage >= 0 && percentage < 50) emoji = "🫤";
  if (percentage === 0) emoji = "🫨";

  return (
    <>
      <div className="result">
        <span>{emoji}</span>You Scored <strong>{score}</strong> out of{" "}
        {maxScore} ({Math.ceil(percentage)}%)
      </div>
      <p className="highscore">Highscore: {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}>
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
