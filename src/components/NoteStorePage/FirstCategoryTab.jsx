import check from "../../assets/storenotepage/check.svg";
import redcheck from "../../assets/storenotepage/red_check.svg";

const FirstCategoryTab = ({
  selectTab,
  firstTab,
  index,
  tabName,
  handleTabClick,
  CategoryDelete,
}) => {
  return (
    <div
      onClick={() => handleTabClick(index, tabName)}
      className={`flex justify-center cursor-pointer ${
        (CategoryDelete ? selectTab.includes(index) : selectTab === index)
          ? `${
              CategoryDelete
                ? "text-neutralred border-[1px] border-neutralred"
                : "text-primary_blue border-[1px] border-primary_blue"
            }`
          : ""
      } ${
        CategoryDelete
          ? "hover:text-neutralred hover:border-[1px] hover:border-neutralred"
          : "hover:text-primary_blue hover:border-[1px] hover:border-primary_blue"
      } flex items-center text-[14px] text-gray_400 bg-neutralwhite border-[1px] border-gray_200 rounded-[40px] h-[37px] pl-[16px] pr-[16px] pt-[10px] pb-[10px]`}
    >
      {(CategoryDelete ? selectTab.includes(index) : selectTab === index) &&
      CategoryDelete ? (
        <img src={redcheck} alt="redSelected" className="mr-[8px]" />
      ) : (
        (CategoryDelete ? selectTab.includes(index) : selectTab === index) && (
          <img src={check} alt="Selected" className="mr-[8px]" />
        )
      )}
      {tabName}
    </div>
  );
};
export default FirstCategoryTab;
