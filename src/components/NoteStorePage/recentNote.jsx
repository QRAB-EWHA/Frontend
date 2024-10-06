import { useEffect, useRef, useState } from "react";

const RecentNote = ({ icon, categoryName, noteName, date, noteContents }) => {
  const categoryRef = useRef(null);
  const noteRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [textExceeds, setTextExceeds] = useState(false);

  useEffect(() => {
    if (isHovered) {
      if (noteRef.current && isTextHovered) {
        const scrollWidth = noteRef.current.scrollWidth;
        const clientWidth = noteRef.current.clientWidth;
        console.log(scrollWidth);
        console.log(clientWidth);
        setTextExceeds(scrollWidth > clientWidth);
      }
    }
  }, [noteName, isTextHovered]);

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className={`font-medium  cursor-pointer ${
        isHovered ? "bg-none" : "bg-gradient"
      } `}
    >
      <div className="flex flex-col">
        {!isHovered ? (
          <div className="ml-[20px]">
            <div className="mt-[16px]">
              <img src={icon} />
            </div>
            <div
              className={`relative overflow-hidden w-[180px] text-[14px] text-primary_blue`}
            >
              <div
                ref={categoryRef}
                className={`mt-[10px] text-[14px] text-primary_blue }`}
              >
                {categoryName}
              </div>
            </div>
            <div
              ref={noteRef}
              className="mt-[8px] w-[180px] h-[44px] text-[14px] text-wrap line-clamp-2"
            >
              {noteName}
            </div>
            <div className="mt-[8px] text-[12px] text-gray_400">{date}</div>
          </div>
        ) : (
          <>
            <div className="ml-[20px]">
              <div
                onMouseEnter={() => {
                  setIsTextHovered(true);
                }}
                onMouseLeave={() => {
                  setIsTextHovered(false);
                }}
                ref={noteRef}
                className={`relative overflow-hidden mt-[20px] w-[180px] h-[19px] text-[14px]`}
              >
                <div
                  className={`${
                    isTextHovered && textExceeds
                      ? "animate-rotateText"
                      : "animate-none"
                  }`}
                >
                  {isTextHovered && textExceeds
                    ? `${noteName} ${String.fromCharCode(
                        8195
                      )} ${String.fromCharCode(8195)} ${noteName}`
                    : `${noteName}`}
                </div>
                {textExceeds && (
                  <div className="absolute w-[21px] h-[21px] bottom-0 right-0 animate-fade"></div>
                )}
              </div>
              <div className="font-regular w-[180px] h-[36px] mt-[8px] text-gray_400 text-[13px] text-wrap line-clamp-2">
                {noteContents}
              </div>
            </div>
            <button className="w-[52px] h-[17px] pt-[12px] pb-[12px] pl-[40px] pr-[40px] box-content border-[1px] rounded-[4px] border-primary_blue text-[14px] text-primary_blue flex justify-center items-center mt-[19px] m-auto bg-neutralwhite hover:bg-secondary_bg">
              노트 보기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default RecentNote;
