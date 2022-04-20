import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { getAPI, postAPI, deleteAPI, postFormAPI } from "../../shared/api";

// actions
const UPLOAD_POST = "UPLOAD_POST";
const SET_POST = "SET_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";

// action creators
const uploadPost = createAction(UPLOAD_POST, (post) => ({ post }));
const setPost = createAction(SET_POST, (postList) => ({ postList }));
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
const uploadPostDB = (formData) => {
  return async function (dispatch, getState, { history }) {
    postFormAPI("/api/posts", formData).then(res => {
      console.log(res);
      dispatch(uploadPost(res.postList));
    });
  };
};

const getPostListDB = (idList) => {
  return async function (dispatch, getState, { history }) {
    postAPI("/api/postList", {idList}).then((res) => {
      dispatch(setPost(res))
    })
  };
};

const editPostDB = (formData, postId) => {
  return async function (dispatch, getState, { history }) {
    postFormAPI(`/api/postsEdit/${postId}`, formData).then(res => {
      console.log(res);
      dispatch(editPost(res.postList));
    });
  };
};


const deletePostDB = (postId) => {
  return async function (dispatch, getState, { history }) {
    console.log(postId)
    deleteAPI(`/api/posts/${postId}`).then(res => {
      dispatch(deletePost(postId));
    });
  };
};

// reducer
export default handleActions(
  {
    [UPLOAD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.postList = [action.payload.post, ...draft.postList];
      }),

    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.postList = action.payload.postList;
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.postList = draft.postList.map(p => {
          if(p.PostId === action.payload.post.PostId) {
            return action.payload.post;
          }
          return p
        })
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.postList = draft.postList.filter(
          (post) => post.PostId !== action.payload.postId
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
