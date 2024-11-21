import client from "./client";

import { get, post } from "./example";

export const getProfile = async () => {
  try {
    const res = await get("/profiles");
    console.log(res);
    return res;
  } catch (error) {
    console.error("프로필 가져오기 실패", error);
  }
};

export const patchProfile = async (editedData) => {
  try {
    const res = await client.patch("/profiles/updateProfile", editedData, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    console.error("프로필 편집하기 실패", error);
  }
};

export const putMajorEdit = async (editedMajor) => {
  try {
    const res = await client.put("/profiles/updateMajor", editedMajor);
    console.log(res);
    return res;
  } catch (error) {
    console.error("학과 편집하기 실패", error);
  }
};

export const postAlarmOnOff = async () => {
  try {
    const res = await post("/profiles/notifications");
    console.log(res);
    return res;
  } catch (error) {
    console.error("알림 설정 실패", error);
  }
};

export const postAlarmTime = async (timeData) => {
  try {
    const res = await post("/profiles/emails", timeData);
    console.log(res);
    return res;
  } catch (error) {
    console.error("알림 시간 설정 실패", error);
  }
};
