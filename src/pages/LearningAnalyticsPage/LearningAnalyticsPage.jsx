import { useQuery } from "@tanstack/react-query";
import PageDefauleTemplate from "../../components/Common/PageDefauleTemplate";
import TotalView from "../../components/LearningAnalysisPage/TotalView";
import { getThisMonthData } from "../../services/api/analytics";

const LearningAnalyticsPage = () => {
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
  console.log(analyticsData);
  return (
    <>
      <PageDefauleTemplate pageName="학습 분석">
        <TotalView analyticsData={analyticsData} />
      </PageDefauleTemplate>
    </>
  );
};
export default LearningAnalyticsPage;
