import { forwardRef, useEffect, useState } from "react";
import eye_icon from "../../assets/authpage/show_password_icon.svg";

const Input = forwardRef(
  (
    {
      width = "240px",
      placeholder,
      setButtonActive,
      changeInputValue,
      value,
      fieldName,
      type = "text",
      password,
      onValidateChange,
      NoErr = false,
    },
    ref
  ) => {
    const nicknameRegex = /^[가-힣a-zㄱ-ㅎA-Z0-9]{2,10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

    const formatPhoneNumber = (value) => {
      const cleaned = value.replace(/\D/g, ""); //비숫자 문자 제거
      if (cleaned.length <= 3) {
        return cleaned;
      }
      if (cleaned.length <= 7) {
        return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
      }
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(
        7,
        11
      )}`;
    };
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false); // focus 상태 관리
    const [errorBorder, setErrorBorder] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
      let isValid = false;

      if (value && fieldName === "닉네임") {
        isValid = nicknameRegex.test(value);
        setButtonActive(isValid);
      } else if (value && fieldName === "이메일") {
        isValid = emailRegex.test(value);
        setButtonActive(isValid);
      } else if (value && fieldName === "비밀번호") {
        if (!NoErr) {
          if (passwordRegex.test(value)) {
            setErrorBorder(false);
            setErrorMsg("");
            isValid = true;
          } else {
            setErrorBorder(true);
            if (value.length > 16 || value.length < 8) {
              setErrorMsg("비밀번호는 8~16자 이내로 입력해 주세요.");
            } else {
              setErrorMsg("영문대소문자, 숫자, 특수문자를 모두 포함해 주세요.");
            }
            isValid = false;
          }
        }
      } else if (value && fieldName === "비밀번호 확인") {
        isValid = value === password;
        if (isValid) {
          setErrorBorder(false);
          setErrorMsg("");
        } else {
          setErrorBorder(true);
          setErrorMsg("비밀번호가 일치하지 않습니다.");
        }
      }
      console.log(onValidateChange);
      if (onValidateChange) {
        onValidateChange(isValid);
        console.log(isValid);
      }
    }, [value, password, fieldName]);

    const toggleShowPassword = (event) => {
      event.preventDefault();
      setShowPassword((prev) => !prev);
    };

    const handleChange = (e) => {
      let newValue = e.target.value;
      if (fieldName === "전화번호") {
        newValue = formatPhoneNumber(newValue);
      }
      changeInputValue({ target: { value: newValue } });
    };

    return (
      <div className="relative flex flex-col">
        <div className="flex items-center">
          <input
            ref={ref}
            type={type === "password" && showPassword ? "text" : type} // 비밀번호 표시 토글
            className={`text-[13px] font-regular border-[1px] border-gray_100 p-[10px] w-[240px] h-[40px] rounded-[7px] p-[12px] box-border ${
              (fieldName === "비밀번호" || fieldName === "비밀번호 확인") &&
              errorBorder
                ? "focus:border-neutralred"
                : "focus:border-primary_blue"
            } focus:border-[2px] focus:outline-none`}
            style={{ width }}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {type === "password" && isFocused && (
            <div
              className="absolute right-[10px] cursor-pointer"
              onMouseDown={toggleShowPassword}
            >
              <img src={eye_icon} alt="eye_icon" />
            </div>
          )}
        </div>
        {isFocused && (
          <div className="absolute bottom-[-20px] text-[12px] font-medium text-neutralred">
            {errorMsg}
          </div>
        )}
      </div>
    );
  }
);

export default Input;
