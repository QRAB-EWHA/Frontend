import { useState } from "react";
import { HumanitiesMajor } from "../../constants/MajorList";

const LiberalMajor = ({
  major,
  setMajor,
  setMajorValue,
  sortingName,
  sortingList,
}) => {
  const handleMajor = (majorName) => {
    setMajor(majorName);
    setMajorValue(majorName);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <div className="flex w-[864px] justify-start text-[16px] font-medium mb-[16px]">
          {sortingName}
        </div>
        <div className="flex flex-wrap w-[864px]">
          {sortingList.map((it, index) => {
            const isLastRow =
              Math.floor(index / 6) ===
              Math.floor((HumanitiesMajor.length - 1) / 6);
            const isLastColumn = (index + 1) % 6 === 0;
            const isFirstColumn = index % 6 === 0;
            const isFirstRow = Math.floor(index / 6) === 0;
            return (
              <div
                onClick={() => handleMajor(it.name)}
                key={index}
                style={{ flexBasis: "calc(100% / 6)" }} // 6개씩 한 줄에 배치
                className={`h-[56px] flex justify-center items-center 
                    ${!isLastColumn ? "border-r-[1px]" : "border-r-[1px]"} 
                    ${!isLastRow ? "border-b-[1px]" : "border-b-[1px]"}
                    ${isFirstColumn ? "border-l-[1px]" : ""} 
                    ${isFirstRow ? "border-t-[1px]" : ""}
                    border-gray_100 cursor-pointer text-[14px]  ${
                      major === it.name
                        ? "bg-primary_blue text-neutralwhite"
                        : "hover:text-primary_blue hover:border-[1px] hover:border-primary_blue"
                    } `}
              >
                {it.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default LiberalMajor;
