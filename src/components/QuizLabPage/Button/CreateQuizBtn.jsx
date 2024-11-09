import { useState } from "react";
import plus from "../../../assets/quizlabpage/plus_icon.svg";
import { useNavigate } from "react-router-dom";
const CreateQuizBtn = ({ quizStorageURL = false }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  const handleNavigate = () => {
    navigate("/quizlab/createQuiz");
  };

  return (
    <div
      onClick={quizStorageURL ? handleNavigate : handleScroll}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`cursor-pointer flex justify-center items-center gap-[8px] w-[129px] h-[42px] rounded-[40px] bg-primary_blue 
        hover:shadow-custom2 
      `}
    >
      <div>
        <img src={plus} />
      </div>
      <div className=" text-[16px] text-neutralwhite font-semibold">
        퀴즈 생성하기
      </div>
    </div>
  );
};
export default CreateQuizBtn;
