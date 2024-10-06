import { useEffect, useState } from "react";
import addCategoryImg from "../../assets/storenotepage/add_category.svg";
import addNoteImg from "../../assets/storenotepage/add_note.svg";
import AddButton from "./AddButton";
import RecentNote from "./recentNote";
import icon1 from "../../assets/storenotepage/category_icon1.svg";
import icon2 from "../../assets/storenotepage/category_icon2.svg";
import icon3 from "../../assets/storenotepage/category_icon3.svg";
import edit_category from "../../assets/storenotepage/edit_category_icon.svg";
import edit_category_hover from "../../assets/storenotepage/edit_category_hover.svg";
import FirstCategoryTab from "./FirstCategoryTab";
import SecondCategoryTab from "./SecondCategoryTab";
import StoredNote from "./StoredNote";
import noteIcon1 from "../../assets/storenotepage/note_icon1.svg";
import addNoteHovering from "../../assets/storenotepage/add_note_hovering.svg";
import addCategoryHovering from "../../assets/storenotepage/add_category_hovering.svg";
import AddCategoryModal from "./Modal/SelectButtonModal";
import useIsSelectCategoryModal from "../../store/isSelectCategoryModalStore";
import useIsAddCategoryModal from "../../store/isAddCategoryModalStore";
import useIsAddNotModal from "../../store/isAddNoteModal";

const firstTab = [
  { id: 0, name: "전체" },
  { id: 1, name: "디자인" },
  { id: 2, name: "기획" },
  { id: 3, name: "상품 전략" },
];

const secondTab = [
  { id: 0, name: "타이포그래피" },
  { id: 1, name: "영상디자인" },
  { id: 2, name: "Blender" },
  { id: 3, name: "C4D" },
  { id: 4, name: "컴그운" },
  { id: 5, name: "정보처리기사" },
];

const NoteStore = () => {
  const [selectTab, setSelectTab] = useState(0);
  const [selectSecondTab, setSelectSecondTab] = useState(0);
  const [editButtonHovered, setEditButtonHovered] = useState(false);
  const { isSelectCategoryModal, setIsSelectCategoryModal } =
    useIsSelectCategoryModal();
  const { setIsAddCategoryModal } = useIsAddCategoryModal();
  const { setIsAddNoteModal } = useIsAddNotModal();
  const handleTabClick = (id) => {
    setSelectTab(id);
  };

  const handleSecondTabClick = (id) => {
    setSelectSecondTab(id);
  };

  const handleCategoryButtonClick = () => {
    setIsAddCategoryModal(true);
  };

  const handleSelectCategoryTab = () => {
    setIsSelectCategoryModal(true);
  };

  const handleNoteButtonClick = () => {
    setIsAddNoteModal(true);
  };

  return (
    <>
      <div className="flex flex-col items-center overflow-y-hidden relative ">
        <div className="w-full h-[320px] rounded-t-[40px] bg-neutralwhite">
          <div className="flex justify-center">
            <div className="mt-[65px] w-[940px] flex flex-col gap-[24px]">
              <div className="font-semibold text-[20px] text-neutralblack">
                최근 추가한 노트
              </div>
              <div className="flex">
                <div className="flex flex-col gap-[11px]">
                  <AddButton
                    handleButtonClick={handleNoteButtonClick}
                    buttonImg={addNoteImg}
                    text="노트 추가하기"
                    detailText="작성한 필기를 저장하세요!"
                    hoveredButtonImg={addNoteHovering}
                  />
                  <AddButton
                    handleButtonClick={handleCategoryButtonClick}
                    buttonImg={addCategoryImg}
                    text="카테고리 추가하기"
                    detailText="노트 카테고리를 추가하세요!"
                    hoveredButtonImg={addCategoryHovering}
                  />
                </div>
                <div className="ml-[16px] flex gap-[16px]">
                  <RecentNote
                    icon={icon1}
                    categoryName="디자인"
                    noteName="타이포그래피"
                    date="8/22 (월)"
                    noteContents="여기에 노트 내용이 두 줄까지 보이도록 설정해주세요.여기에 노트 내용이 두 줄까지 보이도록 설정해주세요"
                  />
                  <RecentNote
                    icon={icon2}
                    categoryName="디자인디자인디자인디자인디자인디자인디자인디자인디자인"
                    noteName="타이포그래피타이포그래피타이포그래피타이포그래피타이포그래피타이포그래피 천일야화천일야화천일야화천일야화천일야화천일야화천일야화천일야화"
                    date="8/22 (월)"
                  />
                  <RecentNote
                    icon={icon3}
                    categoryName="디자인디자인디자인디자인디자인디자인디자인디자인디자인"
                    noteName="타이포그래피타이포그래피타이포그래피타이포그래피타이포그래피타이포그래피 천일야화천일야화천일야화천일야화천일야화천일야화천일야화천일야화"
                    date="8/22 (월)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-[320px] h-screen min-h-[813px] bg-secondary_bg`}
        >
          <div className="flex justify-center">
            <div className="mt-[65px] w-[940px] ">
              <div className="flex items-center gap-[16px]">
                <div className="font-semibold text-[20px] text-neutralblack">
                  저장된 노트
                </div>
                <div className="text-[14px] text-gray_400 font-semibold">
                  총 4개
                </div>
              </div>
              <div className="flex gap-[8px] mt-[24px]">
                <div
                  onMouseEnter={() => {
                    setEditButtonHovered(true);
                  }}
                  onMouseLeave={() => {
                    setEditButtonHovered(false);
                  }}
                  className="cursor-pointer"
                  onClick={handleSelectCategoryTab}
                >
                  {editButtonHovered ? (
                    <img src={edit_category_hover} />
                  ) : (
                    <img src={edit_category} />
                  )}
                </div>
                {firstTab.map((it) => (
                  <FirstCategoryTab
                    firstTab={firstTab}
                    tabName={it.name}
                    index={it.id}
                    handleTabClick={handleTabClick}
                    selectTab={selectTab}
                  />
                ))}
              </div>
              <div className="w-[940px] border-b-[1px] border-gray_100 mt-[16px] mb-[16px]"></div>
              <div className="flex gap-[8px]">
                {secondTab.map((it) => (
                  <SecondCategoryTab
                    secondTab={secondTab}
                    tabName={it.name}
                    index={it.id}
                    handleTabClick={handleSecondTabClick}
                    selectTab={selectSecondTab}
                  />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-[20px] mt-[32px]">
                <StoredNote
                  noteIcon={noteIcon1}
                  noteName="JavaScript Sec05_4 React에서 LifeCycle 제어하기 (useEffect)"
                  noteContent="노트 내용의 첫 줄이 여기에 보이도록 설정해 주세요 내용이 두 줄 이상으로 길어지면 점 처리 됩니다"
                />
                <StoredNote
                  noteIcon={noteIcon1}
                  noteName="제목이 두 줄이면 세로 길이 중앙 정렬되도록"
                  noteContent="노트 내용의 첫 줄이 여기에 보이도록 설정해 주세요 내용이 두 줄 이상으로 길어지면 점 처리 됩니다"
                />
                <StoredNote
                  noteIcon={noteIcon1}
                  noteName="한 줄이어도 이렇게"
                  noteContent="노트 내용의 첫 줄이 여기에 보이도록 설정해 주세요 내용이 두 줄 이상으로 길어지면 점 처리 됩니다"
                />
                <StoredNote
                  noteIcon={noteIcon1}
                  noteName="JavaScript Sec05_4 React에서 LifeCycle 제어하기 (useEffect)"
                  noteContent="노트 내용의 첫 줄이 여기에 보이도록 설정해 주세요 내용이 두 줄 이상으로 길어지면 점 처리 됩니다"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NoteStore;
