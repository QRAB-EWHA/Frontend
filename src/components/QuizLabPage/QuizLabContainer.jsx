import { useState } from "react";
import FirstCategoryTab from "../NoteStorePage/FirstCategoryTab";
import StoredNote from "../NoteStorePage/StoredNote";
import noteIcon1 from "../../assets/storenotepage/note_icon1.svg";
import StoredQuiz from "./StoredQuiz";

const firstTab = [
  { id: 0, name: "전체" },
  { id: 1, name: "디자인" },
  { id: 2, name: "기획" },
  { id: 3, name: "상품 전략" },
];

const QuizLabContainer = () => {
  const [selectTab, setSelectTab] = useState(0);

  const handleTabClick = (id) => {
    setSelectTab(id);
  };

  return (
    <>
      <div className="flex flex-col items-center overflow-y-hidden relative ">
        <div className="w-full h-[742px] rounded-t-[40px] bg-neutralwhite">
          <div className="flex justify-center">
            <div className="mt-[73px] w-[940px] flex flex-col gap-[8px]">
              <div className="flex gap-[16px] items-center">
                <div className="font-semibold text-[20px] text-neutralblack">
                  저장된 노트
                </div>
                <div className="font-semibold text-[14px] text-gray_400">
                  총 4개
                </div>
              </div>
              <div className="font-mediumtext-[16px] text-gray_400">
                노트를 선택하고 새로운 퀴즈를 생성해보세요
              </div>
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
              <div className="grid grid-cols-3 gap-[20px] mt-[32px]">
                <StoredNote
                  page="QuizLab"
                  noteIcon={noteIcon1}
                  noteName="JavaScript Sec05_4 React에서 LifeCycle 제어하기 (useEffect)"
                  noteContent="노트 내용의 첫 줄이 여기에 보이도록 설정해 주세요 내용이 두 줄 이상으로 길어지면 점 처리 됩니다"
                />
                <StoredNote
                  page="QuizLab"
                  noteIcon={noteIcon1}
                  noteName="JavaScript Sec05_4 React에서 LifeCycle 제어하기 (useEffect)"
                  noteContent="노트 내용의 첫 줄이 여기에 보이도록 설정해 주세요 내용이 두 줄 이상으로 길어지면 점 처리 됩니다"
                />
                <StoredNote
                  page="QuizLab"
                  noteIcon={noteIcon1}
                  noteName="JavaScript Sec05_4 React에서 LifeCycle 제어하기 (useEffect)"
                  noteContent="노트 내용의 첫 줄이 여기에 보이도록 설정해 주세요 내용이 두 줄 이상으로 길어지면 점 처리 됩니다"
                />
                <StoredNote
                  page="QuizLab"
                  noteIcon={noteIcon1}
                  noteName="JavaScript Sec05_4 React에서 LifeCycle 제어하기 (useEffect)"
                  noteContent="노트 내용의 첫 줄이 여기에 보이도록 설정해 주세요 내용이 두 줄 이상으로 길어지면 점 처리 됩니다"
                />
                <StoredNote
                  page="QuizLab"
                  noteIcon={noteIcon1}
                  noteName="JavaScript Sec05_4 React에서 LifeCycle 제어하기 (useEffect)"
                  noteContent="노트 내용의 첫 줄이 여기에 보이도록 설정해 주세요 내용이 두 줄 이상으로 길어지면 점 처리 됩니다"
                />
                <StoredNote
                  page="QuizLab"
                  noteIcon={noteIcon1}
                  noteName="JavaScript Sec05_4 React에서 LifeCycle 제어하기 (useEffect)"
                  noteContent="노트 내용의 첫 줄이 여기에 보이도록 설정해 주세요 내용이 두 줄 이상으로 길어지면 점 처리 됩니다"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-[320px] h-screen min-h-[813px] bg-secondary_bg`}
        >
          <StoredQuiz />
        </div>
      </div>
    </>
  );
};
export default QuizLabContainer;
