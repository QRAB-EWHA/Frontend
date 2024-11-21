import client from "./client";

import { get, post } from "./example";

export const postToken = async () => {
  try {
    const res = await client.post("/token");
    const { accessToken } = res.data;

    if (accessToken) {
      console.log(accessToken);
      localStorage.setItem("accessToken", accessToken);
      return accessToken;
    } else {
      console.log("accessToken 오류");
    }
  } catch (e) {
    console.error(e);

    if (e.response && e.response.status === 401) {
      if (e.response.data.errorCode === "EXPIRED_REFRESH_TOKEN") {
        localStorage.clear();
        window.location.href = "/";
      }
    }

    throw e;
  }
};

export const postSignup = async (userData) => {
  try {
    const res = await post("/users/signup", userData, {
      headers: {
        "Content-Type": "application/json",
        // Authorization 헤더를 제외
      },
    });
    console.log(userData, "회원가입 성공");
    console.log(res);
  } catch (error) {
    console.error("회원가입 오류", error);
  }
};

export const postLogin = async (userData) => {
  try {
    const res = await post("/users/authenticate", userData);
    const token = res.token;
    localStorage.setItem("accessToken", token);
    console.log(token);
    return { token };
  } catch (error) {
    console.error("로그인 오류", error);
  }
};

export const getEmailDoubleCheck = async (email) => {
  try {
    const res = await get(`/users/check-email?email=${email}`);
    console.log(res);
    return res;
  } catch (error) {
    console.error("이메일 중복 체크 실패", error);
  }
};

export const getNicknameDoubleCheck = async (nickname) => {
  try {
    const res = await get(`/users/check-nickname?nickname=${nickname}`);
    console.log(res);
    return res;
  } catch (error) {
    console.error("닉네임 중복 체크 실패", error);
  }
};
