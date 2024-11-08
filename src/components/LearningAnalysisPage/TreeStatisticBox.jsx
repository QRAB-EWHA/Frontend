import { ResponsiveContainer, Treemap } from "recharts";

const categoryQuizGenerations = [
  {
    categoryName: "네트워크",
    totalQuizGenerationCount: 15,
  },
  {
    categoryName: "자료구조",
    totalQuizGenerationCount: 10,
  },
  {
    categoryName: "운영체제",
    totalQuizGenerationCount: 8,
  },
  {
    categoryName: "알고리즘",
    totalQuizGenerationCount: 6,
  },
];

const TreeStatisticBox = () => {
  const COLORS = [
    "#2C4CBD",
    "#A0B2EF",
    "#00B9D2",
    "#FF817A",
    "#DE542D",
    "#499A4D",
    "#FEB916",
    "#A4A778",
    "#FFD4B1",
  ];

  const data = categoryQuizGenerations.map((it) => ({
    name: it.categoryName,
    value: it.totalQuizGenerationCount,
  }));

  return (
    <>
      <div className="w-[28.75rem] h-[18.25rem] rounded-[1rem] overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <Treemap
            data={data}
            dataKey="value"
            content={({ x, y, width, height, name, value, index }) => (
              <g>
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  style={{
                    fill: COLORS[Math.floor(index % 6)],
                  }}
                />
                <text
                  x={x + width / 2}
                  y={y + height / 2 - 10}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="16px"
                  fontFamily="Pretendard"
                  fontWeight="600"
                  fill="#fff"
                >
                  {`${value}`}
                </text>
                <text
                  x={x + width / 2}
                  y={y + height / 2 + 10}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="12px"
                  fontFamily="Pretendard"
                  fontWeight="500"
                  fill="#fff"
                >
                  {`${name}`}
                </text>
              </g>
            )}
          />
        </ResponsiveContainer>
      </div>
    </>
  );
};
export default TreeStatisticBox;
