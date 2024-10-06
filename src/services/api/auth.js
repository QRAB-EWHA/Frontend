import client from "./client";

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
