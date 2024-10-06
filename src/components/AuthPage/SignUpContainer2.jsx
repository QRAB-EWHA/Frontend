import { useEffect, useRef, useState } from "react";
import stagetwo from "../../assets/authpage/stage_two_active.svg";
import stageone from "../../assets/authpage/stage_one_only.svg";
import MajorInput from "./MajorInput";
import LiberalMajor from "./LiberalMajorTab";
import {
  ArtsEducationMajor,
  ArtsMajor,
  EducationMajor,
  EngineeringMajor,
  HumanitiesMajor,
  MedicalMajor,
  naturalScienceMajor,
  ScienceEducationMajor,
  SocialMajor,
} from "../../constants/MajorList";
import Button from "../Common/Button";

const SignUpContainer2 = () => {
  const [tab, setTab] = useState("1");
  const [majorValue, setMajorValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [thirdValue, setThirdValue] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [buttonActive, setButtonActive] = useState(false);
  const [major, setMajor] = useState();

  const handleTab = (tabNum) => {
    setTab(tabNum);
  };

  const handleMajorSelection = (majorName) => {
    if (focusedInput === 1) {
      setMajorValue(majorName);
    } else if (focusedInput === 2) {
      setSecondValue(majorName);
    } else if (focusedInput === 3) {
      setThirdValue(majorName);
    }
  };

  useEffect(() => {
    if (majorValue) {
      setButtonActive(true);
    }
  }, [majorValue]);

  return (
    <div className="flex flex-col items-center overflow-y-hidden">
      <div className="mt-[36.5px] w-[620px] h-[233px] rounded-[16px] border-[1px] border-[#D9DBE1] ">
        <div className="flex flex-col items-center">
          <div className="flex gap-[4px] justify-center mt-[32px] mb-[32px]">
            <img className="" src={stageone} />
            <img className="animate-slideInRight" src={stagetwo} />
          </div>
          <div className="flex gap-[16px]">
            <MajorInput
              value={majorValue}
              text="주전공"
              autoFocus={true}
              onFocus={() => setFocusedInput(1)}
            />
            <MajorInput
              value={secondValue}
              text="부·복수전공"
              onFocus={() => setFocusedInput(2)}
            />
            <MajorInput
              value={thirdValue}
              text="부·복수전공"
              onFocus={() => setFocusedInput(3)}
            />
          </div>
        </div>
        <div className="flex justify-center mt-[20px]">
          <Button
            width="112px"
            height="40px"
            buttonText="완료"
            buttonActive={buttonActive}
          />
        </div>
      </div>
      <div
        className={` w-screen ${
          tab === "1" ? "h-[909px]" : tab === "2" ? "h-[1108px]" : "h-[600px]"
        } bg-secondary_bg mt-[92px]`}
      >
        <div className="flex justify-center relative top-[-27px]">
          <div
            onClick={() => handleTab("1")}
            className={`cursor-pointer flex items-center justify-center ${
              tab === "1"
                ? "text-neutralwhite bg-primary_blue"
                : "text-gray_300"
            }  w-[124px] h-[54px] rounded-l-[8px] bg-neutralwhite border-[1px] border-gray_100`}
          >
            인문·사회·자유
          </div>
          <div
            onClick={() => handleTab("2")}
            className={`cursor-pointer flex items-center justify-center  ${
              tab === "2"
                ? "text-neutralwhite bg-primary_blue"
                : "text-gray_300"
            } w-[124px] h-[54px]  bg-neutralwhite border-[1px] border-gray_100`}
          >
            자연·공학·의약
          </div>
          <div
            onClick={() => handleTab("3")}
            className={`cursor-pointer flex items-center justify-center  ${
              tab === "3"
                ? "text-neutralwhite bg-primary_blue"
                : "text-gray_300"
            } w-[124px] h-[54px] rounded-r-[8px] bg-neutralwhite border-[1px] border-gray_100`}
          >
            예체능
          </div>
        </div>
        {tab === "1" ? (
          <div className="flex flex-col gap-[48px]">
            <LiberalMajor
              setMajorValue={handleMajorSelection}
              sortingName="인문계열(17)"
              sortingList={HumanitiesMajor}
              setMajor={setMajor}
              major={major}
            />
            <LiberalMajor
              setMajorValue={handleMajorSelection}
              sortingName="사회계열(18)"
              sortingList={SocialMajor}
              setMajor={setMajor}
              major={major}
            />
            <LiberalMajor
              setMajorValue={handleMajorSelection}
              sortingName="교육계열(8)"
              sortingList={EducationMajor}
              setMajor={setMajor}
              major={major}
            />
          </div>
        ) : tab === "2" ? (
          <div className="flex flex-col gap-[48px]">
            <LiberalMajor
              setMajorValue={handleMajorSelection}
              sortingName="교육계열(4)"
              sortingList={ScienceEducationMajor}
              setMajor={setMajor}
              major={major}
            />
            <LiberalMajor
              setMajorValue={handleMajorSelection}
              sortingName="공학계열(24)"
              sortingList={EngineeringMajor}
              setMajor={setMajor}
              major={major}
            />
            <LiberalMajor
              setMajorValue={handleMajorSelection}
              sortingName="자연계열(16)"
              sortingList={naturalScienceMajor}
              setMajor={setMajor}
              major={major}
            />
            <LiberalMajor
              setMajorValue={handleMajorSelection}
              sortingName="의약계열(10)"
              sortingList={MedicalMajor}
              setMajor={setMajor}
              major={major}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-[48px]">
            <LiberalMajor
              setMajorValue={handleMajorSelection}
              sortingName="교육계열(8)"
              sortingList={ArtsEducationMajor}
              setMajor={setMajor}
              major={major}
            />
            <LiberalMajor
              setMajorValue={handleMajorSelection}
              sortingName="예체능계열(16)"
              sortingList={ArtsMajor}
              setMajor={setMajor}
              major={major}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default SignUpContainer2;
