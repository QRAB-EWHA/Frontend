import { useEffect } from "react";
import NavBar from "../../components/Common/NavBar";
import PageDefauleTemplate from "../../components/Common/PageDefauleTemplate";
import IntroComponent from "../../components/MainPage/IntroComponent";
import MainComponent from "../../components/MainPage/MainComponent";
import NoteSummaryModal from "../../components/NoteStorePage/Modal/NoteSummaryModal";
import useIsBrightModeStore from "../../store/isBrightModeStore";
import useIsNoteSummaryModalStore from "../../store/isNoteSummaryModalStore";

const MainPage = () => {
  const { isNoteData, isNoteSummaryModal, setIsNoteSummaryModal } =
    useIsNoteSummaryModalStore();
  const { setIsBrightMode } = useIsBrightModeStore();
  useEffect(() => {
    setIsBrightMode(false);
  }, []);
  const isLogin = localStorage.getItem("accessToken") ? true : false;

  return (
    <>
      <NavBar />
      {isLogin && <MainComponent />}
      {!isLogin && <IntroComponent />}
      {isNoteSummaryModal && (
        <NoteSummaryModal
          setModal={setIsNoteSummaryModal}
          noteId={isNoteData.noteId}
          title={isNoteData.title}
          contents={isNoteData.chatgptContent}
          category={isNoteData.parentCategoryName}
          childCategory={isNoteData.categoryName}
        />
      )}
    </>
  );
};
export default MainPage;
