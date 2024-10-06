const CheckButton = ({ buttonText, activate, cancelBtn, handleButton }) => {
  return (
    <button
      onClick={handleButton}
      className={`w-[96px] h-[40px] rounded-[4px] font-semibold ${
        cancelBtn
          ? "bg-white text-[14px] text-gray_300 border-[1px] border-gray_100"
          : activate
          ? "bg-primary_blue text-neutralwhite"
          : "bg-gray_100 text-neutralwhite"
      }`}
    >
      {buttonText}
    </button>
  );
};
export default CheckButton;
