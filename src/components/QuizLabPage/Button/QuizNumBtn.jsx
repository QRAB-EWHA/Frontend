import { useState } from "react";

const QuizNumBtn = ({ num, handleAddValueBtn, selectedNum }) => {
  const isSelected = selectedNum === num;
  return (
    <div
      onClick={() => handleAddValueBtn(num)}
      className={`cursor-pointer flex justify-center items-center w-[56px] h-[48px] bg-secondary_skyblue text-[12px] text-primary_blue font-medium rounded-[8px] ${
        isSelected ? "border-[1px] border-primary_blue btn-bg-gradient" : ""
      }`}
    >
      {num}문제
    </div>
  );
};
export default QuizNumBtn;
