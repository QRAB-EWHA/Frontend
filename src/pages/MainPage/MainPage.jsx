import NavBar from "../../components/Common/NavBar";
import PageDefauleTemplate from "../../components/Common/PageDefauleTemplate";
import IntroComponent from "../../components/MainPage/IntroComponent";
import MainComponent from "../../components/MainPage/MainComponent";

const MainPage = () => {
  const isLogin = localStorage.getItem("accessToken") ? true : false;

  return (
    <>
      <NavBar />
      {isLogin && <MainComponent />}
      {!isLogin && <IntroComponent />}
    </>
  );
};
export default MainPage;
