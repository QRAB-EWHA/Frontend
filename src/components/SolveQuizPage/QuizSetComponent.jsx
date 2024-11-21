import { useEffect, useState } from "react";
import { getUnsolvedQuiz } from "../../services/api/solveQuiz";
import useIsBrightModeStore from "../../store/isBrightModeStore";
import QuizContainer from "../QuizLabPage/QuizContainer";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import noteIcon2 from "../../assets/storenotepage/note_icon2.svg";
import { getQuizSetByNote } from "../../services/api/quizLab";

//퀴즈 연구소 > 퀴즈 보관함 경로로 해당 페이지 접근 시 해당 노트로 생성된 퀴즈 세트 전체를 보여주므로 allQuizSet=true
//퀴즈 풀기 > 퀴즈 세트 보기 경로로 해당 페이지 접근 시 allQuizSet=false (default)
const QuizSetComponent = () => {
  const [page, setPage] = useState(0);
  const { isBrightMode } = useIsBrightModeStore();
  const { id } = useParams(); //노트 아이디

  const location = useLocation();

  //solveQuiz는 퀴즈 풀기 페이지에서 노트 호버링 시 퀴즈 세트 보기 버튼 눌렀을 때 핸들러를 구분하기 위함
  //퀴즈 풀기 페이지에서 들어온 거라면 solveQuiz=true, 퀴즈 연구소에서 퀴즈 생성할 때는 solveQuiz=false
  const { isAllQuizSet } = location.state || false;
  console.log("sdfsff", isAllQuizSet);

  const {
    isError: isUnsolvedQuizDataError,
    data: unsolvedQuizData,
    error: unsolvedQuizDataError,
  } = useQuery({
    queryKey: ["UnsolvedQuizData", id, page],
    queryFn: () => getUnsolvedQuiz(id, page),
    enabled: !isAllQuizSet,
  });

  const QuizSetData = unsolvedQuizData.content;
  console.log(unsolvedQuizData);

  const {
    isError: isAllQuizDataError,
    data: allQuizData,
    error: allQuizDataError,
  } = useQuery({
    queryKey: ["allQuizData", id, page],
    queryFn: () => getQuizSetByNote(id, page),
    enabled: isAllQuizSet,
  });

  const allQuizSetData = allQuizData.content;
  console.log(allQuizSetData);

  // const noteTitle = unsolvedQuizData.noteTitle;

  // useEffect(() => {
  //   const showUnsolvedQuiz = async () => {
  //     const res = await getUnsolvedQuiz(id, page);
  //     console.log(res);
  //   };
  //   showUnsolvedQuiz();
  // }, []);

  return (
    <>
      <div
        className={`flex justify-center w-full rounded-t-[2.5rem] h-screen bg-white pb-[2.5rem]`}
      >
        <div
          className={`${
            isBrightMode ? "mt-[30px]" : "mt-[72px]"
          } w-[940px] flex flex-col gap-[8px]`}
        >
          <div className="flex gap-[16px] items-center">
            <div className="font-semibold text-[20px] text-neutralblack">
              {unsolvedQuizData.noteTitle}
            </div>
            {/* <div className="font-semibold text-[14px] text-gray_400">
              총 {QuizSetData.length}개
            </div> */}
          </div>
          <div className="font-mediumtext-[16px] text-gray_400">
            퀴즈 세트{" "}
            {isAllQuizSet
              ? allQuizSetData
                ? allQuizSetData.length
                : 0
              : QuizSetData
              ? QuizSetData.length
              : 0}
            개가 있어요!
          </div>

          <div className="grid grid-cols-3 gap-[20px] mt-[32px]">
            {isAllQuizSet
              ? allQuizSetData &&
                allQuizSetData.map((it, index) => (
                  <QuizContainer
                    key={index}
                    noteName={unsolvedQuizData.noteTitle}
                    noteId={it.id}
                    totalQuizNum={it.totalQuestions}
                    createdAt={it.createdAt}
                    solvedAt={it.solvedAt}
                    noteIcon={noteIcon2}
                    quizsetId={it.quizSetId}
                    answerSummary={it.answerSummary}
                  />
                ))
              : QuizSetData &&
                QuizSetData.map((it, index) => (
                  <QuizContainer
                    key={index}
                    solveQuiz={true}
                    noteName={unsolvedQuizData.noteTitle}
                    noteId={it.id}
                    totalQuizNum={it.totalQuestions}
                    createdAt={it.createdAt}
                    noteIcon={noteIcon2}
                    quizsetId={it.quizSetId}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default QuizSetComponent;
