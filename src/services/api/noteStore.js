import client from "./client";

const get = async (url) => {
  const res = await client.get(url);
  return res?.data;
};

const post = async (url, data) => {
  const res = await client.post(url, data);
  return res?.data;
};

export const PostCategory = async (categoryData) => {
  try {
    const res = await post("/categories", categoryData);
    console.log(res);
  } catch (error) {
    console.error("1계층 카테고리 추가 실패", error);
  }
};

export const PostCategoryChild = async (categoryData) => {
  try {
    const res = await post("/categories/child", categoryData);
    console.log(categoryData);
    console.log(res);
  } catch (error) {
    console.error("2계층 카테고리 추가 실패", error);
  }
};

export const getCategory = async () => {
  try {
    const res = await get("/categories/parent");
    console.log(res);
    return res;
  } catch (error) {
    console.error("1계층 카테고리 가져오기 실패", error);
  }
};

export const getCategoryChild = async (parentId) => {
  try {
    const res = await get(`/categories/parent/${parentId}/child`);
    console.log(res);
    return res;
  } catch (error) {
    console.error("2계층 카테고리 가져오기 실패", error);
  }
};

export const deleteCategory = async (categoryId) => {
  try {
    const res = await client.delete(`/categories/${categoryId}`);
    console.log(res);
    return res;
  } catch (error) {
    console.error("카테고리 삭제 실패", error);
  }
};

export const editCategory = async (updateContents) => {
  try {
    const res = await client.put(`/categories/update`, updateContents);
    console.log(res);
    return res;
  } catch (error) {
    console.error("카테고리 수정 실패", error);
  }
};

export const getCategoryFilterData = async (categoryId, page) => {
  try {
    const res = await get(`/notes/${categoryId}?page=${page}`);
    console.log(res);
    return res;
  } catch (error) {
    console.error("카테고리 필터링 실패", error);
  }
};

export const postNoteLink = async (formData) => {
  try {
    const res = await client.post(`/notes/crawl/url`, formData, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    console.error("링크 노트 저장 실패", error);
  }
};

export const postNoteFile = async (formData) => {
  try {
    const res = await post(`/notes/crawl/file`, formData, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    console.error("파일 노트 저장 실패", error);
  }
};

export const getStoredNote = async (page) => {
  try {
    const data = await get(`/notes?page=${page}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error("노트 가져오기 실패", error);
  }
};