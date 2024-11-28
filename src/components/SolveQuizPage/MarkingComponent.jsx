import { useLocation, useNavigate, useParams } from "react-router-dom";
import MarkedResultComponent from "./MarkedResultComponent";
import QuizComponent from "./QuizComponent";
import Commentary from "./Commentary";
import QuizButtonComponent from "./Button/QuizButtonComponent";
import MarkedQuizComponent from "./MarkedQuizComponent";
import { getResolveQuiz } from "../../services/api/solveQuiz";

const MarkingComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const resultData = location.state?.resultData;
  const { id, quizSetId } = useParams();

  const handleReSolveQuiz = async () => {
    const resolveQuizData = await getResolveQuiz(quizSetId);
    console.log(resolveQuizData);
    navigate(`/resolvequiz/quizset/${id}/resolving/${quizSetId}`, {
      state: { resultData: resolveQuizData },
    });
  };

  return (
    <>
      <div className="flex justify-center w-full h-auto bg-neutralwhite">
        <div className="flex flex-col mt-10 w-[48.75rem] gap-2">
          <div className="flex items-center gap-6">
            <div className="text-xl font-semibold text-neutralBlack">
              채점 결과
            </div>
            <div className="text-sm font-semibold text-gray_400">
              총 {resultData.quizzes.length}개
            </div>
          </div>
          <div className="text-base text-gray_400 text-medium">
            틀린 문제를 북마크에 저장하고 오답을 다시 풀어보세요!{" "}
          </div>
          <div className="mt-2 mb-3">
            <MarkedResultComponent resultData={resultData} />
          </div>
          <div className="flex flex-col gap-6">
            {resultData.quizzes.map((quiz, index) => (
              <div className="flex flex-col gap-2">
                <MarkedQuizComponent
                  key={index}
                  quizNum={index + 1}
                  difficultyLevel={
                    quiz.difficulty === "easy"
                      ? 1
                      : quiz.difficulty === "medium"
                      ? 2
                      : 3
                  }
                  question={quiz.question}
                  multipleChoice={quiz.choices}
                  selectedAnswer={quiz.selectedAnswer}
                  correctAnswer={quiz.correctAnswer}
                  explanation={quiz.explanation}
                  isCorrect={quiz.isCorrect}
                />

                <Commentary
                  quizNum={index + 1}
                  correctNum={quiz.correctAnswer}
                  correctAnswer={quiz.choices[quiz.correctAnswer]}
                  explanation={quiz.explanation}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center my-16">
            <QuizButtonComponent
              onClick={handleReSolveQuiz}
              text="오답 다시 풀기"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default MarkingComponent;
