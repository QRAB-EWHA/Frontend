import constellation from "../../assets/main/stars/november/full.svg";
import december from "../../assets/main/stars/december/default.svg";
import { useNavigate } from "react-router-dom";
import right_arrow from "../../assets/analysis/right_arrow.svg";
import GoButton from "./Button/GoButton";

const IntroComponent = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative">
        <div className="flex justify-center">
          <div className="relative flex flex-col items-center">
            <div className="mb-4 text-2xl font-semibold text-white">
              {"회원가입 후 나만의 별자리를 만들어 보세요! "}
            </div>
            <div className="mb-[6rem] text-base font-medium text-white">
              퀴즈를 풀면 별이 밝혀집니다
            </div>

            <div className=" w-full mb-[6rem]" style={{ maxWidth: "100%" }}>
              <div className="w-full relative " style={{ height: "auto" }}>
                <img
                  src={constellation}
                  style={{ width: "100%", height: "auto" }}
                  alt="constellation"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-1/4">
          <img src={december} />
        </div>
      </div>

      <div className="relative flex justify-center mb-[11.25rem]">
        <GoButton text="회원가입 하러 가기" url="/signup" />
      </div>
    </>
  );
};
export default IntroComponent;
