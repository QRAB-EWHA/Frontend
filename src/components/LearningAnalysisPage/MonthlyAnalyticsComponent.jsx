import { useNavigate } from "react-router-dom";
import useIsBrightModeStore from "../../store/isBrightModeStore";
import RecordingCalendar from "./RecordingCalendar";
import StatisticBox from "./StatisticBox";
import StatisticTable from "./StatisticTable";
import { getThisMonthData } from "../../services/api/analytics";
import { useQuery } from "@tanstack/react-query";

const MonthlyAnalyticsComponent = () => {
  const { isBrightMode } = useIsBrightModeStore();
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  const {
    data: analyticsData,
    error,
    isError,
  } = useQuery({
    queryKey: ["analyticsData", year, month],
    queryFn: () => getThisMonthData(year, month),
  });
  return (
    <>
      <div
        className={`flex justify-center w-full ${
          isBrightMode ? "" : "rounded-t-[2.5rem]"
        } bg-secondary_bg`}
      >
        <div
          className={`flex flex-col gap-[4.5rem] w-[940px] ${
            isBrightMode ? "mt-[30px]" : "mt-[72px]"
          } `}
        >
          <RecordingCalendar detail={true} />
          <div className="font-semibold text-[20px] text-neutralblack">
            이번 달 통계
          </div>
          <div className="flex gap-6 mb-8">
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
              StatisticResult={`${(analyticsData.averageAccuracy * 100).toFixed(
                1
              )}%`}
            />
          </div>
          <div className="mb-[7.5rem]">
            <StatisticTable />
          </div>
        </div>
      </div>
    </>
  );
};
export default MonthlyAnalyticsComponent;
