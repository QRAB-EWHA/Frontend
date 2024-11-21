import NavBar from "../../components/Common/NavBar";
import SolveQuizComponent from "../../components/SolveQuizPage/SolveQuizComponent";

const ResolveQuizPage = () => {
  return (
    <>
      <div className={`w-full h-screen bg-neutralwhite `}>
        <NavBar />
        <SolveQuizComponent />
      </div>
    </>
  );
};
export default ResolveQuizPage;
