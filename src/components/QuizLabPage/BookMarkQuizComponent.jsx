import { useEffect } from "react";
import useIsBrightModeStore from "../../store/isBrightModeStore";
import MarkedQuizComponent from "../SolveQuizPage/MarkedQuizComponent";
import Commentary from "../SolveQuizPage/Commentary";
import NoteTitleComponent from "../SolveQuizPage/NoteTitleComponent";

const BookMarkQuizComponent = ({
  bookmarkQuizByNote = { bookmarkedQuizzes: [], title: "" },
}) => {
  const { setIsBrightMode } = useIsBrightModeStore();
  console.log(bookmarkQuizByNote);
  useEffect(() => {
    setIsBrightMode(true);
  }, []);
  console.log(bookmarkQuizByNote);
  return (
    <>
      <div className="flex justify-center w-full h-auto bg-neutralwhite">
        <div className="flex flex-col mt-10 w-[48.75rem] gap-2">
          <div className="flex items-center gap-6">
            <div className="text-xl font-semibold text-neutralBlack">
              북마크 퀴즈
            </div>
            <div className="text-sm font-semibold text-gray_400">
              {/* 총 {bookmarkQuizByNote.bookmarkedQuizzes.length}개 */}
            </div>
          </div>
          <div className="text-base text-gray_400 text-medium">
            북마크에 저장된 퀴즈를 확인할 수 있어요
          </div>
          <NoteTitleComponent noteTitle={bookmarkQuizByNote.title} />
          {bookmarkQuizByNote.bookmarkedQuizzes?.map((quiz, index) => (
            <div className="flex flex-col gap-2">
              <MarkedQuizComponent
                key={index}
                quizNum={index + 1}
                question={quiz.question}
                multipleChoice={quiz.choices}
                selectedAnswer={quiz.userAnswer}
                correctAnswer={quiz.correctAnswer}
                isCorrect={quiz.userAnswer === quiz.correctAnswer}
                quizId={quiz.quizId}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default BookMarkQuizComponent;
