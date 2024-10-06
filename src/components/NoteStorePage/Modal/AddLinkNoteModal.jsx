import { useEffect, useState } from "react";
import ModalContainer from "./ModalContainer";
import SecondCategoryTab from "../SecondCategoryTab";
import FirstCategoryTab from "../FirstCategoryTab";
import CheckButton from "../Button/CheckButton";
import link from "../../../assets/storenotepage/link_icon.svg";
import useIsAddLinkNote from "../../../store/isAddLinkNote";
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
const AddLinkNoteModal = ({ setModal }) => {
  const [selectTab, setSelectTab] = useState();
  const [selectedTabName, setSelectedTabName] = useState();
  const [selectSecondTab, setSelectSecondTab] = useState();
  const [selectedSecondTabName, setSelectedSecondTabName] = useState();
  const [linkValue, setLinkValue] = useState("");
  const { isAddLinkNote, setIsAddLinkNote } = useIsAddLinkNote();
  const handleLinkValue = (e) => {
    setLinkValue(e.target.value);
  };

  const closeModalButton = () => {
    setIsAddLinkNote(false);
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
        {" "}
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
            <div className="text-base font-semibold">링크 입력하기</div>
            <div className="text-sm font-medium text-gray_400">
              티스토리, 블로그 URL을 입력해 주세요.
            </div>
            <div className="relative w-[596px] h-[48px] bg-secondary_bg rounded-[8px]">
              <input
                placeholder=""
                value={linkValue}
                onChange={handleLinkValue}
                className="absolute top-[14px] left-[40px] w-[540px] bg-transparent text-[13px] text-gray_400 focus:outline-none focus:border-none"
              />
              <div className="absolute top-[16px] left-[16px]">
                <img src={link} />
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] justify-center mt-[23px]">
            <CheckButton
              buttonText="취소"
              cancelBtn={true}
              handleButton={closeModalButton}
            />
            <CheckButton buttonText="추가" activate={linkValue} />
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};
export default AddLinkNoteModal;
