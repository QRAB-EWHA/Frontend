import TreeStatisticBox from "./TreeStatisticBox";
import WordStatisticAnalysis from "./WordStatisticAnalysis";

const WeakCategoryAnalysis = ({ weakCategoryData }) => {
  return (
    <>
      <div className="flex gap-5">
        <TreeStatisticBox weakCategoryData={weakCategoryData} />
      </div>
    </>
  );
};
export default WeakCategoryAnalysis;
