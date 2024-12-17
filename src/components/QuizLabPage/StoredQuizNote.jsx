import { useEffect, useState } from "react";
import StoredNote from "../NoteStorePage/StoredNote";
import noteIcon1 from "../../assets/storenotepage/note_icon1.svg";
import { getStoredNote } from "../../services/api/noteStore";
import { useQuery } from "@tanstack/react-query";

import useIsBrightModeStore from "../../store/isBrightModeStore";
import CategoryTabs from "../Common/CategoryTabs";
import { getStoredQuizNote } from "../../services/api/quizLab";

const StoredQuizNote = ({ categoryData, createQuizPage = false }) => {
  const [page, setPage] = useState(0);
  const [selectedNotes, setSelectedNotes] = useState([]);

  const { isBrightMode } = useIsBrightModeStore();

  const {
    data: quizNoteData,
    isError,
    error,
  } = useQuery({
    queryKey: ["quizNoteData", page],
    queryFn: () => getStoredQuizNote(page),
  });

  useEffect(() => {
    if (quizNoteData) {
      setSelectedNotes(quizNoteData); // noteData가 로드된 후 selectedNotes 업데이트
    }
    console.log(selectedNotes);
  }, [quizNoteData]);

  return (
    <>
      <div
        className={`flex justify-center w-full rounded-t-[2.5rem] ${
          createQuizPage ? "h-screen" : "h-[46rem]"
        } bg-white`}
      >
        <div
          className={`${
            isBrightMode ? "mt-[30px]" : "mt-[72px]"
          } w-[940px] flex flex-col gap-[8px]`}
        >
          <div className="flex gap-[16px] items-center">
            <div className="font-semibold text-[20px] text-neutralblack">
              저장된 노트
            </div>
            <div className="font-semibold text-[14px] text-gray_400">
              {/* 총 {noteData.totalNotesCount}개 */}
            </div>
          </div>
          <div className="font-mediumtext-[16px] text-gray_400">
            노트를 선택하고 새로운 퀴즈를 생성해보세요
          </div>
          <CategoryTabs
            categoryData={categoryData}
            noteData={quizNoteData}
            setSelectedNotes={setSelectedNotes}
            quizPage={true}
          />
          <div className="grid grid-cols-3 gap-[20px] mt-[32px]">
            {selectedNotes &&
              selectedNotes.length !== 0 &&
              selectedNotes.map((it, index) => (
                <StoredNote
                  key={index}
                  page="QuizLab"
                  noteIcon={noteIcon1}
                  noteId={it.noteId}
                  noteName={it.title}
                  noteContent={it.chatgptContent}
                  parentCategory={it.parentCategoryName}
                  childCategory={it.categoryName}
                  OriginFileOrUrl={it.fileOrUrl}
                  isSolved={it.isSolved}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default StoredQuizNote;
