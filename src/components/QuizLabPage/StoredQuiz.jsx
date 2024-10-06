import { useState } from "react";
import FirstCategoryTab from "../NoteStorePage/FirstCategoryTab";
import QuizContainer from "./QuizContainer";
import noteIcon1 from "../../assets/storenotepage/note_icon1.svg";
import CreateQuizBtn from "./Button/CreateQuizBtn";
import sorting_icon from "../../assets/quizlabpage/sorting_icon.svg";
const firstTab = [
  { id: 0, name: "전체" },
  { id: 1, name: "디자인" },
  { id: 2, name: "기획" },
  { id: 3, name: "상품 전략" },
];
const StoredQuiz = () => {
  const [selectTab, setSelectTab] = useState(0);
  const [sorting, setSorting] = useState("최신순");
  const [isHovered, setIsHovered] = useState(false);
  const handleSorting = () => {
    if (sorting === "최신순") setSorting("오래된순");
    else setSorting("최신순");
  };
  const handleTabClick = (id) => {
    setSelectTab(id);
  };
  return (
    <div className="flex justify-center">
      <div className="mt-[30px] w-[940px] flex flex-col gap-[8px]">
        <div className="flex justify-between">
          <div className="text-[20px] font-semibold">퀴즈 보관소</div>
          <CreateQuizBtn />
        </div>
        <div className="text-[16px] font-medium text-gray_400">
          새로운 퀴즈를 생성하거나 오답을 다시 풀어보세요
        </div>
        <div className="flex justify-between">
          <div className="flex gap-[8px] mt-[16px]">
            {firstTab.map((it) => (
              <FirstCategoryTab
                firstTab={firstTab}
                tabName={it.name}
                index={it.id}
                handleTabClick={handleTabClick}
                selectTab={selectTab}
              />
            ))}
          </div>
          <div
            onClick={handleSorting}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`cursor-pointer flex items-center gap-[8px]`}
          >
            <div>
              <img src={sorting_icon} />
            </div>
            <div
              className={`text-[14px] font-medium text-gray_400 ${
                isHovered ? "underline" : ""
              }`}
            >
              {sorting}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[20px] mt-[32px]">
          <QuizContainer
            noteIcon={noteIcon1}
            noteName="JavaScript Sec05_4 React에서 LifeCycle 제어하기 (useEffect)"
            totalQuizNum="11"
            majorityNum="8"
            result="correct"
          />
          <QuizContainer
            noteIcon={noteIcon1}
            noteName="JavaScript Sec05_4 React에서 LifeCycle 제어하기 (useEffect)"
            totalQuizNum="11"
            majorityNum="8"
            result="wrong"
          />
        </div>
      </div>
    </div>
  );
};
export default StoredQuiz;
