import { useEffect, useState } from "react";
import close_icon from "../../../assets/common/close_icon.svg";
import QuizNumBtn from "../Button/QuizNumBtn";
import Button from "../../Common/Button";
import useIsCreateQuizModalStore from "../../../store/isCreateQuizModalStore";
import CheckButton from "../../NoteStorePage/Button/CheckButton";
import useNoteTitleStore from "../../../store/useNoteTitleStore";
import useNoteIdStore from "../../../store/useNoteIdStore";
import { postNewQuiz, postReQuiz } from "../../../services/api/quizLab";
import LoadingSpinner from "../../Common/LoadingSpinner";
import useGeneratedQuizNumStore from "../../../store/generatedQuizNum";
import { useNavigate } from "react-router-dom";
import useIsBrightModeStore from "../../../store/isBrightModeStore";
const CreateQuizModal = ({ setModal }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedNum, setSelectedNum] = useState(null);
  const [QuizCreateComplete, setQuizCreateComplete] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [selectedQuizType, setSelectedQuizType] = useState("reviewQuiz");
  const [reCreate, setReCreate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createdQuizSetId, setCreatedQuizSet] = useState();
  const { noteTitle } = useNoteTitleStore();
  const { noteId } = useNoteIdStore();
  const { generatedQuizNum } = useGeneratedQuizNumStore();
  const { setIsCreateQuizModal } = useIsCreateQuizModalStore();
  const { setIsBrightMode } = useIsBrightModeStore();
  const navigate = useNavigate();

  const handleCreateButton = async () => {
    setLoading(true);
    try {
      if (generatedQuizNum != 0 && selectedQuizType === "reviewQuiz") {
        const quizNum = {
          noteId: noteId,
          totalQuestions: inputValue,
          quizType: "review",
        };
        console.log(quizNum);
        const res = await postReQuiz(quizNum);
        setCreatedQuizSet(res.quizSetId);
        console.log(res);
        setLoading(false);
        setQuizCreateComplete(true);
      } else {
        const quizNum = {
          noteId: noteId,
          totalQuestions: inputValue,
        };
        console.log(quizNum);

        const res = await postNewQuiz(quizNum);
        console.log(res);
        setCreatedQuizSet(res.quizSetId);
        setLoading(false);
        setQuizCreateComplete(true);
      }
    } catch (error) {
      console.log("퀴즈 생성 실패", error);
      setLoading(false);
    }
  };

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

  const handleLaterSolve = () => {
    window.location.reload();
  };

  const handleGotoSolve = () => {
    setIsBrightMode(true);
    setIsCreateQuizModal(false);
    navigate(`/solvequiz/quizset/${noteId}/solving/${createdQuizSetId}`);
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
          {loading && <LoadingSpinner loadingText="퀴즈를 생성 중이에요" />}
          {!loading && (
            <>
              <div className="text-[16px] font-semibold mt-[32px]">
                {generatedQuizNum > 0 ? "퀴즈 재생성하기" : "퀴즈 생성하기"}
              </div>
              {!QuizCreateComplete ? (
                <div className="w-[660px] h-[210px] rounded-[20px] border-[2px] border-gray_100">
                  <div className="relative flex flex-col  ml-[32px] mt-[24px]">
                    <div className=" text-[20px] font-semibold">
                      {noteTitle.length > 45
                        ? `${noteTitle.slice(0, 45)}...`
                        : noteTitle}
                    </div>
                    {generatedQuizNum > 0 && (
                      <div className="absolute top-7 flex gap-[17px] text-[14px] text-primary_blue font-medium">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="quizType"
                            value="newQuiz"
                            checked={selectedQuizType === "newQuiz"}
                            onChange={(e) =>
                              setSelectedQuizType(e.target.value)
                            }
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
                            onChange={(e) =>
                              setSelectedQuizType(e.target.value)
                            }
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
                    <Button
                      type="secondary"
                      width="6rem"
                      height="2.5rem"
                      buttonText="취소"
                      handleButton={closeModalButton}
                    />
                    <Button
                      width="6rem"
                      height="2.5rem"
                      buttonText="생성"
                      handleButton={handleCreateButton}
                    />
                  </div>
                </div>
              ) : (
                <div className="w-[660px] h-[210px] rounded-[20px] bg-secondary_bg">
                  <div className="flex flex-col ml-[32px] mt-[24px] gap-[16px]">
                    <div className="text-[24px] font-bold">
                      {inputValue}개의 퀴즈가 생성되었습니다!
                    </div>
                    <div className="text-[16px] text-gray_400 font-medium">
                      {noteTitle} 노트에서 퀴즈를 생성했어요.
                    </div>
                  </div>
                  <div className="mt-[40px] flex justify-center gap-[20px]">
                    <button
                      onMouseEnter={() => setIsHovered1(true)}
                      onMouseLeave={() => setIsHovered1(false)}
                      onClick={handleLaterSolve}
                      className={`w-[160px] h-[48px] text-center text-[14px] text-gray_300 font-medium rounded-[4px] border-[1px] border-gray_200 bg-neutralwhite ${
                        isHovered1 ? "shadow-lg" : ""
                      }`}
                    >
                      나중에 풀기
                    </button>
                    <button
                      onMouseEnter={() => setIsHovered2(true)}
                      onMouseLeave={() => setIsHovered2(false)}
                      onClick={handleGotoSolve}
                      className={`w-[160px] h-[48px] text-center text-[14px] text-neutralwhite font-medium rounded-[4px] bg-primary_blue ${
                        isHovered2 ? "shadow-lg" : ""
                      }`}
                    >
                      퀴즈 바로 풀기
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default CreateQuizModal;
