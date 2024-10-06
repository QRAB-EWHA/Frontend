import Button from "../Common/Button";
import Input from "../Common/Input";
import stageone from "../../assets/authpage/stage_one_active.svg";
import SignUpInputField from "./SignUpInputField";
import { useEffect, useState } from "react";
const SignUpContainer = ({ setShowSignUpContainer2 }) => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isNextButtonActive, setIsNextButtonActive] = useState(false);

  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordCheckValid, setIsPasswordCheckValid] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  useEffect(() => {
    setIsNextButtonActive(
      isNicknameValid &&
        isEmailValid &&
        isPasswordValid &&
        isPasswordCheckValid &&
        phoneNumber !== ""
    );
    console.log(
      isNicknameValid,
      isEmailValid,
      isPasswordValid,
      isPasswordCheckValid
    );
  }, [
    isNicknameValid,
    isEmailValid,
    isPasswordValid,
    isPasswordCheckValid,
    phoneNumber,
  ]);

  const changeNickname = (e) => {
    setNickname(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };
  const changePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleNextButton = () => {
    const filteredPhoneNumber = phoneNumber.replace(/[^0-9]/g, "");

    setShowSignUpContainer2({
      nickname,
      username: email,
      password,
      passwordConfirm: passwordCheck,
      phoneNumber: filteredPhoneNumber,
    });
  };

  return (
    <div className="relative mt-[36.5px] w-[620px] h-[480px] rounded-[16px] border-[1px] border-[#D9DBE1] ">
      <div className="flex justify-center mt-[32px] mb-[32px]">
        <img className="" src={stageone} />
      </div>
      <div className="flex flex-col gap-[20px] items-center ">
        <SignUpInputField
          fieldName="닉네임"
          showButton={true}
          placeholder="특수문자 제외 2~10자"
          autoFocus={true}
          changeInputValue={changeNickname}
          value={nickname}
          onValidateChange={setIsNicknameValid}
        />
        <SignUpInputField
          fieldName="이메일"
          showButton={true}
          changeInputValue={changeEmail}
          value={email}
          onValidateChange={setIsEmailValid}
        />
        <SignUpInputField
          fieldName="비밀번호"
          width="336px"
          showButton={false}
          placeholder="영문대소문자/숫자/특수문자 모두 포함/8~16자"
          changeInputValue={changePassword}
          value={password}
          type="password"
          onValidateChange={setIsPasswordValid}
        />
        <SignUpInputField
          fieldName="비밀번호 확인"
          width="336px"
          showButton={false}
          changeInputValue={changePasswordCheck}
          value={passwordCheck}
          type="password"
          password={password} // 비밀번호를 전달하여 비교
          onValidateChange={setIsPasswordCheckValid}
        />
        <SignUpInputField
          fieldName="전화번호"
          width="336px"
          showButton={false}
          changeInputValue={changePhoneNumber}
          value={phoneNumber}
        />
        <button
          className={`mt-[16px] w-[112px] h-[40px] ${
            isNextButtonActive ? "bg-primary_blue" : "bg-neutralgray"
          } text-neutralwhite rounded-[4px]`}
          onClick={handleNextButton}
        >
          다음
        </button>
      </div>
    </div>
  );
};
export default SignUpContainer;
