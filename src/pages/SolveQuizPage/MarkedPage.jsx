import { useEffect } from "react";
import NavBar from "../../components/Common/NavBar";
import MarkingComponent from "../../components/SolveQuizPage/MarkingComponent";
import useIsBrightModeStore from "../../store/isBrightModeStore";

const MarkedPage = () => {
  const { setIsBrightMode } = useIsBrightModeStore();
  useEffect(() => {
    setIsBrightMode(true);
  }, []);
  return (
    <>
      <div className={`w-full h-screen bg-neutralwhite `}>
        <NavBar />
        <MarkingComponent />
      </div>
    </>
  );
};
export default MarkedPage;
