import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { getAPI, postAPI, deleteAPI } from "../../shared/api";

// actions
const UPLOAD_COMMENT = "UPLOAD_COMMENT";
const GET_COMMENT = "GET_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
// action creators
const uploadComment = createAction(UPLOAD_COMMENT, comment => ({ comment }));
const getComment = createAction(GET_COMMENT, commentList => ({ commentList }));
const deleteComment = createAction(DELETE_COMMENT, comment => ({ comment }));

const initialState = {
  commentList: [],
};

// middlewaore actions
const uploadCommentDB = (postId, comment) => {
  return async function (dispatch, getState, { history }) {
    postAPI(`/api/comments/${postId}`, { comment }).then(res => {
      console.log(res);
      dispatch(uploadComment(res.createComment));
    });
  };
};

const getCommentDB = postId => {
  return async function (dispatch, getState, { history }) {
    getAPI(`/api/comments/${postId}`).then(res => {
      console.log(res);
      dispatch(getComment(res.commentsList));
    });
  };
};

const deleteCommentDB = commentId => {
  return async function (dispatch, getState, { history }) {
    console.log(commentId);
    deleteAPI(`/api/comments/${commentId}`).then(res => {
      console.log(res);
      dispatch(deleteComment(commentId));
    });
  };
};

// reducer
export default handleActions(
  {
    [UPLOAD_COMMENT]: (state, action) =>
      produce(state, draft => {
        draft.commentList = [action.payload.comment, ...draft.commentList];
      }),
    [GET_COMMENT]: (state, action) =>
      produce(state, draft => {
        draft.commentList = action.payload.commentList;
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, draft => {
        draft.commentList = draft.commentList.filter(
          v => v.commentId !== action.payload.comment
        );
      }),
  },
  initialState
);

const actionCreators = {
  uploadCommentDB,
  getCommentDB,
  deleteCommentDB,
};

export { actionCreators };
