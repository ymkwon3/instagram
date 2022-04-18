import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { getAPI, postAPI, deleteAPI, patchAPI } from "../../shared/api";

// actions
const UPLOAD_POST = "UPLOAD_POST";
const GET_POSTLIST = "GET_POSTLIST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";

// action creators
const uploadPost = createAction(UPLOAD_POST, (post) => ({ post }));
const getPostList = createAction(GET_POSTLIST, (postList) => ({ postList }));
const editPost = createAction(EDIT_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));

const initialState = {
  postList: [],
};

const initialPost = {
  postId: "",
  content: "",
  imageUrl: "",
  createdAt: "",
  userId: "",
  // 추가적인 변수가 생길 시 추가
};

// middlewaore actions
const uploadPostDB = (content, imageUrl) => {
  return async function (dispatch, getState, { history }) {
    let data = { content: content, imageUrl: imageUrl };

    console.log(postAPI("/api/posts", data));

    dispatch(uploadPost(postAPI("/api/posts", data)));
  };
};

const getPostListDB = () => {
  return async function (dispatch, getState, { history }) {
    console.log(getAPI("/api/postList"));

    dispatch(getPostList(getAPI("/api/postList")));
  };
};

const editPostDB = (postId, content, imageUrl) => {
  return async function (dispatch, getState, { history }) {
    let data = { content: content, imageUrl: imageUrl };

    console.log(patchAPI(`/api/posts/${postId}`, data));

    dispatch(editPost(patchAPI("/api/posts", data)));
  };
};

const deletePostDB = (postId) => {
  return async function (dispatch, getState, { history }) {
    console.log(deleteAPI(`/api/posts/${postId}`));

    dispatch(deletePost(postId));
  };
};

// reducer
export default handleActions(
  {
    [UPLOAD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.postList = [action.payload.post, ...draft.postList];
      }),

    [GET_POSTLIST]: (state, action) =>
      produce(state, (draft) => {
        draft.postList = action.payload.postList;
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.postList = [...draft.postList, ...action.payload.post];
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.postList = draft.postList.filter(
          (post) => post.postId !== action.payload.postId
        );
      }),
  },
  initialState
);

const actionCreators = {
  uploadPostDB,
  getPostListDB,
  editPostDB,
  deletePostDB,
};

export { actionCreators };
