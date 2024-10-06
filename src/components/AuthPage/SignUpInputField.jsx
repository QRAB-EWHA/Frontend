import { useEffect, useRef, useState } from "react";
import Button from "../Common/Button";
import Input from "../Common/Input";
import DoubleCheckButton from "./DoubleCheckButton";

const SignUpInputField = ({
  fieldName,
  showButton,
  width = "240px",
  placeholder,
  autoFocus = false,
  changeInputValue,
  value,
  type,
  password,
  onValidateChange,
  NoErr,
}) => {
  const inputRef = useRef(null);
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <>
      <div className="flex items-center gap-[16px]">
        <div className="w-[77px] text-[14px] font-medium">{fieldName}</div>
        <Input
          setButtonActive={setButtonActive}
          ref={inputRef}
          width={width}
          placeholder={placeholder}
          changeInputValue={changeInputValue}
          value={value}
          fieldName={fieldName}
          type={type}
          password={password}
          onValidateChange={onValidateChange}
          NoErr={NoErr}
        />
        {showButton && (
          <DoubleCheckButton
            buttonText="중복 확인"
            buttonActive={buttonActive}
          />
        )}
      </div>
    </>
  );
};
export default SignUpInputField;
