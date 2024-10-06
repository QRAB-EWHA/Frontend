const CategoryEditButton = ({
  bgcolor,
  text,
  icon,
  textcolor,
  bordercolor,
  handleButton,
}) => {
  return (
    <button
      onClick={handleButton}
      className={`${bgcolor ? `${bgcolor}` : "bg-[#FDEBEC]"}
       flex gap-[16px] rounded-[8px] w-[173px] h-[49px] flex justify-center items-center hover:${bordercolor} `}
    >
      <img src={icon} />
      <div className={`text-[14px] font-medium ${textcolor}`}>{text}</div>
    </button>
  );
};

export default CategoryEditButton;
