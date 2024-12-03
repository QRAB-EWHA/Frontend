import { useEffect, useState } from "react";
import AnalysisCategoryTag from "./AnalysisCategoryTag";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/api/user";
import toggle from "../../assets/analysis/toggle.svg";
const data = {
  userAnalysis:
    "(사용자이름) 님은 컴퓨터 공학과 수학 카테고리에서 강점을 보이고 있어요. 특히, 네트워크와 운영체제 관련 문제에서 높은 정답률을 보이며, 이를 잘 이해하고 있네요. 통계와 확률 관련 문제에서도 높은 이해도를 보이고 있어요. 반면, 알고리즘과 물리학 카테고리에서는 낮은 정답률을 보이고 있어요. 특히 정렬과 검색 알고리즘에서 어려움을 겪고 있는 것으로 보이네요. 작용 반작용 법칙, 관성 법칙에 대한 이해도 또한 다소 낮아요.",
  strongCategories: {
    finalCategoryName: ["컴퓨터 공학", "수학"],
  },
  weakCategories: [
    {
      finalCategoryName: "알고리즘",
      studyTips: [
        "기초 정렬 알고리즘을 먼저 공부하세요. 기초 정렬 알고리즘은 ~.",
        "이진 검색과 같은 검색 알고리즘에 대한 기본 개념을 복습하세요. 검색 알고리즘은 ~.",
      ],
      references: [
        {
          title: "알고리즘 개론",
          link: "https://example.com/book/algorithm-introduction",
        },
        {
          title: "정렬 알고리즘 튜토리얼",
          link: "https://example.com/tutorial/sorting-algorithms",
        },
      ],
    },
    {
      finalCategoryName: "물리학",
      studyTips: [
        "기초 물리학 원리를 복습하세요. 기초 물리학에서 통용되는 주요 개념은 ~.",
        "뉴턴의 운동 법칙을 다시 학습해보세요. 뉴턴의 운동 법칙은 ~.",
      ],
      references: [
        {
          title: "기초 물리학",
          link: "https://example.com/book/physics-basics",
        },
        {
          title: "운동 법칙 강의",
          link: "https://example.com/lecture/motion-laws",
        },
      ],
    },
  ],
};

const DetailAnalysisBox = ({ detailedAnalyticsData }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [toggleStates, setToggleStates] = useState({}); // 각 항목의 토글 상태를 관리
  const {
    data: profileData,
    isError,
    error,
  } = useQuery({
    queryKey: ["profileData"],
    queryFn: getProfile,
  });

  useEffect(() => {
    if (detailedAnalyticsData.weakCategories.length > 0) {
      setSelectedCategory(
        detailedAnalyticsData.weakCategories[0].finalCategoryName
      );
    }
  }, []);

  const handleToggle = (index) => {
    setToggleStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <div className="flex flex-col mt-4 w-[58.75rem] text-base font-medium text-neutralBlack">
        {/* <p>
          {profileData.nickname}님은 {""}
          <span className="text-primary_blue">{getDetailedAnalysis.}</span>와{" "}
          <span className="text-primary_blue">외국어</span> 분야에서 전반적으로
          높은 이해도를 보이고 있습니다.
        </p>
        <br />
        <p>
          반면, <span className="text-primary_blue">컴퓨터 알고리즘</span>{" "}
          분야와 <span className="text-primary_blue">미분적분학</span>{" "}
          분야에서는 상대적으로 낮은 정답률을 보이며 추가 학습이 필요합니다.
        </p>
        <br />
        <p>
          아래의 추천 학습을 참고하여 취약한 분야를 추가적으로 학습해 보세요.
        </p> */}
        <div className="w-[58.75rem] whitespace-normal break-words leading-relaxed">
          {detailedAnalyticsData.userAnalysis}
        </div>
      </div>
      <div className="w-[58.75rem] mt-8 mb-4 border-t-[1px] border-gray_100"></div>
      <div className="flex gap-3 mb-[2.5rem]">
        {detailedAnalyticsData.weakCategories.map((it, index) => (
          <AnalysisCategoryTag
            key={index}
            isActive={selectedCategory === it.finalCategoryName}
            categoryName={it.finalCategoryName}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </div>
      {detailedAnalyticsData.weakCategories.map(
        (it, index) =>
          selectedCategory === it.finalCategoryName && (
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-6">
                <div className="text-xl font-semibold text-gray_400">
                  공부 팁
                </div>
                <div className="text-base font-medium whitespace-normal break-words leading-relaxed ">
                  {it.studyTips}
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="text-xl font-semibold text-gray_400">
                  추천 자료
                </div>
                <div className="flex gap-5 ">
                  {it.references.map((ref, refIndex) => (
                    <div className="flex flex-col gap-5">
                      <div
                        key={refIndex}
                        className="flex flex-col justify-center gap-2 w-[28.75rem] h-[5.875rem] px-8 rounded-[0.5rem] bg-white shadow-custom"
                      >
                        <div className="text-base font-medium">
                          {ref.title.length > 50
                            ? `${ref.title.slice(0, 50)}...`
                            : ref.title}
                        </div>
                        <div className="text-[0.8125rem] text-gray_400">
                          <a
                            href={ref.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {ref.link.length > 50
                              ? `${ref.link.slice(0, 50)}...`
                              : ref.link}
                          </a>
                        </div>
                      </div>
                      <div
                        onClick={() => handleToggle(`${index}-${refIndex}`)} // 유니크한 키로 토글 관리
                        className="flex gap-3 cursor-pointer"
                      >
                        <img
                          src={toggle}
                          className={`w-5 transition-transform duration-300 ${
                            toggleStates[`${index}-${refIndex}`]
                              ? "rotate-180"
                              : "rotate-90"
                          }`}
                          alt="toggle"
                        />
                        {!toggleStates[`${index}-${refIndex}`] && (
                          <div className="text-gray-400">
                            토글을 클릭해보세요
                          </div>
                        )}
                      </div>
                      {toggleStates[`${index}-${refIndex}`] && (
                        <pre className="w-[28.75rem] whitespace-pre-wrap break-words leading-relaxed">
                          {ref.content}
                        </pre>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
};
export default DetailAnalysisBox;
