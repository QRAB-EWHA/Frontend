import useIsCreateQuizModalStore from "../../../store/isCreateQuizModalStore";

const QuizButton = ({ buttonText }) => {
  const { setIsCreateQuizModal } = useIsCreateQuizModalStore();
  return (
    <button
      onClick={() => setIsCreateQuizModal(true)}
      className="cursor-pointer bg-transparent border-[1px] border-[1px] border-secondary_skyblue rounded-[4px] w-[124px] h-[41px] text-[14px] font-medium text-secondary_skyblue"
    >
      {buttonText}
    </button>
  );
};

export default QuizButton;
