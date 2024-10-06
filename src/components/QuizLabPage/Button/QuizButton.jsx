const QuizButton = ({ buttonText }) => {
  return (
    <button className="cursor-pointer bg-transparent border-[1px] border-[1px] border-secondary_skyblue rounded-[4px] w-[124px] h-[41px] text-[14px] font-medium text-secondary_skyblue">
      {buttonText}
    </button>
  );
};

export default QuizButton;
