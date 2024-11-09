import QuizContainer from "../QuizLabPage/QuizContainer";
import noteIcon1 from "../../assets/storenotepage/note_icon1.svg";
import RecentQuizContainer from "./RecentQuizContainer";
import GoButton from "./Button/GoButton";

const quizzes = [
  {
    id: 1,
    category: ["TISTORY", "프론트엔드", "Java Script"],
    description: "컴포넌트 트리에 데이터 공급",
    status: "completed" | "incomplete",
    total: 17,
  },
  {
    id: 2,
    category: ["TISTORY", "프론트엔드", "Java Script"],
    description: "컴포넌트 트리에 데이터 공급",
    status: "completed" | "incomplete",
    total: 17,
  },
  {
    id: 3,
    category: ["TISTORY", "프론트엔드", "Java Script"],
    description: "컴포넌트 트리에 데이터 공급",
    status: "completed" | "incomplete",
    total: 17,
  },
];

const MyQuiz = ({ mainData }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="mb-2 text-xl font-semibold">나의 퀴즈</div>
        <div className="mb-6 text-base font-medium text-gray_499">
          최근 생성한 퀴즈를 풀이해 보세요
        </div>
        <div className="flex gap-5">
          {mainData.unsolvedQuizSetResponseDTOS.length === 0 ? (
            <div className="flex justify-center w-full">
              <GoButton
                text="최근 생성한 퀴즈가 없어요!"
                subText="퀴즈 생성하러 가기"
                url="/quizlab"
              />
            </div>
          ) : (
            mainData.unsolvedQuizSetResponseDTOS.map((it, index) => (
              <>
                <RecentQuizContainer
                  noteName={it.noteTitle}
                  totalQuizNum={it.totalQuestions}
                  noteContent={it.chatgptContent}
                  noteIcon={noteIcon1}
                  quizsetId={it.quizSetId}
                />
              </>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default MyQuiz;
