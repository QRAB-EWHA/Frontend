import client from "./client";

import { get, post } from "./example";

export const postAddFriend = async (addFriendData) => {
  try {
    const data = await post(`/friends`, addFriendData);
    console.log("친구 추가 성공", data);
    return data;
  } catch (error) {
    console.error("친구 추가 실패", error);
  }
};

export const deleteFriends = async (friendshipId) => {
  try {
    const data = await client.delete(`/friends/${friendshipId}`);
    console.log("친구 삭제 성공", data);
    return data;
  } catch (error) {
    console.error("친구 삭제 실패", error);
  }
};

export const getFriendNotes = async (friendshipId, page) => {
  try {
    const data = await get(`/friends/${friendshipId}/notes?page=${page}`);
    console.log("친구 노트 조회 성공", data);
    return data;
  } catch (error) {
    console.error("친구 노트 조회 실패", error);
  }
};

export const postAddFriendNote = async (noteId, formData) => {
  console.log(noteId, formData);
  try {
    const data = await client.post(`/friends/notes/${noteId}`, formData, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
    });
    console.log("친구 노트 추가 성공", data);
    return data;
  } catch (error) {
    console.error("친구 노트 추가 실패", error);
  }
};
