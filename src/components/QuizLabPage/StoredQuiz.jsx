import { useEffect, useState } from "react";
import { getStoredQuizNote } from "../../services/api/quizLab";
import { useQuery } from "@tanstack/react-query";
import CreateQuizBtn from "./Button/CreateQuizBtn";
import useIsBrightModeStore from "../../store/isBrightModeStore";
import CategoryTabs from "../Common/CategoryTabs";
import QuizContainer from "./QuizContainer";
import sorting_icon from "../../assets/quizlabpage/sorting_icon.svg";
import noteIcon1 from "../../assets/storenotepage/note_icon1.svg";
import StoredNote from "../NoteStorePage/StoredNote";
const StoredQuiz = ({ categoryData, quizStorageURL }) => {
  const [sorting, setSorting] = useState("최신순");
  const [isHovered, setIsHovered] = useState(false);
  const [selectedNotes, setSelectedNotes] = useState([]); //카테고리 별로 필터링 된 노트들 (카테고리 탭 했을 때 화면에 보이는 노트들)
  const { isBrightMode } = useIsBrightModeStore();

  const handleSorting = () => {
    if (sorting === "최신순") setSorting("오래된순");
    else setSorting("최신순");
  };

  const {
    data: quizNoteData,
    isError,
    error,
  } = useQuery({
    queryKey: ["quizNoteData", 0],
    queryFn: () => getStoredQuizNote(0),
  });

  useEffect(() => {
    console.log(quizNoteData);
    if (quizNoteData) {
      setSelectedNotes(quizNoteData); // noteData가 로드된 후 selectedNotes 업데이트
    }
    console.log(selectedNotes);
  }, [quizNoteData]);

  return (
    <div className="flex justify-center">
      <div
        className={`relative ${
          isBrightMode ? "mt-[30px]" : "mt-[72px]"
        } w-[940px] flex flex-col gap-[8px]`}
      >
        <div className="flex justify-between">
          <div className="text-[20px] font-semibold">퀴즈 보관소</div>
          <CreateQuizBtn quizStorageURL={quizStorageURL} />
        </div>
        <div className="text-[16px] font-medium text-gray_400">
          새로운 퀴즈를 생성하거나 오답을 다시 풀어보세요
        </div>
        <div className=" flex justify-between">
          <CategoryTabs
            categoryData={categoryData}
            noteData={quizNoteData}
            setSelectedNotes={setSelectedNotes}
            quizPage={true}
          />
          <div
            onClick={handleSorting}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`cursor-pointer absolute right-5 top-[205px] flex items-center gap-[8px]`}
          >
            <img src={sorting_icon} />

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
          {selectedNotes &&
            selectedNotes.length !== 0 &&
            selectedNotes.map((it, index) => (
              <div key={index}>
                <StoredNote
                  page="QuizLab"
                  noteIcon={noteIcon1}
                  noteId={it.noteId}
                  noteName={it.title}
                  noteContent={it.chatgptContent}
                  parentCategory={it.parentCategoryName}
                  childCategory={it.categoryName}
                  OriginFileOrUrl={it.fileOrUrl}
                  quizGenerationCount={it.quizGenerationCount}
                  quizSolvePage={true}
                  isAllQuizSet={true}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default StoredQuiz;
