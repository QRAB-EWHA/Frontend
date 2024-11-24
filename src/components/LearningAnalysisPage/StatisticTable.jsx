import { useQuery } from "@tanstack/react-query";
import StatisticElement from "./StatisticElement";
import { getCategoryAnalytics } from "../../services/api/analytics";

// const categoryAnalysisData = [
//   {
//     parentCategoryName: "데이터베이스",
//     categoryName: "정규화",
//     solvedQuizCount: 18,
//     categoryAccuracy: 100,
//   },
//   {
//     parentCategoryName: "컴퓨터공학",
//     categoryName: null,
//     solvedQuizCount: 27,
//     categoryAccuracy: 92,
//   },
//   {
//     parentCategoryName: "디자인",
//     categoryName: "타이포그래피",
//     solvedQuizCount: 18,
//     categoryAccuracy: 60.8,
//   },
//   {
//     parentCategoryName: "디자인",
//     categoryName: "블렌더",
//     solvedQuizCount: 80,
//     categoryAccuracy: 50,
//   },
//   {
//     parentCategoryName: "경영학",
//     categoryName: null,
//     solvedQuizCount: 12,
//     categoryAccuracy: 100,
//   },
// ];
const StatisticTable = () => {
  const {
    data: categoryAnalyticsData,
    isError,
    error,
  } = useQuery({
    queryKey: ["categoryAnalyticsData", "overall"],
    queryFn: () => getCategoryAnalytics("overall"),
  });

  console.log(categoryAnalyticsData);
  const isLast = categoryAnalyticsData.length;
  return (
    <>
      <StatisticElement />
      {categoryAnalyticsData.map((it, index) => (
        <StatisticElement
          categoryName={
            it.parentCategoryName ? it.parentCategoryName : it.categoryName
          }
          subCategoryName={it.parentCategoryName ? it.categoryName : ""}
          quizNum={it.solvedQuizCount}
          avgCorrectRate={it.categoryAccuracy * 100}
          index={index + 1}
          isLast={index === isLast - 1}
        />
      ))}
    </>
  );
};
export default StatisticTable;
