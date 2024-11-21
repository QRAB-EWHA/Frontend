import client from "./client";

import { get } from "./example";

export const getMain = async () => {
  try {
    const res = await get("/qrab");
    console.log("메인 데이터 가져오기 성공", res);
    return res;
  } catch (error) {
    console.error("메인 데이터 가져오기 실패", error);
  }
};
