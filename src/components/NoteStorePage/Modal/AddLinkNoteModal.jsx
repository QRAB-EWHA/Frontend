import { useEffect, useState } from "react";
import ModalContainer from "./ModalContainer";
import SecondCategoryTab from "../SecondCategoryTab";
import FirstCategoryTab from "../FirstCategoryTab";
import CheckButton from "../Button/CheckButton";
import link from "../../../assets/storenotepage/link_icon.svg";
import useIsAddLinkNote from "../../../store/isAddLinkNote";
import {
  getCategoryChild,
  postNoteLink,
} from "../../../services/api/noteStore";
import LoadingSpinner from "../../Common/LoadingSpinner";

const AddLinkNoteModal = ({ setModal, categoryData }) => {
  const [selectTab, setSelectTab] = useState(); //category 번호
  const [selectSecondTab, setSelectSecondTab] = useState(); //2계층 category 번호
  const [selectedTabName, setSelectedTabName] = useState();
  const [selectedSecondTabName, setSelectedSecondTabName] = useState();
  const [secondCategory, setSecondCategory] = useState([]);
  const [linkValue, setLinkValue] = useState("");
  const { isAddLinkNote, setIsAddLinkNote } = useIsAddLinkNote();
  const [loading, setLoading] = useState(false);

  const handleTabClick = (id, tabName) => {
    if (selectTab === id) {
      setSelectTab();
      setSelectedTabName();
    } else {
      setSelectTab(id);
      setSelectedTabName(tabName);
      getSecondCategory(id);
    }
  };
  const handleSecondTabClick = (id, tabName) => {
    if (selectSecondTab === id) {
      setSelectSecondTab();
      setSelectedSecondTabName();
    } else {
      setSelectSecondTab(id);
      setSelectedSecondTabName(tabName);
    }
  };
  const getSecondCategory = async (id) => {
    try {
      const res = await getCategoryChild(id);
      console.log("2계층 카테고리 가져오기 성공", res);
      setSecondCategory(res.childCategories);
    } catch (error) {
      console.log("2계층 카테고리 가져오기 실패", error);
    }
  };

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

  const handleLinkData = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("url", linkValue);
    formData.append(
      "categoryId",
      String(selectSecondTab ? selectSecondTab : selectTab)
    );
    console.log(formData.get("url"));
    console.log(formData.get("categoryId"));

    try {
      const res = await postNoteLink(formData);
      console.log("링크 노트 저장 완료", res);
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log("링크 노트 저장 실패", error);
    }
  };
  return (
    <div
      style={{ background: "rgba(13, 13, 13, 0.6) " }}
      className="flex justify-center items-center fixed inset-0 z-10"
    >
      <ModalContainer setModal={setModal} modalName="노트 추가하기">
        {loading && <LoadingSpinner loadingText="노트를 생성 중이에요" />}
        {!loading && (
          <>
            <div className="w-[660px] h-[132px] rounded-[8px] border-[1px] border-gray_100 flex flex-col items-center">
              <div className="flex gap-[8px] w-[604px] mt-[20px] scrollbarhidden">
                {categoryData.map((it) => (
                  <FirstCategoryTab
                    index={it.id}
                    firstTab={categoryData}
                    tabName={it.name}
                    handleTabClick={handleTabClick}
                    selectTab={selectTab}
                  />
                ))}
              </div>
              <div className="w-[604px] border-b-[1px] border-gray_100 mt-[12px] mb-[12px]"></div>
              <div className="flex gap-[8px] w-[604px] scrollbarhidden">
                {secondCategory.map((it) => (
                  <SecondCategoryTab
                    selectTab={selectSecondTab}
                    firstTab={secondCategory}
                    index={it.id}
                    tabName={it.name}
                    handleTabClick={handleSecondTabClick}
                  />
                ))}
              </div>
            </div>
            <div className="w-[660px] h-[210px] rounded-[8px] border-[1px] border-gray_100">
              <div className="flex flex-col gap-[8px] ml-[32px] mt-[16px]">
                <div className="text-base font-semibold">링크 입력하기</div>
                <div className="text-sm font-medium text-gray_400">
                  티스토리, 벨로그 URL을 입력해 주세요.
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
                <CheckButton
                  handleButton={handleLinkData}
                  buttonText="추가"
                  activate={linkValue}
                />
              </div>
            </div>
          </>
        )}
      </ModalContainer>
    </div>
  );
};
export default AddLinkNoteModal;
