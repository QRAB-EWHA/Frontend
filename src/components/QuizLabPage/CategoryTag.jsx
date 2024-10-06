const CategoryTag = ({ tagText }) => {
  return (
    <div className="flex justify-center items-center pl-[8px] pr-[8px] h-[22px] bg-secondary_skyblue rounded-[4px] text-[12px] font-medium text-primary_blue">
      {tagText}
    </div>
  );
};
export default CategoryTag;
