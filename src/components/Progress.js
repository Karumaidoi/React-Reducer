function Progress({ index, numQuestions, points, totalPoints, answer }) {
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
