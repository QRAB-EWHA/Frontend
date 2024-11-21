import { useState } from "react";
import QuizButton from "../QuizLabPage/Button/QuizButton";
import { useNavigate } from "react-router-dom";
import useIsBrightModeStore from "../../store/isBrightModeStore";

const RecentQuizContainer = ({
  noteIcon,
  noteId,
  noteName,
  totalQuizNum,
  noteContent,
  quizsetId,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { setIsBrightMode } = useIsBrightModeStore();

  const handleSolvingQuiz = () => {
    navigate(`/solvequiz/quizset/${noteId}/solving/${quizsetId}`);
    setIsBrightMode(true);
  };
  return (
    <>
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
                  <div className="flex flex-col justify-center">
                    <div className={`mt-[16px] ml-[20px]`}>
                      <div className=" flex leading-6 w-[196px] h-[72px] text-wrap font-semibold text-neutralwhite text-[20px]">
                        {noteName}
                      </div>
                    </div>
                    <div className="flex justify-center w-[300px] mt-4">
                      <QuizButton
                        buttonText="퀴즈 풀기"
                        noteId={noteId}
                        solving={true}
                        quizsetId={quizsetId}
                        handleQuizButton={handleSolvingQuiz}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`flex-1 ${isHovered ? "bg-gray_500" : "bg-[#F4F6FA]"} `}
          >
            {!isHovered && (
              <div className="ml-5">
                <div className=" mt-3 w-[16.375rem] leading-4 text-wrap font-medium text-gray_400 text-[14px] line-clamp-2">
                  {noteContent}
                </div>
                <div className="flex gap-[8px] mt-[1.125rem]">
                  <div className="h-[1.375rem] px-2 py-1 rounded-[0.25rem] bg-secondary_skyblue text-xs font-medium text-primary_blue">
                    총 {totalQuizNum}개 문항
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default RecentQuizContainer;
