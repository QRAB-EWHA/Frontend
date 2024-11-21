const ResultTag = ({ hover, solveQuiz = false, answerSummary }) => {
  const result =
    answerSummary && answerSummary.slice(0, 2) === "정답" ? "correct" : "false";
  return (
    <div
      className={`flex justify-center items-center w-[68px] h-[22px] rounded-[4px] text-[12px] font-medium ${
        hover
          ? "bg-gray_400 text-gray_100"
          : solveQuiz
          ? "bg-gray_100 text-gray_400"
          : result === "correct"
          ? "bg-secondary_skyblue text-primary_blue"
          : "bg-secondary_red text-neutralred"
      }`}
    >
      {solveQuiz ? "미풀이" : answerSummary}
    </div>
  );
};
export default ResultTag;
