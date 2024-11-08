// import { useState } from "react";
// // import ReactWordcloud from "react-wordcloud";

// const categoryQuizGenerations = [
//   {
//     categoryName: "네트워크",
//     totalQuizGenerationCount: 15,
//   },
//   {
//     categoryName: "자료구조",
//     totalQuizGenerationCount: 10,
//   },
//   {
//     categoryName: "운영체제",
//     totalQuizGenerationCount: 8,
//   },
//   {
//     categoryName: "알고리즘",
//     totalQuizGenerationCount: 6,
//   },

//   {
//     categoryName: "React",
//     totalQuizGenerationCount: 15,
//   },
//   {
//     categoryName: "JavaScript",
//     totalQuizGenerationCount: 10,
//   },
//   {
//     categoryName: "CSS",
//     totalQuizGenerationCount: 5,
//   },
//   {
//     categoryName: "TypeScript",
//     totalQuizGenerationCount: 20,
//   },
//   {
//     categoryName: "데이터베이스",
//     totalQuizGenerationCount: 30,
//   },
//   {
//     categoryName: "JAVA",
//     totalQuizGenerationCount: 10,
//   },
//   {
//     categoryName: "C언어",
//     totalQuizGenerationCount: 5,
//   },
// ];

// const WordStatisticAnalysis = () => {
//   const wordData = categoryQuizGenerations.map((it, index) => ({
//     text: it.categoryName,
//     text: it.categoryName,
//     value: it.totalQuizGenerationCount,
//   }));

//   const options = {
//     rotations: 0, // 글씨가 회전하지 않도록 설정
//     rotationAngles: [0, 0], // 모든 글씨가 똑바로 표시
//     scale: "sqrt", // 텍스트 크기가 점진적으로 줄어드는 효과
//     fontSizes: [10, 40], // 최소 및 최대 글씨 크기 설정
//     fontFamily: "Pretendard",
//   };

//   return (
//     <>
//       <div className="w-[28.75rem] h-[18.25rem] rounded-[1rem] bg-white">
//         <ReactWordcloud words={wordData} options={options} />
//       </div>
//     </>
//   );
// };
// export default WordStatisticAnalysis;
