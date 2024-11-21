import { useEffect, useState } from "react";
import FirstCategoryTab from "../NoteStorePage/FirstCategoryTab";
import StoredNote from "../NoteStorePage/StoredNote";
import noteIcon1 from "../../assets/storenotepage/note_icon1.svg";
import {
  getCategoryChild,
  getCategoryFilterData,
  getStoredNote,
} from "../../services/api/noteStore";
import { useQuery } from "@tanstack/react-query";
import SecondCategoryTab from "../NoteStorePage/SecondCategoryTab";
import check from "../../assets/storenotepage/check.svg";
import useIsBrightModeStore from "../../store/isBrightModeStore";
import CategoryTabs from "../Common/CategoryTabs";

const CreatedQuizComponent = ({ categoryData }) => {
  const [page, setPage] = useState(0);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const { isBrightMode } = useIsBrightModeStore();
  const {
    data: noteData,
    isError,
    error,
  } = useQuery({
    queryKey: ["noteData", page],
    queryFn: () => getStoredNote(page),
  });

  useEffect(() => {
    if (noteData) {
      setSelectedNotes(noteData.sixNotesInfo); // noteData가 로드된 후 selectedNotes 업데이트
    }
  }, [noteData]);

  return (
    <>
      <div
        className={`flex justify-center w-full rounded-t-[2.5rem] h-screen bg-white`}
      >
        <div
          className={`${
            isBrightMode ? "mt-[30px]" : "mt-[72px]"
          } w-[940px] flex flex-col gap-[8px]`}
        >
          <div className="flex gap-[16px] items-center">
            <div className="font-semibold text-[20px] text-neutralblack">
              생성된 퀴즈
            </div>
            <div className="font-semibold text-[14px] text-gray_400">
              {/* 총 {noteData.totalNotesCount}개 */}
            </div>
          </div>
          <div className="font-mediumtext-[16px] text-gray_400">
            아직 풀지 않은 퀴즈가 있어요! 
          </div>
          <CategoryTabs
            categoryData={categoryData}
            noteData={noteData}
            setSelectedNotes={setSelectedNotes}
          />
          <div className="grid grid-cols-3 gap-[20px] mt-[32px]">
            {selectedNotes.length !== 0 &&
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
                  quizSolvePage={true}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default CreatedQuizComponent;
