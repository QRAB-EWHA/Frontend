import { useEffect, useState } from "react";

const StatisticElement = ({
  categoryName = "카테고리",
  subCategoryName = "하위 카테고리",
  quizNum = "풀이한 퀴즈 문제 수",
  avgCorrectRate = "평균 정답률",
  index = 0,
  isLast = false,
}) => {
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [textExceeds, setTextExceeds] = useState(false);
  const [isSubTextHovered, setIsSubTextHovered] = useState(false);
  const [subTextExceeds, setSubTextExceeds] = useState(false);

  useEffect(() => {
    if (isSubTextHovered) {
      if (subCategoryName.length > 13) {
        setSubTextExceeds(true);
      }
    } else if (isTextHovered) {
      if (categoryName.length > 13) {
        setTextExceeds(true);
      }
    }
  }, [categoryName, isTextHovered, subCategoryName, isSubTextHovered]);

  const tabStyle = `flex justify-center w-[10rem] text-sm font-medium ${
    index === 0 ? "text-gray_300" : "text-neutralBlack"
  } overflow-hidden `;

  return (
    <>
      <div
        className={`flex justify-center items-center gap-[3.5rem] w-[58.75rem] h-[3rem] ${
          index === 0 ? "rounded-t-[0.5rem]" : ""
        } ${isLast ? "" : "border-b-[1px] border-gray_100"} bg-white`}
      >
        <div className="relative overflow-hidden w-[10rem]">
          <div
            onMouseEnter={() => {
              setIsTextHovered(true);
            }}
            onMouseLeave={() => {
              setIsTextHovered(false);
            }}
            className={`flex justify-start text-sm font-medium ${
              index === 0 ? "text-gray_300" : "text-neutralBlack"
            } ${
              isTextHovered && textExceeds
                ? "animate-rotateText"
                : "animate-none"
            } `}
          >
            {isTextHovered && textExceeds
              ? `${categoryName} ${String.fromCharCode(
                  8195
                )} ${String.fromCharCode(8195)} ${categoryName}`
              : `${categoryName}`}
          </div>
        </div>
        <div className="relative overflow-hidden w-[10rem]">
          <div
            onMouseEnter={() => {
              setIsSubTextHovered(true);
            }}
            onMouseLeave={() => {
              setIsSubTextHovered(false);
            }}
            className={`flex justify-start text-sm font-medium ${
              index === 0 ? "text-gray_300" : "text-neutralBlack"
            } ${
              isSubTextHovered && subTextExceeds
                ? "animate-rotateText"
                : "animate-none"
            } `}
          >
            {isSubTextHovered && subTextExceeds
              ? `${subCategoryName} ${String.fromCharCode(
                  8195
                )} ${String.fromCharCode(8195)} ${subCategoryName}`
              : `${subCategoryName}`}
          </div>
        </div>
        <div className={tabStyle}>{quizNum}</div>
        {index === 0 ? (
          <div className={tabStyle}>{avgCorrectRate}</div>
        ) : (
          <div className="flex justify-center w-[10rem]">
            <div
              className={`flex justify-center items-center w-12 h-6 rounded-[0.25rem] ${
                avgCorrectRate >= 80
                  ? "bg-[#C4F8E2]"
                  : avgCorrectRate >= 50
                  ? "bg-[#F3D47926]"
                  : "bg-[#E535391A]"
              } text-sm font-medium ${
                avgCorrectRate >= 80
                  ? "text-[#06A561]"
                  : avgCorrectRate >= 50
                  ? "text-secondary_yellow"
                  : "text-neutralred"
              }`}
            >
              {parseFloat(avgCorrectRate).toFixed(1)}%
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default StatisticElement;
