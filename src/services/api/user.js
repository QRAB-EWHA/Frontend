import client from "./client";

const get = async (url) => {
  const res = await client.get(url);
  return res?.data;
};

const post = async (url, data) => {
  const res = await client.post(url, data);
  return res?.data;
};

export const postSignup = async (userData) => {
  try {
    const res = await client.post("/users/signup", userData, {
      headers: {
        "Content-Type": "application/json",
        // Authorization 헤더를 제외
      },
    });
    console.log(userData, "회원가입 성공");
    console.log(res);
  } catch (e) {
    console.error(e);
    if (e.response.status === 400) {
      throw new Error(e.response.data.message);
    }
  }
};
