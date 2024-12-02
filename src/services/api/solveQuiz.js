import client from "./client";

import { get, post } from "./example";

export const getUnsolvedQuiz = async (noteId, page) => {
  try {
    const data = await get(`/quiz-solving/${noteId}/unsolved?page=${page}`);
    console.log("미풀이 퀴즈 조회 성공", data);
    return data;
  } catch (error) {
    console.error("미풀이 퀴즈 조회 실패", error);
  }
};

export const getQuestions = async (quizSetId) => {
  try {
    const data = await get(`/quiz-solving/${quizSetId}/quizzes`);
    console.log("퀴즈 문제 조회 성공", data);
    return data;
  } catch (error) {
    console.error("퀴즈 문제 조회 실패", error);
  }
};

//틀렸던 문제 가져오기 (다시 풀기)
export const getResolveQuiz = async (quizSetId) => {
  try {
    const data = await get(
      `/quiz-lab/quizzes/solved/${quizSetId}/review-wrong`
    );
    console.log("틀린 퀴즈 가져오기 성공", data);
    return data;
  } catch (error) {
    console.error("틀린 퀴즈 가져오기 실패", error);
  }
};

//오답 퀴즈 풀이 재채점하기
export const postResolveQuizResult = async (quizSetId, resultData) => {
  try {
    const data = await post(
      `/quiz-lab/quizzes/solved/${quizSetId}/review-wrong/grade
`,
      resultData
    );
    console.log("퀴즈 재채점 성공", data);
    return data;
  } catch (error) {
    console.error("퀴즈 재채점 실패", error);
  }
};

//퀴즈 채점 하기
export const postQuizResult = async (quizSetId, resultData) => {
  try {
    const data = await post(
      `/quiz-solving/${quizSetId}/quizzes/grade`,
      resultData
    );
    console.log("퀴즈 채점 성공", data);
    return data;
  } catch (error) {
    console.error("퀴즈 채점 실패", error);
  }
};



