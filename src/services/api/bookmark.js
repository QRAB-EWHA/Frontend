import client from "./client";
import { del, get, post } from "./example";

//북마크 생성
export const postBookmarks = async (bookmarkData) => {
  console.log(bookmarkData);
  try {
    const data = await post(`/bookmarks`, bookmarkData);
    console.log("북마크 성공", data);
    return data;
  } catch (error) {
    console.error("북마크 실패", error);
  }
};

//북마크 노트 조회
export const getBookmarkNote = async () => {
  try {
    const data = await get(`/bookmarks/notes?page=0`);
    console.log("북마크 노트 조회 성공", data);
    return data;
  } catch (error) {
    console.error("북마크 노트 조회 실패", error);
  }
};

//특정 노트 북마크 조회
export const getBookmarkQuizByNote = async (id) => {
  try {
    const data = await get(`/bookmarks/notes/${id}/quizzes`);
    console.log("노트별 북마크 조회 성공", data);
    return data;
  } catch (error) {
    console.error("노트별 북마크 조회 실패", error);
  }
};

//북마크 삭제
export const deleteBookmarkQuiz = async (id) => {
  try {
    const data = await del(`/bookmarks/${id}`);
    console.log("북마크 삭제 성공", data);
    return data;
  } catch (error) {
    console.error("북마크 삭제 실패", error);
  }
};
