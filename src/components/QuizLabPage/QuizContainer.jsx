import { useState } from "react";
import ResultTag from "./ResultTag";
import QuizButton from "./Button/QuizButton";

const QuizContainer = ({
  noteName,
  noteId,
  totalQuizNum,
  noteIcon,
  majorityNum = 0,
  result,
  createdAt,
  quizsetId,
  solveQuiz = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
  };
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="overflow-hidden rounded-[16px] border-[1px] border-gray_100 w-[300px] h-[200px] relative"
    >
      <div className="relative flex flex-col h-full">
        <div className="flex-1 bg-gray_500 relative">
          <div className="mt-[10px] absolute right-[-10px] ">
            <img src={noteIcon} />
          </div>
          {!isHovered ? (
            <>
              <div className="flex items-center leading-6 ml-[20px] mt-[16px] w-[196px] h-[72px] text-wrap  font-semibold text-neutralwhite text-[20px]">
                {noteName}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center absolute w-[300px] h-[200px] rounded-[16px] transparent_black top-0 left-0 z-10">
              <div className="flex absolute w-[300px] h-[200px] rounded-[16px] transparent_black top-0 left-0 z-10">
                <div className="flex flex-col">
                  <div className={`mt-[16px] ml-[20px]`}>
                    <div className=" flex items-center leading-6 w-[196px] h-[72px] text-wrap font-semibold text-neutralwhite text-[20px]">
                      {noteName}
                    </div>
                    <div className="mt-[15px]">
                      <ResultTag
                        hover={true}
                        num={majorityNum}
                        solveQuiz={solveQuiz}
                      />
                    </div>
                    {!solveQuiz && (
                      <div className="flex gap-[12px] mt-4">
                        <QuizButton buttonText="오답 다시 풀기" />
                        <QuizButton buttonText="모든 퀴즈 보기" />
                      </div>
                    )}
                  </div>
                  {solveQuiz && (
                    <div className="flex justify-center w-[300px] mt-4">
                      <QuizButton
                        buttonText="퀴즈 풀기"
                        noteId={noteId}
                        solving={true}
                        quizsetId={quizsetId}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className={`flex-1 ${isHovered ? "bg-gray_500" : "bg-[#F4F6FA]"} `}
        >
          {!isHovered && (
            <div className="ml-[20px] mt-[12px] w-[262px] flex flex-col">
              <div className="text-[16px] font-semibold text-gray_400 ">
                총 {totalQuizNum}문제
              </div>
              <div className="text-[14px] font-medium text-gray_300">
                {solveQuiz
                  ? `생성 ${formatDate(createdAt)}`
                  : "생성 8/10 | 풀이 8/15"}
              </div>
              <div className="mt-[10px]">
                <ResultTag
                  result={result}
                  num={majorityNum}
                  solveQuiz={solveQuiz}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default QuizContainer;
