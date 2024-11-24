import useIsBrightModeStore from "../../store/isBrightModeStore";
import RecordingCalendar from "./RecordingCalendar";
import StatisticBox from "./StatisticBox";
import right_arrow from "../../assets/analysis/right_arrow.svg";
import { useNavigate } from "react-router-dom";

const TotalView = ({ analyticsData }) => {
  console.log(analyticsData);
  const navigate = useNavigate();
  const { isBrightMode } = useIsBrightModeStore();
  return (
    <>
      <div
        className={`flex justify-center w-full ${
          isBrightMode ? "" : "rounded-t-[2.5rem]"
        } bg-secondary_bg`}
      >
        <div
          className={`${
            isBrightMode ? "mt-[30px]" : "mt-[72px]"
          } w-[940px] flex flex-col gap-6`}
        >
          <div className="font-semibold text-[20px] text-neutralblack">
            이번 달 통계
          </div>
          <div className="flex gap-6 mb-4">
            <StatisticBox
              boxName="이번 달 학습일"
              boxSubText="퀴즈를 풀이한 날짜를 기준으로 측정됩니다."
              StatisticResult={analyticsData.learningDays}
            />
            <StatisticBox
              boxName="풀이한 퀴즈 문제 수"
              boxSubText="이번 달 풀이한 퀴즈 문제 수를 확인하세요."
              StatisticResult={analyticsData.solvedQuizCount}
            />
            <StatisticBox
              boxName="평균 정답률"
              boxSubText="이번 달 풀이한 퀴즈의 평균 정답률이에요."
              StatisticResult={`${analyticsData.averageAccuracy * 100}%`}
            />
          </div>
          <div className="mb-[15rem]">
            <RecordingCalendar detail={true} />
          </div>
          <div className="flex justify-center mb-[11.25rem]">
            <button
              onClick={() => navigate("/learning-analysis/monthly")}
              className="flex justify-center items-center gap-6 w-[34rem] h-18 px-[3em] py-6 rounded-[2.5rem] bg-primary_blue text-lg font-semibold text-white"
            >
              더 자세한 분석 결과를 확인하려면 여기를 클릭하세요!
              <img src={right_arrow} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TotalView;
