import { useEffect, useState } from "react";
import NavBar from "../../components/Common/NavBar";
import NoteStore from "../../components/NoteStorePage/NoteStoreContainer";
import useIsBrightModeStore from "../../store/isBrightModeStore";
import SelectButtonModal from "../../components/NoteStorePage/Modal/SelectButtonModal";
import useIsSelectCategoryModal from "../../store/isSelectCategoryModalStore";
import AddCategoryModal from "../../components/NoteStorePage/Modal/AddCategoryModal";
import useIsAddCategoryModal from "../../store/isAddCategoryModalStore";
import useIsEditCategoryModal from "../../store/isEditCategoryModalStore";
import useIsDeleteCategoryModal from "../../store/isDeleteCategoryModalStore";
import EditCategoryModal from "../../components/NoteStorePage/Modal/EditCategoryModal";
import DeleteCategoryModal from "../../components/NoteStorePage/Modal/DeleteCategoryModal";
import useIsAddNotModal from "../../store/isAddNoteModal";
import AddNoteModal from "../../components/NoteStorePage/Modal/AddNoteModal";
import useIsAddFileNote from "../../store/isAddFileNote";
import useIsAddLinkNote from "../../store/isAddLinkNote";
import AddFileNoteModal from "../../components/NoteStorePage/Modal/AddFileNoteModal";
import AddLinkNoteModal from "../../components/NoteStorePage/Modal/AddLinkNoteModal";

const StoreNote = ({}) => {
  const { isBrightMode, setIsBrightMode } = useIsBrightModeStore(); // 배경 모드 상태
  const [isDragging, setIsDragging] = useState(false); // 드래그 상태
  const [startY, setStartY] = useState(0); // 드래그 시작 위치
  const [currentY, setCurrentY] = useState(0); // 현재 드래그 위치
  const [offsetY, setOffsetY] = useState(0); // 드래그에 따른 y 위치
  const [shouldAnimate, setShouldAnimate] = useState(false); // 애니메이션 트리거
  const [animationCompleted, setAnimationCompleted] = useState(false); // 애니메이션 완료 감지
  const [init, setInit] = useState(true);
  const { isSelectCategoryModal, setIsSelectCategoryModal } =
    useIsSelectCategoryModal();
  const { isAddCategoryModal, setIsAddCategoryModal } = useIsAddCategoryModal();
  const { isEditCategoryModal, setIsEditCategoryModal } =
    useIsEditCategoryModal();
  const { isDeleteCategoryModal, setIsDeleteCategoryModal } =
    useIsDeleteCategoryModal();
  const { isAddNoteModal, setIsAddNoteModal } = useIsAddNotModal();
  const { isAddFileNote, setIsAddFileNote } = useIsAddFileNote();
  const { isAddLinkNote, setIsAddLinkNote } = useIsAddLinkNote();
  const handleMouseDown = (e) => {
    if (init) {
      setStartY(e.clientY);
      if (!isDragging && !animationCompleted) {
        setIsDragging(true);
      }
      setInit(false);
    } else {
      setIsDragging(true);
    }
  }; //드래그 시작

  const handleMouseMove = (e) => {
    if (isDragging) {
      const currentMouseY = e.clientY;
      const offset = startY - currentMouseY;

      if (currentMouseY >= startY) {
        return;
      }

      setCurrentY(currentMouseY);
      setOffsetY(offset);

      if (offset > 50) {
        // 50px 이상 드래그 시 애니메이션 수행
        setShouldAnimate(true);
      } else {
        setShouldAnimate(false);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  }; //마우스 놓을 때 드래그 종료

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    if (shouldAnimate) {
      // 자동으로 위로 올라가는 애니메이션
      const animation = setInterval(() => {
        setOffsetY((prevOffsetY) => {
          const newOffset = prevOffsetY + 10; // 속도 조절 가능

          if (newOffset >= 120) {
            // 120px까지 올라가면 애니메이션 종료
            clearInterval(animation);
            setIsBrightMode(true); // BrightMode로 전환
            setAnimationCompleted(true); // 애니메이션 완료
          }

          return newOffset;
        });
      }, 16);

      return () => clearInterval(animation);
    }
  }, [shouldAnimate, setIsBrightMode]);

  const handleScroll = () => {
    if (window.scrollY >= 195 && !isBrightMode) {
      // 스크롤 위치가 195px 이상이면 BrightMode로 전환
      setIsBrightMode(true);
    }
  };

  useEffect(() => {
    if (isBrightMode) {
      window.scrollTo(0, 0); // BrightMode로 전환 시 스크롤 위치를 최상단으로 이동
    }
  }, [isBrightMode]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isBrightMode]);

  return (
    <>
      {!isBrightMode ? (
        <>
          <NavBar />
          <div
            onMouseDown={handleMouseDown}
            style={{
              transform: `translateY(${-offsetY}px)`,
              transition: "transform 0.5s ease-out",
            }}
            className="cursor-pointer"
          >
            <div className="flex justify-center">
              <div className="text-2xl font-bold text-neutralwhite mt-[80px] flex justify-center absolute top-[-150px]">
                노트 저장소
              </div>
            </div>
            <NoteStore />
          </div>
        </>
      ) : (
        <>
          <div className={`w-full h-screen bg-neutralwhite `}>
            <NavBar />
            <NoteStore />
          </div>
        </>
      )}
      {isSelectCategoryModal && (
        <SelectButtonModal setModal={setIsSelectCategoryModal} />
      )}
      {isAddCategoryModal && (
        <AddCategoryModal setModal={setIsAddCategoryModal} />
      )}
      {isEditCategoryModal && (
        <EditCategoryModal setModal={setIsEditCategoryModal} />
      )}
      {isDeleteCategoryModal && (
        <DeleteCategoryModal setModal={setIsDeleteCategoryModal} />
      )}
      {isAddNoteModal && <AddNoteModal setModal={setIsAddNoteModal} />}
      {isAddFileNote && <AddFileNoteModal setModal={setIsAddFileNote} />}
      {isAddLinkNote && <AddLinkNoteModal setModal={setIsAddLinkNote} />}
    </>
  );
};
export default StoreNote;
