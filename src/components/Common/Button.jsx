const Button = ({ buttonActive }) => {
  return (
    <button
      className={`w-[80px] h-[36px] ${
        buttonActive ? "bg-primary_blue" : "bg-neutralgray"
      } rounded-[4px] text-neutralwhite text-[14px] font-semibold`}
    >
      중복 확인
    </button>
  );
};
export default Button;
