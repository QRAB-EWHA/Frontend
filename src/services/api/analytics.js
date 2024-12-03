import client from "./client";
import { get, post } from "./example";

export const getThisMonthData = async (year, month) => {
  try {
    const data = await get(`/analysis/monthly?year=${year}&month=${month}`);
    console.log(data, "이번 달 통계 조회 성공");
    return data;
  } catch (error) {
    console.error(console.error("이번 달 통계 조회 실패", error));
    return {};
  }
};

export const getMonthlyData = async (year, month) => {
  try {
    const data = await get(
      `/analysis/monthly-summary?year=${year}&month=${month}`
    );
    console.log(data, "월별 통계 조회 성공");
    return data;
  } catch (error) {
    console.error(console.error("월별 통계 조회 실패", error));
    return {};
  }
};

export const getCategoryAnalytics = async (initialValue = "overall") => {
  try {
    const data = await get(`/analysis/categories?period=${initialValue}`);
    console.log(data, "카테고리 통계 조회 성공");
    return data;
  } catch (error) {
    console.error(console.error("카테고리 통계 조회 실패", error));
    return {};
  }
};

export const getWeakCategory = async () => {
  try {
    const data = await get(`/analysis/weak-categories`);
    console.log(data, "취약 카테고리 분석 조회 성공");
    return data;
  } catch (error) {
    console.error(console.error("취약 카테고리 분석 조회 실패", error));
    return {};
  }
};

export const getDetailedAnalysis = async () => {
  try {
    const data = await get(`/analysis/detailed-analysis/latest`);
    console.log(data, "상세 분석 조회 성공");
    return data;
  } catch (error) {
    console.error("상세 분석 조회 실패", error);
    return {};
  }
};

//상세분석 생성
export const postDetailedAnalysis = async () => {
  try {
    const data = await post(`/analysis/detailed-analysis`);
    console.log(data, "상세 분석 생성 성공");
    return data;
  } catch (error) {
    console.error("상세 분석 생성 실패", error);
    return {};
  }
};
