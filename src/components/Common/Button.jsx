const Button = ({
  buttonActive,
  width,
  height,
  buttonText,
  handleButton,
  cancleBtn,
}) => {
  return (
    <button
      onClick={handleButton}
      className={`w-[${width}] h-[${height}] ${
        cancleBtn
          ? "bg-tranparent text-gray_300 text-[14px] border-[1px] border-gray_100"
          : buttonActive
          ? "bg-primary_blue text-[14px]  text-neutralwhite"
          : "bg-neutralgray  text-[14px]  text-neutralwhite"
      } rounded-[4px]  font-semibold`}
    >
      {buttonText}
    </button>
  );
};
export default Button;
