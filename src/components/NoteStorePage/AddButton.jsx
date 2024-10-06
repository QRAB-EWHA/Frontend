import { useState } from "react";

const AddButton = ({
  handleButtonClick,
  buttonImg,
  hoveredButtonImg,
  text,
  detailText,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    // <div className="w-[220px] h-[70px] rounded-[8px] border-[1px] border-gray_100">
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer"
      onClick={handleButtonClick}
    >
      {isHovered ? (
        <div className="w-[220px] h-[70px] object-contain">
          <img src={hoveredButtonImg} />
        </div>
      ) : (
        <div className="w-[220px] h-[70px] ">
          <img src={buttonImg} />
        </div>
      )}
      {/* <div className="flex flex-col justify-center gap-[4px]">
          <div className="font-semibold text-[14px] text-neutralblack">
            {text}
          </div>
          <div className="font-medium text-[12px] text-gray_300">
            {detailText}
          </div>
        </div> */}
    </div>
    // </div>
  );
};
export default AddButton;
