import { useEffect, useState } from "react";
import AnalysisCategoryTag from "./AnalysisCategoryTag";

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

const DetailAnalysisBox = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (data.weakCategories.length > 0) {
      setSelectedCategory(data.weakCategories[0].finalCategoryName);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col mt-4 w-[58.75rem] text-base font-medium text-neutralBlack">
        <p>
          ooo님은 <span className="text-primary_blue">컴퓨터공학과</span>와{" "}
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
        </p>
      </div>
      <div className="w-[58.75rem] mt-8 mb-4 border-t-[1px] border-gray_100"></div>
      <div className="flex gap-3 mb-[2.5rem]">
        {data.weakCategories.map((it, index) => (
          <AnalysisCategoryTag
            isActive={selectedCategory === it.finalCategoryName}
            categoryName={it.finalCategoryName}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </div>
      {data.weakCategories.map(
        (it, index) =>
          selectedCategory === it.finalCategoryName && (
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-6">
                <div className="text-xl font-semibold text-gray_400">
                  공부 팁
                </div>
                <div className="text-base font-medium">{it.studyTips}</div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="text-xl font-semibold text-gray_400">
                  추천 자료
                </div>
                <div className="flex gap-5 ">
                  {it.references.map((ref, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-center gap-2 w-[28.75rem] h-[5.875rem] px-8 rounded-[0.5rem] bg-white shadow-custom"
                    >
                      <div className="text-base font-medium">{ref.title}</div>
                      <div className="text-[0.8125rem] text-gray_400">
                        <a
                          href={ref.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {ref.link}
                        </a>
                      </div>
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
