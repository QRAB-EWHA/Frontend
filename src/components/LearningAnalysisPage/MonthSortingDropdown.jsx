import { useState } from "react";
import down_arrow from "../../assets/analysis/down_arrow.svg";
const MonthSortingDropdown = ({
  initialValue,
  setInitialValue,
  dropDownClick,
  setDropDownClick,
}) => {
  return (
    <>
      <div className="relative ">
        <div
          onClick={() => setDropDownClick(!dropDownClick)}
          className="flex items-center gap-1 cursor-pointer"
        >
          <div className="text-sm font-medium text-[#5A607F]">
            {initialValue}
          </div>
          <img src={down_arrow} />
        </div>
        {dropDownClick && (
          <ul
            onClick={() => setDropDownClick(false)}
            className="absolute right-1 flex flex-col mt-2 border-[1px] rounded-b-[0.5rem] text-gray_400 text-sm shadow-custom cursor-pointer"
          >
            <li
              onClick={() => setInitialValue("전체 기간")}
              className="flex justify-center itmes-center px-4 py-2 border-b-[1px]"
            >
              전체 기간
            </li>
            <li
              onClick={() => setInitialValue("최근 1개월")}
              className="px-4 py-2 border-b-[1px]"
            >
              최근 1개월
            </li>
            <li
              onClick={() => setInitialValue("최근 3개월")}
              className="px-4 py-2 border-b-[1px]"
            >
              최근 3개월
            </li>
            <li
              onClick={() => setInitialValue("최근 6개월")}
              className="px-4 py-2"
            >
              최근 6개월
            </li>
          </ul>
        )}
      </div>
    </>
  );
};
export default MonthSortingDropdown;
