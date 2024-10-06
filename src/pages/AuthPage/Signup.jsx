import { useState } from "react";
import SignUpContainer from "../../components/AuthPage/SignUpContainer";
import Input from "../../components/Common/Input";
import NavBar from "../../components/Common/NavBar";
import SignUpContainer2 from "../../components/AuthPage/SignUpContainer2";

const Signup = () => {
  const [showSignUpContainer, setShowSignUpContainer2] = useState(false);
  const [userData, setUserData] = useState({
    nickname: "",
    username: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
  });
  const handleSetShowSignUpContainer2 = (data) => {
    setUserData(data); // 첫 번째 페이지에서 받은 데이터를 저장
    setShowSignUpContainer2(true); // 두 번째 페이지로 전환
  };
  return (
    <>
      <NavBar />

      <div className="flex justify-center m-auto w-full min-h-[calc(100vh-150px)] bg-neutralwhite rounded-t-[40px] z-10 relative">
        <div className="text-2xl font-bold text-neutralwhite mt-[80px] flex justify-center absolute top-[-150px]">
          회원가입
        </div>

        {!showSignUpContainer && (
          <SignUpContainer
            setShowSignUpContainer2={handleSetShowSignUpContainer2}
          />
        )}
        {showSignUpContainer && (
          <SignUpContainer2
            nickname={userData.nickname}
            username={userData.username}
            password={userData.password}
            passwordConfirm={userData.passwordConfirm}
            phoneNumber={userData.phoneNumber}
          />
        )}
      </div>
    </>
  );
};
export default Signup;
