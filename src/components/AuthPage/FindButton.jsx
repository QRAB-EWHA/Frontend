const FindButton = ({ text, handleButton }) => {
  return (
    <button
      onClick={handleButton}
      className="border-[1px] border-gray_100 flex justify-center items-center rounded-[4px] p-[8px] w-[192px] h-[40px] text-[12px] hover:text-primary_blue"
    >
      {text}
    </button>
  );
};
export default FindButton;
