function FinishScreen({ points, maxPoints,highScore,dispatch }) {
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage < 100 && percentage > 80) emoji = "🥈";
  if ( percentage < 80) emoji = "🥉";
  if ( percentage < 50) emoji = "❌";
  return (
    <>
    <p className="result">
      You scored <strong>{points}</strong> out of {maxPoints} (
      {Math.ceil(percentage)}%) {emoji}
    </p>
    <p className="highscore">(HighScore: {highScore} points)</p>
    <button className="btn btn-ui" onClick={()=>dispatch({type:'restart'})}>Restart Quiz</button>
    </>
  );
}

export default FinishScreen;
