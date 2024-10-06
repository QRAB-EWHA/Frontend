import { useEffect } from "react";
import LoginContainer from "../../components/AuthPage/LoginContainer";
import NavBar from "../../components/Common/NavBar";
import useIsBrightModeStore from "../../store/isBrightModeStore";

const Login = () => {
  const { setIsBrightMode } = useIsBrightModeStore();
  useEffect(() => {
    setIsBrightMode(false);
  }, []);
  return (
    <>
      <NavBar />

      <div className="flex justify-center m-auto w-full min-h-[calc(100vh-150px)] bg-neutralwhite rounded-t-[40px] z-10 relative">
        <div className="text-2xl font-bold text-neutralwhite mt-[80px] flex justify-center absolute top-[-150px]">
          로그인
        </div>
        <LoginContainer />
      </div>
    </>
  );
};
export default Login;
