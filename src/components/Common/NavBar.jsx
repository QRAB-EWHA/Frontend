import { NavLink, useNavigate } from "react-router-dom";
import { MenuList } from "../../constants/MenuList";
import qrabLogo from "../../assets/common/qrabLogo.svg";
import userImg from "../../assets/common/navbar/userImg.svg";
import useIsBrightModeStore from "../../store/isBrightModeStore";
import bright_userImg from "../../assets/common/navbar/bright_userImg.svg";
import { useEffect, useState } from "react";
import { authSubMenuList } from "../../constants/AuthNavbar";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/api/user";

const NavBar = () => {
  const [hoveredAuth, setHoveredAuth] = useState(false);
  const [hoveredNavbar, setHoveredNavbar] = useState(null);
  const [nickname, setNickname] = useState("");
  const { isBrightMode, setIsBrightMode } = useIsBrightModeStore();
  const navigate = useNavigate();

  useEffect(() => {
    const getProfileData = async () => {
      const res = await getProfile();
      console.log(res);
      if (res) {
        setNickname(res.nickname);
      }
    };
    getProfileData();
  }, []);

  const handleLogo = () => {
    setIsBrightMode(false);
    navigate("/");
  };

  const handleMyPage = () => {
    setIsBrightMode(true);
    navigate("/mypage");
  };

  const handleSubNavbar = () => {
    if (nickname) {
      localStorage.removeItem("accessToken");
      window.location.reload();
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="relative">
      <div
        className={`flex pt-[24px] pb-[5px] justify-center items-center ${
          isBrightMode ? "border-b-[1px] " : "mb-[145px]"
        } `}
      >
        <img
          onClick={handleLogo}
          className="cursor-pointer"
          src={qrabLogo}
          alt="qrab_logo"
        />
        <div
          className={`flex items-center justify-center text-l font-medium ml-[168px] mr-[168px] gap-[42px] ${
            isBrightMode ? "text-neutralblack" : "text-neutralwhite"
          } `}
        >
          {MenuList.map((it, index) => (
            <div key={index}>
              <div
                className="relative"
                onMouseEnter={() => setHoveredNavbar(it.id)}
                onMouseLeave={() => setHoveredNavbar(null)}
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? isBrightMode
                        ? "text-primary_blue font-semibold"
                        : "text-[#ABCBFF] font-semibold"
                      : isBrightMode
                      ? "hover:text-primary_blue hover:font-semibold"
                      : ""
                  }
                  to={it.to}
                  key={it.id}
                >
                  {it.name}
                </NavLink>
                {it.id === 3 && hoveredNavbar === 3 && (
                  <>
                    <div
                      className="absolute -translate-x-1/3 z-10 "
                      onMouseEnter={() => setHoveredNavbar(it.id)}
                      onMouseLeave={() => setHoveredNavbar(null)}
                    >
                      <div className="h-4 bg-transparent"></div>
                      <div
                        className={`flex items-center gap-6 w-[20.8125rem] h-[2.3125rem] px-10 py-[0.62rem] rounded-[1.25rem] ${
                          isBrightMode ? "bg-secondary_skyblue" : "bg-white"
                        } text-sm font-medium text-neutralBlack cursor-pointer`}
                      >
                        {it.subMenu.map((item, index) => (
                          <NavLink
                            key={index}
                            to={item.to}
                            className="hover:text-primary_blue hover:underline"
                          >
                            <div className="flex justify-center w-auto min-w-[4rem]">
                              {item.name}
                            </div>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                {it.id === 5 && hoveredNavbar === 5 && (
                  <>
                    <div
                      className="absolute -translate-x-1/3 z-10 "
                      onMouseEnter={() => setHoveredNavbar(it.id)}
                      onMouseLeave={() => setHoveredNavbar(null)}
                    >
                      <div className="h-4 bg-transparent"></div>
                      <div
                        className={`flex items-center gap-6 w-[16.5rem] h-[2.3125rem] px-10 py-[0.62rem] rounded-[1.25rem] ${
                          isBrightMode ? "bg-secondary_skyblue" : "bg-white"
                        } text-sm font-medium text-neutralBlack cursor-pointer`}
                      >
                        {it.subMenu.map((item, index) => (
                          <NavLink
                            key={index}
                            to={item.to}
                            className="hover:text-primary_blue hover:underline"
                          >
                            <div className="flex justify-center w-auto min-w-[4rem]">
                              {item.name}
                            </div>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          onMouseEnter={() => setHoveredAuth(true)}
          onMouseLeave={() => setHoveredAuth(false)}
          className="relative"
        >
          <div
            onClick={handleMyPage}
            className={`flex gap-[8px] items-center w-fit h-[22px] rounded-[24px] ${
              isBrightMode
                ? "bg-secondary_skyblue"
                : "border-[1px] border-[#404040]"
            } py-[6px] pr-[12px] pl-[8px] box-content cursor-pointer`}
          >
            <img
              className="w-[16px] h-[16px]"
              src={`${!isBrightMode ? userImg : bright_userImg}`}
            />
            <div
              className={`text-l font-medium ${
                isBrightMode ? "text-primary_blue" : "text-neutralwhite"
              }`}
            >
              {nickname ? nickname : "로그인"}
            </div>
          </div>
          {/* 투명한 간격 추가 */}
          <div className="h-[8px] bg-transparent"></div>
          {/* 실제 메뉴 목록 */}
          {hoveredAuth && (
            <div
              className={`absolute right-[-15px] z-10 flex flex-col w-[7.5rem] h-auto py-3 rounded-[8px] ${
                isBrightMode ? "bg-secondary_skyblue" : "bg-white"
              }`}
            >
              <div
                className={`flex flex-col h-full justify-center items-center font-medium`}
              >
                <div
                  className="hover:text-primary_blue hover:underline cursor-pointer"
                  onClick={handleSubNavbar}
                >
                  {nickname ? "로그아웃" : "로그인"}
                </div>
                {!nickname && (
                  <>
                    <div className="w-[56px] h-[1px] my-2 bg-gray_100"></div>

                    <NavLink
                      className="hover:text-primary_blue hover:underline"
                      to="/signup"
                    >
                      회원가입
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
