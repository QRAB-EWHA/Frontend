import { useEffect } from "react";

const StudyRecordingBox = ({ mainData }) => {
  useEffect(() => {
    console.log(mainData);
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center gap-2 w-[16.5rem] h-[8.75rem] px-6 border-[1px] border-white rounded-[1rem] bg-[rgba(255,255,255,0.10)]">
        <div className="text-xl font-semibold text-white">학습 기록</div>
        <div className="flex gap-2">
          <div className="text-base font-semibold text-gray_300">
            연속 학습 일수
          </div>
          <div className="text-base font-semibold text-secondary_yellow">
            {mainData.consecutiveLearningDays}일
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-base font-semibold text-gray_300">
            이번 달 학습 일수
          </div>
          <div className="text-base font-semibold text-secondary_yellow">
            {mainData.totalLearningDays}일
          </div>
        </div>
      </div>
    </>
  );
};
export default StudyRecordingBox;
