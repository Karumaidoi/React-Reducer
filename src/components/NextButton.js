import { useQuiz } from "../context/QuizContext";

function NextButton() {
  const { dispatch, answer, index } = useQuiz();
  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        index >= 14
          ? dispatch({ type: "finished" })
          : dispatch({ type: "nextQuestion" })
      }
    >
      {index >= 14 ? "Finish" : "Next"}
    </button>
  );
}

export default NextButton;
