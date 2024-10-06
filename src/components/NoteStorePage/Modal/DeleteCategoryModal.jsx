import { useEffect, useState } from "react";
import ModalContainer from "./ModalContainer";
import Button from "../../Common/Button";
import FirstCategoryTab from "../FirstCategoryTab";
import SecondCategoryTab from "../SecondCategoryTab";
import useIsDeleteCategoryModal from "../../../store/isDeleteCategoryModalStore";

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
  { id: 12, name: "상품 전략" },
  { id: 13, name: "디자인" },
  { id: 14, name: "기획" },
  { id: 15, name: "상품 전략" },
  { id: 16, name: "디자인" },
  { id: 17, name: "기획" },
  { id: 18, name: "상품 전략" },
  { id: 19, name: "디자인" },
  { id: 20, name: "기획" },
  { id: 21, name: "상품 전략" },
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
  { id: 12, name: "상품 전략" },
  { id: 13, name: "디자인" },
  { id: 14, name: "기획" },
  { id: 15, name: "상품 전략" },
  { id: 16, name: "디자인" },
  { id: 17, name: "기획" },
  { id: 18, name: "상품 전략" },
  { id: 19, name: "디자인" },
  { id: 20, name: "기획" },
  { id: 21, name: "상품 전략" },
];
const DeleteCategoryModal = ({ setModal }) => {
  const [selectTab, setSelectTab] = useState([]);
  const [selectSecondTab, setSelectSecondTab] = useState([]);
  const [selectedTabName, setSelectedTabName] = useState([]);
  const [selectedSecondTabName, setSelectedSecondTabName] = useState([]);
  const { setIsDeleteCategoryModal } = useIsDeleteCategoryModal();
  useEffect(() => {
    console.log(selectTab);
  }, [setSelectSecondTab]);
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

  const handleButton = () => {
    setIsDeleteCategoryModal(false);
  };

  const handleTabClick = (id, tabName) => {
    setSelectTab((prev) => {
      if (prev.includes(id)) {
        // 이미 선택된 탭을 클릭한 경우, 해당 탭 제거
        return prev.filter((item) => item !== id);
      } else {
        // 새 탭을 클릭한 경우, 해당 탭 추가
        return [...prev, id];
      }
    });
    setSelectedTabName((prev) => {
      if (prev.includes(tabName)) {
        // 이미 선택된 탭 이름을 클릭한 경우, 해당 탭 이름 제거
        return prev.filter((name) => name !== tabName);
      } else {
        // 새 탭 이름을 클릭한 경우, 해당 탭 이름 추가
        return [...prev, tabName];
      }
    });
  };

  const handleSecondTabClick = (id, tabName) => {
    setSelectSecondTab((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
    setSelectedSecondTabName((prev) => {
      if (prev.includes(tabName)) {
        // 이미 선택된 탭 이름을 클릭한 경우, 해당 탭 이름 제거
        return prev.filter((name) => name !== tabName);
      } else {
        // 새 탭 이름을 클릭한 경우, 해당 탭 이름 추가
        return [...prev, tabName];
      }
    });
  };

  return (
    <div
      style={{ background: "rgba(13, 13, 13, 0.6) " }}
      className="flex justify-center items-center fixed inset-0 z-10"
    >
      <ModalContainer modalName="카테고리 삭제하기" setModal={setModal}>
        <div className="w-[660px] h-[297px] rounded-[8px] border-[1px] border-gray_100 mt-[10px]">
          <div className="flex flex-col gap-[5px] ml-[32px] mt-[16px]">
            <div className="text-[16px] font-semibold">카테고리 선택</div>
            <div className="text-[14px] font-medium text-gray_400">
              삭제할 카테고리를 선택해 주세요.
            </div>
            <div className=" flex gap-[8px] w-[600px] scrollbarhidden line-clamp-2 mt-[16px]">
              {firstTab.map((it) => (
                <FirstCategoryTab
                  CategoryDelete={true}
                  firstTab={firstTab}
                  tabName={it.name}
                  index={it.id}
                  handleTabClick={handleTabClick}
                  selectTab={selectTab}
                />
              ))}
            </div>
            <div className="w-[604px] border-b-[1px] border-gray_100 mt-[11px] mb-[11px]"></div>
            <div className=" flex gap-[8px] w-[600px] h-[120px] overflow-y-auto custom-scrollbar flex-wrap">
              {secondTab.map((it) => (
                <SecondCategoryTab
                  CategoryDelete={true}
                  secondTab={secondTab}
                  tabName={it.name}
                  index={it.id}
                  handleTabClick={handleSecondTabClick}
                  selectTab={selectSecondTab}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[12px] mt-[5px]">
          <Button
            handleButton={handleButton}
            width="96px"
            height="40px"
            cancleBtn={true}
            buttonText="취소"
          />
          <Button
            width="96px"
            height="40px"
            buttonText="저장"
            buttonActive={true}
          />
        </div>
      </ModalContainer>
    </div>
  );
};
export default DeleteCategoryModal;
