import { useState } from "react";
import StoredNote from "../NoteStorePage/StoredNote";
import noteIcon1 from "../../assets/storenotepage/note_icon1.svg";

import useIsBrightModeStore from "../../store/isBrightModeStore";

const BookMarkedQuiz = ({ selectedNotes }) => {
  const { isBrightMode } = useIsBrightModeStore();

  return (
    <>
      <div className="w-full h-screen rounded-t-[40px] bg-neutralwhite">
        <div className="flex justify-center">
          <div
            className={`${
              isBrightMode ? "mt-[30px]" : "mt-[72px]"
            } w-[940px] flex flex-col gap-[8px]`}
          >
            <div className="flex gap-[16px] items-center">
              <div className="font-semibold text-[20px] text-neutralblack">
                북마크
              </div>
            </div>
            <div className="font-mediumtext-[16px] text-gray_400">
              노트별로 북마크한 퀴즈를 확인할 수 있어요
            </div>
            <div className="flex gap-[8px] mt-[16px] w-[920px] scrollbarhidden"></div>

            <div className="grid grid-cols-3 gap-x-5 gap-y-8 mt-8">
              {selectedNotes.length !== 0 &&
                selectedNotes.map((it) => (
                  <StoredNote
                    page="QuizLab"
                    noteIcon={noteIcon1}
                    noteId={it.noteId}
                    noteName={it.title}
                    noteContent={it.chatgptContent}
                    bookmark={true}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookMarkedQuiz;
