import { useNavigate } from "react-router-dom";
import right_arrow from "../../../assets/analysis/right_arrow.svg";

const GoButton = ({ text, subText, url }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(url)}
        className={`flex justify-center items-center gap-6 ${
          text === "회원가입 하러 가기" ? "w-[34rem]" : ""
        } px-[6rem] py-6 rounded-[2.5rem] bg-primary_blue hover:shadow-custom2`}
      >
        <div className="flex flex-col">
          <div className="text-2xl font-medium text-white">{text}</div>
          {subText && <div className="text-lg text-white">{subText}</div>}
        </div>
        <img src={right_arrow} />
      </button>
    </>
  );
};

export default GoButton;
