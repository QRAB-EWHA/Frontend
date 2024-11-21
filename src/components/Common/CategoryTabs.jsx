import { useState } from "react";
import {
  getCategoryChild,
  getCategoryFilterData,
} from "../../services/api/noteStore";
import FirstCategoryTab from "../NoteStorePage/FirstCategoryTab";
import SecondCategoryTab from "../NoteStorePage/SecondCategoryTab";
import check from "../../assets/storenotepage/check.svg";
import edit_category from "../../assets/storenotepage/edit_category_icon.svg";
import useIsSelectCategoryModal from "../../store/isSelectCategoryModalStore";

const CategoryTabs = ({
  categoryData,
  noteData = [],
  setSelectedNotes,
  editable = false,
  width = "920px",
  quizPage = false,
}) => {
  const [selectTab, setSelectTab] = useState(0);
  const [selectSecondTab, setSelectSecondTab] = useState(0);
  const [selectTotalTab, setSelectTotalTab] = useState(true);
  const [selectTotalSecondTab, setSelectTotalSecondTab] = useState(true);
  const [secondCategory, setSecondCategory] = useState([]);
  const [editButtonHovered, setEditButtonHovered] = useState(false);
  const { setIsSelectCategoryModal } = useIsSelectCategoryModal();

  const getSecondCategory = async (id) => {
    try {
      const res = await getCategoryChild(id);
      console.log("2계층 카테고리 가져오기 성공", res);
      setSecondCategory(res.childCategories);
    } catch (error) {
      console.log("2계층 카테고리 가져오기 실패", error);
    }
  };

  const handleTotalTabClick = () => {
    setSelectTotalTab(true);
    setSelectTab();
    setSelectSecondTab();
    setSecondCategory([]);
    {
      noteData && setSelectedNotes(quizPage ? noteData : noteData.sixNotesInfo);
    }
  };

  // const handleTotalSecondTabClick = () => {
  //   // setSelectTotalSecondTab(true);
  //   setSelectSecondTab();
  //   FilteredNote(selectTab);
  // };

  const handleTabClick = (id) => {
    setSelectTotalTab(false); //특정 부모 카테고리를 누르면 전체 카테고리 클릭 여부는 false
    setSelectTab(id);
    // setSelectTotalSecondTab(false);
    setSelectSecondTab();
    getSecondCategory(id); //부모 카테고리에 해당하는 자식 카테고리 가져오기 api 연결
    {
      noteData && FilteredNote(id);
    } //카테고리 별 노트 조회 api 연결
  };

  const FilteredNote = async (id) => {
    console.log(id);
    const res = await getCategoryFilterData(id, 0);
    // if (selectTotalSecondTab) {
    //   const childNotesPromises = res.childCategories.map(async (it) => {
    //     const childNotes = await getCategoryFilterData(it.id, 0);
    //     return childNotes.sixNotesInfo; // 반환된 값을 배열에 저장
    //   });

    //   // 모든 비동기 작업을 기다림
    //   const allChildNotes = await Promise.all(childNotesPromises);

    //   // selectedNotes를 업데이트
    //   const selectedNotes = allChildNotes.flat(); // 다차원 배열을 평탄화
    //   setSelectedNotes(selectedNotes);
    // } else {
    setSelectedNotes(res.sixNotesInfo); // 선택된 카테고리 별로 필터링 된 노트들
  };

  const handleSecondTabClick = (id) => {
    setSelectSecondTab(id);
    // setSelectTotalSecondTab(false);
    {
      noteData && FilteredNote(id);
    }
  };

  const handleSelectCategoryTab = () => {
    setIsSelectCategoryModal(true);
  };

  return (
    <>
      <div className="relative flex flex-col">
        <div className="flex items-center gap-2 mt-6">
          {editable && !editButtonHovered ? (
            <div
              onMouseEnter={() => {
                setEditButtonHovered(true);
              }}
              onMouseLeave={() => {
                setEditButtonHovered(false);
              }}
              className="flex justify-center items-center w-9 h-9 rounded-full bg-secondary_skyblue cursor-pointer"
            >
              <div className="w-4 h-4">
                <img src={edit_category} />
              </div>
            </div>
          ) : (
            editable && (
              <div
                onMouseEnter={() => {
                  setEditButtonHovered(true);
                }}
                onMouseLeave={() => {
                  setEditButtonHovered(false);
                }}
                onClick={handleSelectCategoryTab}
                className="flex justify-center items-center gap-2 w-[9rem] h-[2.3125rem] rounded-[2.5rem] bg-secondary_skyblue cursor-pointer"
              >
                <div className="w-4 h-4">
                  <img src={edit_category} />
                </div>
                <div className="text-sm font-medium text-primary_blue">
                  카테고리 편집
                </div>
              </div>
            )
          )}

          <div
            style={{ width: width }}
            className="flex gap-[8px] scrollbarhidden"
          >
            {noteData && (
              <div
                onClick={handleTotalTabClick}
                className={`${
                  selectTotalTab &&
                  "text-primary_blue border-[1px] border-primary_blue border"
                }flex justify-center cursor-pointer flex items-center text-[14px] text-gray_400 bg-neutralwhite border-[1px] border-gray_200 rounded-[40px] h-[37px] pl-[16px] pr-[16px] pt-[10px] pb-[10px] hover:text-primary_blue hover:border-[1px] hover:border-primary_blue`}
              >
                {selectTotalTab && (
                  <img src={check} alt="Selected" className="mr-[8px]" />
                )}
                전체
              </div>
            )}
            {categoryData &&
              categoryData.map((it, index) => (
                <FirstCategoryTab
                  key={index}
                  firstTab={categoryData}
                  tabName={it.name}
                  index={it.id}
                  handleTabClick={handleTabClick}
                  selectTab={selectTab}
                />
              ))}
          </div>
        </div>
        <div
          style={{ width: width }}
          className="border-b-[1px] border-gray_100 my-4"
        ></div>

        <div className="flex gap-[8px]">
          {/* {secondCategory.length != 0 && (
            <div
              onClick={handleTotalSecondTabClick}
              className={`${
                selectTotalSecondTab &&
                "cursor-pointer text-primary_blue border-[1px] border-primary_blue border"
              } flex items-center text-[14px] text-gray_400 bg-neutralwhite border-[1px] border-gray_200 rounded-[40px] h-[32px] pl-[16px] pr-[16px] pt-[10px] pb-[10px] hover:text-primary_blue hover:border-[1px] hover:border-primary_blue`}
            >
              {selectTotalSecondTab && (
                <img src={check} alt="Selected" className="mr-[8px]" />
              )}
              전체
            </div>
          )} */}
          {secondCategory.map((it) => (
            <SecondCategoryTab
              secondTab={secondCategory}
              tabName={it.name}
              index={it.id}
              handleTabClick={handleSecondTabClick}
              selectTab={selectSecondTab}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default CategoryTabs;
