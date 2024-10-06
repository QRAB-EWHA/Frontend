import { useEffect, useState } from "react";
import close_icon from "../../../assets/common/close_icon.svg";
import QuizNumBtn from "../Button/QuizNumBtn";
import Button from "../../Common/Button";
import useIsCreateQuizModalStore from "../../../store/isCreateQuizModalStore";
import CheckButton from "../../NoteStorePage/Button/CheckButton";
const CreateQuizModal = ({ setModal }) => {
  const [inputValue, setInputValue] = useState("");
  const { setIsCreateQuizModal } = useIsCreateQuizModalStore();
  const [selectedNum, setSelectedNum] = useState(null);
  const [QuizCreateComplete, setQuizCreateComplete] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [selectedQuizType, setSelectedQuizType] = useState("");
  const [reCreate, setReCreate] = useState(true);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddValueBtn = (num) => {
    if (selectedNum === num) {
      setSelectedNum(null);
      setInputValue("");
    } else {
      setSelectedNum(num);
      setInputValue(num);
    }
  };

  useEffect(() => {
    document.body.style.cssText = `
            position:fixed;
            top:-${window.scrollY}px;
            overflow-y:scroll;
            width:100%;
           `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1); //scrollY값이 없으면 기본값으로 0 사용, 10진수 사용
    };
  }, []);

  const closeModalButton = () => {
    setIsCreateQuizModal(false);
  };
  return (
    <div
      style={{ background: "rgba(13, 13, 13, 0.6) " }}
      className="flex justify-center items-center fixed inset-0 z-10"
    >
      <div className="relative w-[780px] h-[328px] bg-neutralwhite rounded-[16px]">
        <button
          className="cursor-pointer absolute right-[-30px]"
          onClick={() => setModal(false)}
        >
          <img src={close_icon} alt="close_button" />
        </button>
        <div className="flex flex-col gap-[20px] justify-center items-center ">
          <div className="text-[16px] font-semibold mt-[32px]">
            퀴즈 생성하기
          </div>
          {!QuizCreateComplete ? (
            <div className="w-[660px] h-[210px] rounded-[20px] border-[2px] border-gray_100">
              <div className="flex flex-col  ml-[32px] mt-[24px]">
                <div className="text-[20px] font-semibold">
                  여기에 노트 제목이 표시됩니다
                </div>
                {reCreate && (
                  <div className="mt-[5px] mb-[5px] flex gap-[17px] text-[14px] text-primary_blue font-medium">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="quizType"
                        value="newQuiz"
                        checked={selectedQuizType === "newQuiz"}
                        onChange={(e) => setSelectedQuizType(e.target.value)}
                        className="hidden"
                      />
                      <span className="w-[16px] h-[16px] border-[1px] border-primary_blue rounded-[4px] flex items-center justify-center mr-[5px] bg-secondary_bg">
                        {selectedQuizType === "newQuiz" && (
                          <div className="w-[11px] h-[11px] bg-primary_blue rounded-[3px]"></div>
                        )}
                      </span>
                      새로운 퀴즈
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="quizType"
                        value="reviewQuiz"
                        checked={selectedQuizType === "reviewQuiz"}
                        onChange={(e) => setSelectedQuizType(e.target.value)}
                        className="hidden"
                      />
                      <span className="w-[16px] h-[16px] border-[1px] border-primary_blue rounded-[4px] flex items-center justify-center mr-[5px] bg-secondary_bg">
                        {selectedQuizType === "reviewQuiz" && (
                          <div className="w-[11px] h-[11px] bg-primary_blue rounded-[3px]"></div>
                        )}
                      </span>
                      오답 복습 퀴즈
                    </label>
                  </div>
                )}
                <div
                  className={`${
                    reCreate ? "" : "mt-[24px]"
                  } flex gap-[16px] items-center`}
                >
                  <input
                    type="number"
                    max="20"
                    value={inputValue}
                    onChange={handleInputValue}
                    className="w-[324px] h-[56px] rounded-[8px] bg-secondary_bg focus:outline-none p-[20px]"
                  />
                  <div className="flex gap-[8px]">
                    <QuizNumBtn
                      num="5"
                      selectedNum={selectedNum}
                      handleAddValueBtn={handleAddValueBtn}
                    />
                    <QuizNumBtn
                      num="10"
                      selectedNum={selectedNum}
                      handleAddValueBtn={handleAddValueBtn}
                    />
                    <QuizNumBtn
                      num="15"
                      selectedNum={selectedNum}
                      handleAddValueBtn={handleAddValueBtn}
                    />
                    <QuizNumBtn
                      num="20"
                      selectedNum={selectedNum}
                      handleAddValueBtn={handleAddValueBtn}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[15px] flex justify-center gap-[12px]">
                <CheckButton
                  buttonText="취소"
                  handleButton={closeModalButton}
                  cancelBtn={true}
                />
                <CheckButton buttonText="생성" activate={inputValue} />
              </div>
            </div>
          ) : (
            <div className="w-[660px] h-[210px] rounded-[20px] bg-secondary_bg">
              <div className="flex flex-col ml-[32px] mt-[24px] gap-[16px]">
                <div className="text-[24px] font-bold">
                  15개의 퀴즈가 생성되었습니다!
                </div>
                <div className="text-[16px] text-gray_400 font-medium">
                  “노트 제목을 여기에 표시해 주세요” 노트에서 퀴즈를 생성했어요.
                </div>
              </div>
              <div className="mt-[40px] flex justify-center gap-[20px]">
                <button
                  onMouseEnter={() => setIsHovered1(true)}
                  onMouseLeave={() => setIsHovered1(false)}
                  className={`w-[160px] h-[48px] text-center text-[14px] text-gray_300 font-medium rounded-[4px] border-[1px] border-gray_200 bg-neutralwhite ${
                    isHovered1 ? "shadow-lg" : ""
                  }`}
                >
                  나중에 풀기
                </button>
                <button
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                  className={`w-[160px] h-[48px] text-center text-[14px] text-neutralwhite font-medium rounded-[4px] bg-primary_blue ${
                    isHovered2 ? "shadow-lg" : ""
                  }`}
                >
                  퀴즈 바로 풀기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CreateQuizModal;
