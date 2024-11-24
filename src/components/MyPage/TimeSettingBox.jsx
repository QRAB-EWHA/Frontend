import { useState } from "react";
import { postAlarmTime } from "../../services/api/user";

const TimeSettingBox = () => {
  const [period, setPeriod] = useState("오전"); // "오전" or "오후"
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);

  const handleAlarmTime = async () => {
    const timeData = {
      hour: parseInt(hour),
      minute: parseInt(minute),
      ampm: period === "오전" ? "am" : "pm",
    };
    console.log(timeData);
    const res = await postAlarmTime(timeData);
    window.location.reload();

    console.log(res);
  };

  const hours = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0")
  );
  return (
    <>
      <div className="flex justify-between items-center w-[28.75rem] h-[5rem] px-8 rounded-[0.5rem] bg-secondary_bg">
        <div className="flex justify-between items-center w-[20rem]">
          {/* Period Selector */}
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="bg-secondary_bg text-neutralBlack text-sm rounded-lg w-[5rem] p-2.5"
          >
            <option value="오전">오전</option>
            <option value="오후">오후</option>
          </select>

          {/* Hour Selector */}
          <div className="flex gap-3">
            <select
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              className="bg-secondary_bg  text-neutralBlack text-sm rounded-lg w-[5rem] p-2.5"
            >
              {hours.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>

            {/* Minute Selector */}
            <select
              value={minute}
              onChange={(e) => setMinute(e.target.value)}
              className="bg-secondary_bg  text-neutralBlack text-sm rounded-lg w-[5rem] p-2.5"
            >
              {minutes.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div
          onClick={handleAlarmTime}
          className="text-sm font-medium text-gray_400 hover:text-primary_blue hover:underline cursor-pointer"
        >
          저장
        </div>
      </div>
    </>
  );
};
export default TimeSettingBox;
