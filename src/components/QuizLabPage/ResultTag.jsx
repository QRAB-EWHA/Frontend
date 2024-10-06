const ResultTag = ({ hover, result, num }) => {
  return (
    <div
      className={`flex justify-center items-center w-[68px] h-[22px] rounded-[4px] text-[12px] font-medium ${
        hover
          ? "bg-gray_400 text-gray_100"
          : result === "correct"
          ? "bg-secondary_skyblue text-primary_blue"
          : "bg-secondary_red text-neutralred"
      }`}
    >
      {result === "correct" ? `정답 ${num}문제` : `오답 ${num}문제`}
    </div>
  );
};
export default ResultTag;
