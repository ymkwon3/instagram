import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { getAPI, postAPI, deleteAPI, postFormAPI } from "../../shared/api";

// actions
const UPLOAD_POST = "UPLOAD_POST";
const SET_POST = "SET_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const SET_LIKECNT = "SET_LIKECNT";

// action creators
const uploadPost = createAction(UPLOAD_POST, post => ({ post }));
const setPost = createAction(SET_POST, postList => ({ postList }));
const setLike = createAction(SET_LIKECNT, (postId, like) => ({ postId, like }));
const editPost = createAction(EDIT_POST, post => ({ post }));
const deletePost = createAction(DELETE_POST, postId => ({ postId }));

const initialState = {
  postList: [],
};

// middlewaore actions
const uploadPostDB = formData => {
  return async function (dispatch, getState, { history }) {
    postFormAPI("/api/posts", formData).then(res => {
      const list = {...res.postList, userImage : getState().user.userInfo.userImage};
      dispatch(uploadPost(list));
    });
  };
};

const getPostListDB = idList => {
  return async function (dispatch, getState, { history }) {
    postAPI("/api/postList", { idList }).then(res => {
      dispatch(setPost(res));
    });
  };
};

const editPostDB = (formData, postId) => {
  return async function (dispatch, getState, { history }) {
    postFormAPI(`/api/postsEdit/${postId}`, formData).then(res => {
      dispatch(editPost(res.postList));
    });
  };
};

const deletePostDB = postId => {
  return async function (dispatch, getState, { history }) {
    deleteAPI(`/api/posts/${postId}`).then(res => {
      dispatch(deletePost(postId));
    });
  };
};

// reducer
export default handleActions(
  {
    [UPLOAD_POST]: (state, action) =>
      produce(state, draft => {
        draft.postList = [action.payload.post, ...draft.postList];
      }),

    [SET_POST]: (state, action) =>
      produce(state, draft => {
        draft.postList = action.payload.postList.map(value => {
          const obj = {...value._doc, userImage: value.userImage};
          return obj;
        });
      }),
    [SET_LIKECNT]: (state, action) =>
      produce(state, draft => {
        draft.postList = draft.postList.map(v => {
          if (v._id === action.payload.postId) {
            v.likes += action.payload.like ? 1 : -1;
          }
          return v;
        });
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, draft => {
        draft.postList = draft.postList.map(p => {
          if (p._id === action.payload.post._id) {
            return action.payload.post;
          }
          return p;
        });
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, draft => {
        draft.postList = draft.postList.filter(
          post => post._id !== action.payload.postId
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
  setLike,
};

export { actionCreators };
