import { useEffect, useState } from "react";
import ModalContainer from "./ModalContainer";
import FirstCategoryTab from "../FirstCategoryTab";
import SecondCategoryTab from "../SecondCategoryTab";
import file from "../../../assets/storenotepage/file_icon.svg";
import CheckButton from "../Button/CheckButton";
import useIsAddFileNote from "../../../store/isAddFileNote";

const firstTab = [
  { id: 0, name: "디자인" },
  { id: 1, name: "기획" },
  { id: 2, name: "상품 전략" },
  { id: 3, name: "디자인" },
  { id: 4, name: "기획" },
  { id: 5, name: "상품 전략" },
  { id: 6, name: "디자인" },
  { id: 7, name: "기획" },
  { id: 8, name: "상품 전략" },
  { id: 9, name: "디자인" },
  { id: 10, name: "기획" },
  { id: 11, name: "상품 전략" },
];
const secondTab = [
  { id: 0, name: "디자인" },
  { id: 1, name: "기획" },
  { id: 2, name: "상품 전략" },
  { id: 3, name: "디자인" },
  { id: 4, name: "기획" },
  { id: 5, name: "상품 전략" },
  { id: 6, name: "디자인" },
  { id: 7, name: "기획" },
  { id: 8, name: "상품 전략" },
  { id: 9, name: "디자인" },
  { id: 10, name: "기획" },
  { id: 11, name: "상품 전략" },
];
const AddFileNoteModal = ({ setModal }) => {
  const [selectTab, setSelectTab] = useState();
  const [selectedTabName, setSelectedTabName] = useState();
  const [selectSecondTab, setSelectSecondTab] = useState();
  const [selectedSecondTabName, setSelectedSecondTabName] = useState();
  const { isAddFileNote, setIsAddFileNote } = useIsAddFileNote();

  const closeModalButton = () => {
    setIsAddFileNote(false);
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
      <ModalContainer setModal={setModal} modalName="노트 추가하기">
        <div className="w-[660px] h-[132px] rounded-[8px] border-[1px] border-gray_100 flex flex-col justify-center items-center">
          <div className="flex gap-[8px] w-[604px] scrollbarhidden">
            {firstTab.map((it) => (
              <FirstCategoryTab
                selectTab={selectTab}
                firstTab={firstTab}
                index={it.index}
                tabName={it.name}
              />
            ))}
          </div>
          <div className="w-[604px] border-b-[1px] border-gray_100 mt-[12px] mb-[12px]"></div>
          <div className="flex gap-[8px] w-[604px] scrollbarhidden">
            {secondTab.map((it) => (
              <SecondCategoryTab
                selectTab={selectSecondTab}
                firstTab={secondTab}
                index={it.index}
                tabName={it.name}
              />
            ))}
          </div>
        </div>
        <div className="w-[660px] h-[210px] rounded-[8px] border-[1px] border-gray_100">
          <div className="flex flex-col gap-[8px] ml-[32px] mt-[16px]">
            <div className="text-base font-semibold">파일 불러오기</div>
            <div className="text-sm font-medium text-gray_400">
              파일은 10MB까지 첨부 가능합니다.
            </div>
            <div className="flex gap-[8px] mt-[4px]">
              <button className="flex items-center w-[76px] h-[37px] rounded-[4px] text-sm font-medium text-gray_400 pl-[12px] pt-[10px] pr-[12px] pb-[10px] border-[1px] border-gray_100">
                파일 선택
              </button>
              <div className="relative w-[504px] h-[37px] bg-secondary_bg rounded-[4px]">
                <img src={file} className="absolute left-[16px] top-[10px]" />
              </div>
            </div>
            <div className="text-xs text-gray_400 font-medium">
              ✓ 등록 가능한 파일 형식 및 확장자 : PDF, PNG, JPG, JPEG
            </div>
          </div>
          <div className="flex gap-[12px] justify-center  mt-[8px]">
            <CheckButton
              buttonText="취소"
              cancelBtn={true}
              handleButton={closeModalButton}
            />
            <CheckButton buttonText="추가" activate={true} />
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};
export default AddFileNoteModal;
