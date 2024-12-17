import empty_check from "../../assets/solvequizpage/empty_check.svg";
import selected_checked from "../../assets/solvequizpage/selected_checked.svg";
import correct_checked from "../../assets/solvequizpage/answer_checked.svg";
import GoButton from "./Button/GoButton";

const data = [
  {
    quizId: 68,
    question:
      "VSCode에서 Jupyter Notebook 파일을 HTML로 변환하기 위해 사용하는 명령어는 무엇인가?",
    choices: [
      "a. jupyter convert --to html {파일 경로.ipynb}",
      "b. jupyter nbconvert --to html {파일 경로.ipynb}",
      "c. jupyter notebook --to html {파일 경로.ipynb}",
      "d. jupyter htmlconvert {파일 경로.ipynb}",
    ],
    selectedAnswer: 0,
    correctAnswer: 1,
    correct: false,
  },
  {
    quizId: 69,
    question: "nbconvert가 지원하는 파일 형식 중 하나가 아닌 것은 무엇인가?",
    choices: ["a. HTML", "b. PDF", "c. Markdown", "d. DOCX"],
    selectedAnswer: 1,
    correctAnswer: 3,
    correct: false,
  },
  {
    quizId: 70,
    question:
      "VSCode에서 Jupyter Notebook 파일을 변환할 때 nbconvert가 설치되어 있지 않을 경우, 어떤 명령어로 설치할 수 있는가?",
    choices: [
      "a. pip install jupyter",
      "b. pip install nbconvert",
      "c. conda install nbconvert",
      "d. install nbconvert",
    ],
    selectedAnswer: 2,
    correctAnswer: 1,
    correct: false,
  },
];

const SolvedQuizComponent = ({ mainData }) => {
  return (
    <>
      {mainData.recentWrongQuizzes.length === 0 ? (
        <div className="flex justify-center w-full">
          <GoButton
            text="최근 틀린 퀴즈가 없어요!"
            subText="퀴즈 풀러 가기"
            url="/solvequiz"
          />
        </div>
      ) : (
        mainData.recentWrongQuizzes.map((it, index) => (
          <>
            <div className="flex items-center w-[58.75rem] h-auto py-6 pl-8 rounded-[1rem] bg-secondary_bg shadow-custom">
              <div className="flex flex-col gap-6">
                <div className="text-base font-medium text-neutralBlack">
                  {it.question}
                </div>
                <div className="flex flex-col gap-3">
                  {it.choices.map((choice, index) => (
                    <div key={index} className="flex gap-[0.94rem]">
                      {index === it.selectedAnswer ? (
                        <img src={selected_checked} />
                      ) : index === it.correctAnswer ? (
                        <img src={correct_checked} />
                      ) : (
                        <img src={empty_check} />
                      )}
                      <div
                        className={`text-base font-medium text-gray_400 ${
                          index === it.selectedAnswer ? "line-through" : ""
                        }`}
                      >
                        {choice}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ))
      )}
    </>
  );
};
export default SolvedQuizComponent;
