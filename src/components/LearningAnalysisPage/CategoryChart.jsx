import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  layouts,
} from "chart.js";
import { callback } from "chart.js/helpers";
import MonthSortingDropdown from "./MonthSortingDropdown";
import { getCategoryAnalytics } from "../../services/api/analytics";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// Chart.js 구성 요소 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CategoryChart = ({}) => {
  const [initialValue, setInitialValue] = useState("전체 기간");
  const [dropDownClick, setDropDownClick] = useState(false);

  const formattedPeriod = (period) => {
    if (period === "전체 기간") return "overall";
    if (period === "최근 1개월") return "1_month";
    if (period === "최근 3개월") return "3_months";
    if (period === "최근 6개월") return "6_months ";
  };

  const {
    data: categoryAnalyticsData,
    isError,
    error,
  } = useQuery({
    queryKey: ["categoryAnalyticsData", initialValue],
    queryFn: () => getCategoryAnalytics(formattedPeriod(initialValue)),
  });

  // const categories = [
  //   {
  //     parentCategoryName: "컴퓨터공학",
  //     categoryName: "운영체제",
  //   },
  //   {
  //     parentCategoryName: "디자인",
  //     categoryName: "타이포그래피",
  //   },
  //   {
  //     parentCategoryName: "프로그래밍",
  //     categoryName: "알고리즘",
  //   },
  // ];
  const data = {
    labels: categoryAnalyticsData.map(
      ({ parentCategoryName, categoryName }) =>
        `${parentCategoryName ? parentCategoryName : categoryName} ${
          parentCategoryName ? `- ${categoryName}` : ""
        }`
    ),

    datasets: [
      {
        label: "풀이한 퀴즈 수",
        data: categoryAnalyticsData.map((it) => it.solvedQuizCount),
        backgroundColor: "#d7dbec",
        borderRadius: 8,
        barThickness: 10,
      },
      {
        label: "정답률",
        data: categoryAnalyticsData.map((it) => it.categoryAccuracy * 100),
        backgroundColor: "#1e5eff",
        borderRadius: 8,
        barThickness: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          autoSkip: true, // 자동으로 일부 레이블 숨기기
          maxRotation: 0, // 레이블 회전 방지
          minRotation: 0,
          color: "#A6A6A6",
          font: {
            family: "Pretendard",
            size: 13,
          },
        },
        // x축 스크롤을 위한 설정
        offset: true,
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          color: "#A6A6A6",
          font: {
            family: "Pretendard",
            size: 13, // 0.8125rem에 해당
          },
          callback: (value) => `${value}%`, // 퍼센트로 표시
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
      //   legend: {
      //     position: "top",
      //     align: "start",
      //     labels: {
      //       padding: 24,
      //       font: {
      //         family: "Pretendard",
      //         size: 14,
      //         style: "medium",
      //       },
      //       color: "#5A607F",
      //       boxWidth: 12,
      //       boxHeight: 12,
      //     },
      //   },
    },
  };

  return (
    <>
      <div className="relative flex justify-center items-end w-[58.75rem] h-[25rem] px-8 pt-[2.7rem] pb-4 rounded-[1rem] bg-white">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex gap-6 mb-10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-[0.13rem] bg-[#D7DBEC]"></div>
                <div className="text-[#5A607F] text-sm font-medium">
                  풀이한 퀴즈 수
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-[0.13rem] bg-[#1E5EFF]"></div>
                <div className="text-[#5A607F] text-sm font-medium">정답률</div>
              </div>
            </div>
            <MonthSortingDropdown
              initialValue={initialValue}
              setInitialValue={setInitialValue}
              dropDownClick={dropDownClick}
              setDropDownClick={setDropDownClick}
            />
          </div>
          <div className="flex justify-center w-[54.75rem] h-[16rem]">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoryChart;
