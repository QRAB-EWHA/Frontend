import { useEffect, useState } from "react";
import ModalContainer from "./ModalContainer";
import closeIcon from "../../../assets/common/close_icon.svg";
import FirstCategoryTab from "../FirstCategoryTab";
import Button from "../../Common/Button";
import useIsAddCategoryModal from "../../../store/isAddCategoryModalStore";

const firstTab = [
  { id: 0, name: "디자인" },
  { id: 1, name: "기획" },
  { id: 2, name: "상품 전략" },
];

const secondTab = [
  { id: 0, name: "타이포그래피" },
  { id: 1, name: "영상디자인" },
  { id: 2, name: "Blender" },
  { id: 3, name: "C4D" },
  { id: 4, name: "컴그운" },
  { id: 5, name: "정보처리기사" },
];

const AddCategoryModal = ({ setModal }) => {
  const [selectTab, setSelectTab] = useState();
  const [inputValue, setInputValue] = useState("");
  const [selectedTabName, setSelectedTabName] = useState();
  const { setIsAddCategoryModal } = useIsAddCategoryModal();

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleTabClick = (id, tabName) => {
    if (selectTab === id) {
      setSelectTab();
      setSelectedTabName();
    } else {
      setSelectTab(id);
      setSelectedTabName(tabName);
    }
  };

  const closeModalButton = () => {
    setIsAddCategoryModal(false);
  };

  useEffect(() => {
    document.body.style.cssText = `
        position:fixed;
        top:-${window.scrollY}px;
        overflow-y:scroll;
        width:100%;
       `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1); //scrollY값이 없으면 기본값으로 0 사용, 10진수 사용
    };
  }, []);

  return (
    <div
      style={{ background: "rgba(13, 13, 13, 0.6) " }}
      className="flex justify-center items-center fixed inset-0 z-10"
    >
      <ModalContainer modalName="카테고리 추가하기" setModal={setModal}>
        <div className="flex items-center w-[660px] h-[132px] border-[1px] border-gray_100 rounded-[8px] mt-[12px]">
          <div className="flex flex-col gap-[8px] ml-[32px]">
            <div className="text-[16px] font-semibold">카테고리 선택</div>
            <div className="text-[14px] font-medium text-gray_400">
              카테고리를 선택하면 하위 카테고리를 추가할 수 있어요.
            </div>
            <div className="flex gap-[8px] mt-[8px]">
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
          </div>
        </div>
        <div className="w-[660px] h-[210px] border-[1px] border-gray_100 rounded-[8px]">
          <div className="mt-[16px] flex flex-col gap-[8px] ml-[32px]">
            <div className="flex gap-[5px]">
              {selectedTabName && (
                <div className="text-[16px] font-semibold text-primary_blue">
                  {selectedTabName}
                </div>
              )}
              <div className="text-[16px] font-semibold">카테고리 추가하기</div>
            </div>
            <div className="text-[14px] font-medium text-gray_400">
              추가할 카테고리 이름을 입력해 주세요.
            </div>
            <input
              value={inputValue}
              onChange={handleInputValue}
              className="w-[596px] h-[48px] rounded-[4px] bg-secondary_bg pl-[20px] text-[13px] placeholder:text-gray_300 focus:outline-none focus:border-[3px] focus:border-primary_blue"
              placeholder="최대 40자까지 입력할 수 있어요."
            />
          </div>
          <div className="flex gap-[12px] mt-[19px] justify-center">
            <Button
              width="96px"
              height="40px"
              buttonText="취소"
              cancleBtn={true}
              handleButton={closeModalButton}
            />
            <Button
              width="96px"
              height="40px"
              buttonText="추가"
              buttonActive={inputValue}
            />
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default AddCategoryModal;
