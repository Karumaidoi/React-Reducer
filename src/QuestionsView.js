import Options from "./components/Options";
import { useQuiz } from "./context/QuizContext";

function QuestionsView() {
  const { question, dispatch, answer } = useQuiz();

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default QuestionsView;
