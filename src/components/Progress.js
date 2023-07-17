import { useQuiz } from "../context/QuizContext";

function Progress() {
  const {
    index,
    numQuestions = 15,
    points,
    maxPossiblePoints: totalPoints,
    answer,
  } = useQuiz();
  return (
    <header>
      <div className="progress">
        <progress max={numQuestions} value={index + Number(answer !== null)} />
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
        <p>
          Question <strong>{points}</strong> / {totalPoints}
        </p>
      </div>
    </header>
  );
}

export default Progress;
