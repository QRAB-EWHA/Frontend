import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/api/user";
import useIsBrightModeStore from "../../store/isBrightModeStore";
import CategoryChart from "./CategoryChart";
import DetailAnalysisBox from "./DetailAnalysisBox";
import TreeStatisticBox from "./TreeStatisticBox";
import WeakCategoryAnalysis from "./WeakCategoryAnalysis";
import {
  getDetailedAnalysis,
  getWeakCategory,
  postDetailedAnalysis,
} from "../../services/api/analytics";
import { useEffect, useState } from "react";

const DetailAnalyticsComponent = () => {
  const { isBrightMode } = useIsBrightModeStore();
  const [detailedData, setDetailedData] = useState();

  useEffect(() => {
    if (!detailedData) {
      const createAnalysis = async () => {
        const res = await postDetailedAnalysis();
        setDetailedData(res);
        console.log(res);
      };
      createAnalysis();
    }
  }, []);

  const {
    data: profileData,
    isError,
    error,
  } = useQuery({
    queryKey: ["profileData"],
    queryFn: getProfile,
  });

  const { data: weakCategoryData } = useQuery({
    queryKey: ["weakCategoryData"],
    queryFn: getWeakCategory,
  });

  const { data: detailedAnalyticsData } = useQuery({
    queryKey: ["detailedAnalyticsData"],
    queryFn: getDetailedAnalysis,
  });

  console.log(detailedAnalyticsData);

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
          <div className="text-2xl font-semibold text-neutralblack">
            카테고리별 학습 분석
          </div>
          <CategoryChart />
          <div className="text-2xl font-semibold text-neutralblack">
            취약 카테고리 분석
          </div>
          <div className="flex">
            <span className="text-xl font-medium text-neutralBlack">
              {profileData?.nickname} 님은
            </span>
            <span className="ml-2 text-xl font-semibold text-primary_blue">
              {weakCategoryData?.lowestAccuracyCategory?.categoryName}
            </span>
            <span className="ml-1 text-xl font-medium text-neutralBlack">
              카테고리에 가장 취약해요
            </span>
          </div>
          <div className="mb-[2.5rem]">
            <WeakCategoryAnalysis weakCategoryData={weakCategoryData} />
          </div>
          <div className="mb-[10rem]">
            <div className="text-2xl font-semibold text-neutralblack">
              상세 분석
            </div>
            <DetailAnalysisBox detailedAnalyticsData={detailedAnalyticsData} />
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailAnalyticsComponent;
