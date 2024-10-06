import { useState } from "react";
import file_button from "../../assets/storenotepage/add_note_bg.svg";
import file_hover_button from "../../assets/storenotepage/add_note_hover_button.svg";

const AddNoteButton = ({ img, buttonText, subText, handleButton }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleButton}
    >
      {!isHover ? <img src={file_button} /> : <img src={file_hover_button} />}
      <div className="absolute flex top-0 mt-[14px] ml-[16px] gap-[24px] items-center">
        <img src={img} />
        <div className="flex flex-col gap-[12px]">
          <div className="text-xl font-semibold text-primary_blue">
            {buttonText}
          </div>
          <div className="whitespace-pre-wrap text-[13px] text-gray_400 ">
            {subText}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddNoteButton;
