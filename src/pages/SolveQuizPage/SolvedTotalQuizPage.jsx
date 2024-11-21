import NavBar from "../../components/Common/NavBar";
import MarkingComponent from "../../components/SolveQuizPage/MarkingComponent";

const SolvedTotalQuizPage = () => {
  return (
    <>
      <div className={`w-full h-screen bg-neutralwhite `}>
        <NavBar />
        <MarkingComponent />
      </div>
    </>
  );
};
export default SolvedTotalQuizPage;
