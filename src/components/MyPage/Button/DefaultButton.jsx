import { useState } from "react";
import useDeleteFriendModal from "../../../store/deleteFriendModal";

const DefaultButton = ({ text, onClick, active }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex  items-center  h-[1.375rem] px-2 py-1 rounded-[1.25rem] ${
          active || isHovered ? "bg-primary_blue" : "bg-gray_200"
        } text-xs text-medium text-white`}
      >
        {text}
      </button>
    </>
  );
};
export default DefaultButton;
