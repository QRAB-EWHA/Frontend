import { useNavigate } from "react-router-dom";
import user_img_ex from "../../assets/mypage/user_img_ex.svg";
import img_edit from "../../assets/mypage/img_edit.svg";

const UserInfoBox = () => {
  const navigate = useNavigate();
  const handleEditProfile = () => {
    navigate("/mypage/editprofile");
  };

  const handleEditImg = () => {};

  return (
    <>
      <div className="w-[13.75rem] h-[29.0625rem] p-4 rounded-[1rem] border-[1px] border-gray_100">
        <div className="flex flex-col gap-6">
          <button
            onClick={handleEditProfile}
            className="flex items-center w-[4.44rem] h-[1.38rem] px-2 py-1 rounded-[1.25rem] bg-gray_200 text-xs font-medium text-white"
          >
            프로필 수정
          </button>
          <div className="flex flex-col gap-4 items-center">
            <div className="relative">
              <img
                className="relative z-0 w-20 h-20 rounded-full"
                src={user_img_ex}
              />
              <img
                onClick={handleEditImg}
                className="absolute z-10 bottom-0 right-0 cursor-pointer"
                src={img_edit}
              />
            </div>
            <div className="flex gap-1 mb-[1.5rem]">
              <div className="text-base font-semibold text-neutralBlack">
                닉네임
              </div>
              <div className="text-base font-medium text-neutralBlack">님</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center w-[10rem]">
                <div className="text-xs font-medium text-gray_400">
                  큐랩스코어
                </div>
                <div className="flex items-center w-auto h-7 px-2 py-1 rounded-[1.25rem] bg-primary_blue text-sm text-white">
                  17점
                </div>
              </div>
              <div className="flex justify-between items-center w-[10rem]">
                <div className="text-xs font-medium text-gray_400">
                  전화번호
                </div>
                <div className="text-[0.8125rem] text-neutralBlack">
                  010-1234-5678
                </div>
              </div>

              <div className="flex justify-between items-start w-[10rem]">
                <div className="text-xs font-medium text-gray_400">전공</div>
                <div className="flex flex-col items gap-3">
                  <div className="text-[0.8125rem] text-neutralBlack">
                    컴퓨터공학과
                  </div>
                  <div className="text-[0.8125rem] text-neutralBlack">
                    전자전기공학과
                  </div>
                  <div className="text-[0.8125rem] text-neutralBlack">
                    화학공학과
                  </div>
                </div>
              </div>
              <div className="w-[10.75rem] border-b-[0.0625rem] border-gray_100"></div>
              <div className="flex justify-between items-center w-[10rem]">
                <div className="text-xs font-medium text-gray_400">알림</div>
                <div className="text-[0.8125rem] text-neutralBlack">
                  매일 오전 11시
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserInfoBox;