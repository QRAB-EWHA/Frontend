import closeIcon from "../../../assets/common/close_icon.svg";

const ModalContainer = ({ setModal, modalName, children }) => {
  return (
    <div className="relative w-[780px] h-[480px] bg-neutralwhite rounded-[16px]">
      <button
        className="cursor-pointer absolute right-[-30px]"
        onClick={() => setModal(false)}
      >
        <img src={closeIcon} alt="close_button" />
      </button>
      <div className="flex flex-col gap-[20px] justify-center items-center ">
        <div className="text-[16px] font-semibold mt-[32px]">{modalName}</div>
        {children}
      </div>
    </div>
  );
};
export default ModalContainer;
