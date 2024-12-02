import client from "./client";

import { get, post } from "./example";

export const getStoredQuizNote = async (page) => {
  try {
    const data = await get(`/quiz-lab/notes?page=${page}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(console.error("노트 조회 실패", error));
  }
};

export const postNewQuiz = async (quizNum) => {
  try {
    const data = await post(`/quiz-lab/generate`, quizNum);
    console.log("퀴즈 생성 성공", data);
    return data;
  } catch (error) {
    console.error("퀴즈 생성하기 실패", error);
  }
};

export const postReQuiz = async (quizNum) => {
  try {
    const data = await post(`/quiz-lab/regenerate`, quizNum);
    console.log("퀴즈 재생성 성공", data);
    return data;
  } catch (error) {
    console.error("퀴즈 재생성하기 실패", error);
  }
};

export const getStoredQuiz = async (page) => {
  try {
    const data = await post(`/quiz-lab/quizzes?page=${page}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error("퀴즈 조회 실패", error);
  }
};

//특정 노트별로 전체 퀴즈 세트 조회
export const getQuizSetByNote = async (noteId, page) => {
  try {
    const data = await get(`/quiz-lab/quizzes/${noteId}/solved?page=${page}`);
    console.log("노트별 퀴즈 세트 조회 성공", data);
    return data;
  } catch (error) {
    console.error("노트별 퀴즈 세트 조회 실패", error);
    return {};
  }
};

//모든 퀴즈 보기 버튼 클릭 시
export const getSolvedTotalQuiz = async (quizSetId) => {
  try {
    const data = await get(`/quiz-lab/quizzes/solved/${quizSetId}/result
`);
    console.log("풀었던 모든 퀴즈 보기 조회 성공", data);
    return data;
  } catch (error) {
    console.error("풀었던 모든 퀴즈 보기 조회 실패", error);
  }
};



