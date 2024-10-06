import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../../assets/common/close_icon.svg";
import plus from "../../../assets/storenotepage/modal/plus.svg";
import edit from "../../../assets/storenotepage/modal/edit.svg";
import minus from "../../../assets/storenotepage/modal/minus.svg";
import CategoryEditButton from "../Button/CategoryEditButton";
import useIsSelectCategoryModal from "../../../store/isSelectCategoryModalStore";
import useIsAddCategoryModal from "../../../store/isAddCategoryModalStore";
import useIsEditCategoryModal from "../../../store/isEditCategoryModalStore";
import useIsDeleteCategoryModal from "../../../store/isDeleteCategoryModalStore";

const SelectButtonModal = ({ setModal }) => {
  //   const modalRef = useRef(null);
  const { setIsSelectCategoryModal } = useIsSelectCategoryModal();
  const { setIsAddCategoryModal } = useIsAddCategoryModal();
  const { setIsEditCategoryModal } = useIsEditCategoryModal();
  const { setIsDeleteCategoryModal } = useIsDeleteCategoryModal();
  useEffect(() => {
    console.log(window.scrollY);
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

  const addCategory = () => {
    setIsAddCategoryModal(true);
    setIsSelectCategoryModal(false);
  };
  const editCategory = () => {
    setIsEditCategoryModal(true);
    setIsSelectCategoryModal(false);
  };
  const deleteCategory = () => {
    setIsDeleteCategoryModal(true);
    setIsSelectCategoryModal(false);
  };

  //   useEffect(() => {
  //     const handleClickOutside = (e) => {
  //       if (modalRef.current && !modalRef.current.contains(e.target)) {
  //         setModal(false);
  //       }
  //     };
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [setModal]);

  return (
    <div
      style={{ background: "rgba(13, 13, 13, 0.6) " }}
      className="flex justify-center items-center fixed inset-0 z-10"
    >
      <div
        className="relative z-30 w-[780px] h-[220px] rounded-[16px] bg-neutralwhite "
        // ref={modalRef}
      >
        <button
          className="cursor-pointer absolute right-[-30px]"
          onClick={() => setModal(false)}
        >
          <img src={closeIcon} alt="close_button" />
        </button>
        <div className="flex flex-col gap-[10px] items-center ">
          <div className=" mt-[32px] text-[16px] font-semibold">
            카테고리 편집하기
          </div>
          <div className="text-[16px] font-semibold text-gray_300">
            카테고리를 추가, 수정, 삭제할 수 있어요!
          </div>

          <div className="flex mt-[20px] gap-[24px]">
            <CategoryEditButton
              text="카테고리 추가"
              icon={plus}
              bgcolor="bg-secondary_skyblue"
              textcolor="text-primary_blue"
              bordercolor="border-[1px] border-primary_blue"
              handleButton={addCategory}
            />
            <CategoryEditButton
              text="카테고리 수정"
              icon={edit}
              bgcolor="bg-secondary_bg"
              textcolor="text-gray_400"
              bordercolor="border-[1px] border-gray_400"
              handleButton={editCategory}
            />
            <CategoryEditButton
              text="카테고리 삭제"
              icon={minus}
              textcolor="text-neutralred"
              bordercolor="border-[1px] border-neutralred"
              handleButton={deleteCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectButtonModal;
