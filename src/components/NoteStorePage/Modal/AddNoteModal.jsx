import { useEffect } from "react";
import useIsAddNotModal from "../../../store/isAddNoteModal";
import closeIcon from "../../../assets/common/close_icon.svg";
import AddNoteButton from "../AddNoteButton";
import file from "../../../assets/storenotepage/file.svg";
import link from "../../../assets/storenotepage/link.svg";
import useIsAddFileNote from "../../../store/isAddFileNote";
import useIsAddLinkNote from "../../../store/isAddLinkNote";

const AddNoteModal = ({ setModal }) => {
  const { setIsAddNoteModal } = useIsAddNotModal();
  const { setIsAddFileNote } = useIsAddFileNote();
  const { setIsAddLinkNote } = useIsAddLinkNote();
  const handleFileButton = () => {
    setIsAddNoteModal(false);
    setIsAddFileNote(true);
  };
  const handleLinkButton = () => {
    setIsAddNoteModal(false);
    setIsAddLinkNote(true);
  };
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

  const handleButton = () => {
    setIsAddNoteModal(false);
  };
  return (
    <div
      style={{ background: "rgba(13, 13, 13, 0.6) " }}
      className="flex justify-center items-center fixed inset-0 z-10"
    >
      <div className="relative w-[780px] h-[258px] rounded-[16px] bg-neutralwhite">
        <button
          className="cursor-pointer absolute right-[-30px]"
          onClick={() => setModal(false)}
        >
          <img src={closeIcon} alt="close_button" />
        </button>
        <div className="flex flex-col gap-[32px] items-center mt-[32px]">
          <div className="text-base font-semibold">노트 추가하기</div>
          <div className="flex gap-[20px]">
            <AddNoteButton
              handleButton={handleFileButton}
              buttonText="파일 불러오기"
              img={file}
              subText={`PDF, PNG, JPG, JPEG 형식의 \n파일을 불러올 수 있습니다.`}
            />
            <AddNoteButton
              handleButton={handleLinkButton}
              buttonText="링크 입력하기"
              img={link}
              subText={`Velog, Tistory 링크를 \n입력할 수 있습니다.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddNoteModal;
