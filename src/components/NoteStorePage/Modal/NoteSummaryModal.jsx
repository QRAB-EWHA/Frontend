import { useEffect, useState } from "react";
import closeIcon from "../../../assets/common/close_icon.svg";
import CategoryTag from "../../QuizLabPage/CategoryTag";
import PublicToggle from "../PublicToggle";
import { postIsPublic } from "../../../services/api/noteStore";
import { useQuery } from "@tanstack/react-query";

const NoteSummaryModal = ({
  setModal,
  noteId,
  title,
  category,
  childCategory,
  contents,
}) => {
  // const {
  //   data: isPublicData,
  //   isError,
  //   error,
  // } = useQuery({
  //   queryKey: ["isPublicData", currentNoteId],
  //   queryFn: () => postIsPublic(currentNoteId),
  // });
  const [publicState, setPublicState] = useState(true);

  useEffect(() => {
    document.body.style.cssText = `
                position:fixed;
                top:-${window.scrollY}px;
                overflow-y:scroll;
                width:100%;
               `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1); //scrollY값이 없으면 기본값으로 0 사용, 10진수 사용
    };
  }, []);

  const handleToggle = async () => {
    setPublicState(!publicState);
    const res = await postIsPublic(noteId);
    console.log(res);
  };

  return (
    <div
      style={{ background: "rgba(13, 13, 13, 0.6) " }}
      className="flex justify-center items-center fixed inset-0 z-10"
    >
      <div className="relative w-[48rem] h-3/4 bg-neutralwhite rounded-[1rem]">
        <button
          className="absolute right-[-1.875rem] cursor-pointer"
          onClick={() => setModal(false)}
        >
          <img src={closeIcon} alt="close_button" />
        </button>
        <div className="flex flex-col gap-2 h-full px-12 py-10">
          <div className="text-2xl font-bold whitespace-pre-wrap ">{title}</div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              {!category ? (
                <CategoryTag tagText={childCategory} />
              ) : (
                <>
                  <CategoryTag tagText={category} />
                  <CategoryTag tagText={childCategory} />
                </>
              )}
            </div>
            <PublicToggle
              handleToggle={handleToggle}
              publicState={publicState}
              setPublicState={setPublicState}
            />
          </div>
          <div className="w-full border-b-[1px] border-gray_100"></div>
          <div className=" flex flex-col gap-2 h-3/4 mt-2">
            <div className="text-base font-bold text-gray_400 ">요약</div>
            <div className="h-full  overflow-y-auto custom-scrollbar-skyblue">
              <div className="text-[16px] font-medium text-neutralBlack whitespace-pre-wrap">
                {contents}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoteSummaryModal;
