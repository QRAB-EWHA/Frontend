import { useEffect, useState } from "react";
import nextButton from "../../assets/storenotepage/next_button.svg";
import CategoryTag from "../QuizLabPage/CategoryTag";
import QuizButton from "../QuizLabPage/Button/QuizButton";
import { useNavigate } from "react-router-dom";
import useIsNoteSummaryModalStore from "../../store/isNoteSummaryModalStore";
import { getNoteSummary } from "../../services/api/noteStore";
import useIsCreateQuizModalStore from "../../store/isCreateQuizModalStore";
import useNoteTitleStore from "../../store/useNoteTitleStore";
import useNoteIdStore from "../../store/useNoteIdStore";
import useIsBrightModeStore from "../../store/isBrightModeStore";
import useGeneratedQuizNumStore from "../../store/generatedQuizNum";
const StoredNote = ({
  noteName,
  noteId,
  noteContent,
  noteIcon,
  parentCategory,
  childCategory,
  OriginFileOrUrl,
  quizGenerationCount,
  quizSolvePage = false,
  page,
  isAllQuizSet = false,
  bookmark = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { setIsNoteData, setIsNoteSummaryModal } = useIsNoteSummaryModalStore();
  const { setIsCreateQuizModal } = useIsCreateQuizModalStore();
  const { setNoteTitle } = useNoteTitleStore();
  const { setCurrentNoteId } = useNoteIdStore();
  const { setGeneratedQuizNum } = useGeneratedQuizNumStore();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(quizGenerationCount);
  }, []);

  const handleNoteSummary = async () => {
    console.log(noteId);
    const res = await getNoteSummary(noteId);
    console.log(res);
    if (res) {
      setIsNoteSummaryModal(true);
      setIsNoteData(res);
    } else {
      console.log("노트 요약본 조회 실패");
    }
  };

  const handleShowQuizSet = () => {
    if (isAllQuizSet) {
      navigate(`/quizlab/quizset/${noteId}`, {
        state: { isAllQuizSet: isAllQuizSet },
      });
    } else {
      setNoteTitle(noteName);
      navigate(`/solvequiz/quizset/${noteId}`);
    }
  };

  const handleCreateQuiz = () => {
    setGeneratedQuizNum(quizGenerationCount);
    setNoteTitle(noteName);
    setCurrentNoteId(noteId);
    setIsCreateQuizModal(true);
  };

  const handleBookmark = () => {
    navigate(`/quizlab/bookmark/${noteId}`);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="overflow-hidden rounded-[16px] border-[1px] border-gray_100 w-[300px] h-[200px] relative"
    >
      {isHovered && page == "QuizLab" ? (
        <div className="flex absolute w-[300px] h-[200px] rounded-[16px] transparent_black top-0 left-0 z-10">
          <div className="flex flex-col">
            <div className="mt-[16px] ml-[20px]">
              <div className=" flex items-center leading-6 w-[196px] h-[72px] text-wrap font-semibold text-neutralwhite text-[20px]">
                {noteName.length > 25
                  ? `${noteName.slice(0, 25)}...`
                  : noteName}
              </div>
              <div className="flex gap-[8px] mt-[8px]">
                {!bookmark && !parentCategory ? (
                  <CategoryTag tagText={childCategory} />
                ) : (
                  !bookmark && (
                    <>
                      <CategoryTag tagText={parentCategory} />
                      <CategoryTag tagText={childCategory} />
                    </>
                  )
                )}
              </div>
            </div>
            <div className="ml-[88px] mt-[15px]">
              <QuizButton
                buttonText={
                  bookmark
                    ? "북마크 퀴즈 보기"
                    : quizSolvePage
                    ? "퀴즈 세트 보기"
                    : quizGenerationCount > 0
                    ? "퀴즈 재생성 하기"
                    : "퀴즈 생성하기"
                }
                handleQuizButton={
                  bookmark
                    ? handleBookmark
                    : quizSolvePage
                    ? handleShowQuizSet
                    : handleCreateQuiz
                }
                noteName={noteName}
                noteId={noteId}
                quizGenerationCount={quizGenerationCount}
                solveQuiz={quizSolvePage}
                isAllQuizSet={isAllQuizSet}
              />
            </div>
          </div>
        </div>
      ) : (
        isHovered && (
          <div className="flex items-center justify-center absolute w-[300px] h-[200px] rounded-[16px] transparent_black top-0 left-0 z-10">
            <div className="flex flex-col">
              <div className="relative flex justify-center items-center">
                <div
                  onClick={() => window.open(OriginFileOrUrl, "_blank")}
                  className="absolute top-[-36px] left-0 text-[12px] text-gray_200 underline decoration-1 cursor-pointer"
                >
                  원문 보기
                </div>
                <div className="flex items-center leading-6 w-[196px] h-[72px] text-wrap  font-semibold text-neutralwhite text-[20px]">
                  {noteName.length > 40
                    ? `${noteName.slice(0, 40)}...`
                    : noteName}
                </div>
                <img
                  className="cursor-pointer"
                  onClick={handleNoteSummary}
                  src={nextButton}
                />
              </div>
            </div>
          </div>
        )
      )}
      <div className="relative flex flex-col h-full">
        <div className="flex-1 bg-gray_500 relative">
          <div className="mt-[10px] absolute right-[-10px] ">
            <img src={noteIcon} />
          </div>
          {!isHovered && (
            <div className="flex items-center leading-6 ml-[20px] mt-[16px] w-[196px] h-[72px] text-wrap font-semibold text-neutralwhite text-[20px]">
              {noteName.length > 25 ? `${noteName.slice(0, 25)}...` : noteName}
            </div>
          )}
        </div>
        <div
          className={`flex-1 ${isHovered ? "bg-gray_500" : "bg-[#F4F6FA]"} `}
        >
          {!bookmark && !isHovered && (
            <>
              <div className="ml-5">
                <div className=" mt-3 w-[16.375rem] leading-4 text-wrap font-medium text-gray_400 text-[14px] line-clamp-2">
                  {noteContent}
                </div>
                <div className="flex gap-[8px] mt-[1.125rem]">
                  {!parentCategory ? (
                    <CategoryTag tagText={childCategory} />
                  ) : (
                    <>
                      <CategoryTag tagText={parentCategory} />
                      <CategoryTag tagText={childCategory} />
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default StoredNote;
