import constellation from "../../assets/main/stars/november/full.svg";
import down_arrow from "../../assets/main/down_arrow.svg";
import december from "../../assets/main/stars/december/default.svg";
import MyNote from "./MyNote";
import MyQuiz from "./MyQuiz";
import SolvedQuizComponent from "./SolvedQuizComponent";
import StudyRecordingBox from "./StudyRecordingBox";
import RankingBox from "./RankingBox";

import { getMain } from "../../services/api/main";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const MainComponent = () => {
  const {
    data: mainData,
    isError,
    error,
  } = useQuery({
    queryKey: ["mainData"],
    queryFn: getMain,
  });

  if (isError) {
    console.error(error); // 에러 처리
  }

  const handleScroll = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="relative">
        <div className="flex justify-center">
          <div className="relative flex flex-col items-center">
            <div className="mb-4 text-2xl font-semibold text-white">
              {"학습을 통해 별자리를 완성해 보세요!"}
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

            <div
              onClick={handleScroll}
              className="flex items-center justify-center gap-2 w-[8.4375rem] h-[2.125rem] px-3 mb-[3.5rem] py-[0.38rem] rounded-[1.5rem] bg-[#494949] cursor-pointer"
            >
              <div className="text-base font-medium text-white">
                나의 노트보기
              </div>
              <img src={down_arrow} />
            </div>

            <div className="absolute top-[5rem] right-[-25rem]">
              <div className="flex flex-col gap-6">
                <StudyRecordingBox mainData={mainData} />
                <RankingBox mainData={mainData} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-1/4">
          <img src={december} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-12 w-full h-[45.25rem] bg-secondary_bg">
        <div className="flex flex-col gap-10 w-[65rem]">
          <MyNote mainData={mainData} />
          <MyQuiz mainData={mainData} />
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 w-full h-screen min-h-[58.25rem] px-10 pt-[2.5rem] bg-white">
        <div className="flex flex-col w-[65rem] gap-2">
          <div className="text-xl font-semibold text-neutralBlack">
            최근 틀린 퀴즈
          </div>
          <div className="text-base font-medium text-gray_400">
            틀린 문제를 확인하고 다시 도전해 보세요!
          </div>
          <div className="flex flex-col gap-8 mt-6">
            <SolvedQuizComponent mainData={mainData} />
          </div>
        </div>
      </div>
    </>
  );
};
export default MainComponent;
