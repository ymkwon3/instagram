import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { getAPI, postAPI, deleteAPI, patchAPI, putAPI } from "../../shared/api";

import { getToken, setToken, removeToken } from "../../shared/localStorage";

// actions
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const ID_CHECK = "ID_CHECK";
const FOLLOW_USER = "FOLLOW_USER";
const SET_LIKE = "SET_LIKE";
const UPDATE_LIKE = "UPDATE_LIKE";

// action creators
const setUser = createAction(SET_USER, user => ({ user }));
const setLike = createAction(SET_LIKE, list => ({ list }));
const updateLike = createAction(UPDATE_LIKE, (postId, isLike) => ({ postId, isLike }));
const logOut = createAction(LOG_OUT, user => ({ user }));
const idCheck = createAction(ID_CHECK, userId => ({ userId }));
const followUser = createAction(FOLLOW_USER, userId => ({ userId }));

const initialState = {
  userInfo: {
    userId: "",
    userName: "",
    follower: [], // 유저를 팔로우한 사람 목록
    follow: [], // 유저가 팔로우한 사람 목록
  },
  likePosts: [],
  is_login: false,
};

// middlewaore actions
const loginDB = data => {
  return async function (dispatch, getState, { history }) {
    postAPI("/api/login", data).then(res => {
      setToken(res.token);
      dispatch(loginCheckDB());
      history.replace("/main");
    });
  };
};

const singupDB = data => {
  return async function (dispatch, getState, { history }) {
    postAPI("/api/signUp", data).then(res => {
      alert("회원가입이 완료되었습니다.");
    });
  };
};

const loginCheckDB = () => {
  return async function (dispatch, getState, { history }) {
    // 콘솔 확인 후 data 객체 안에 또 다른 key/value로 이루어져 있는지 확인하기
    getAPI("/api/islogin").then(res => {
      console.log(res);
      dispatch(setUser(res.userInfo));
      dispatch(setLike(res.likePosts));
    });
  };
};

const logOutDB = () => {
  return async function (dispatch, getState, { history }) {
    dispatch(logOut());
  };
};

const idCheckDB = userId => {
  return async function (dispatch, getState, { history }) {
    postAPI("/api/idCheck", { userId });
    // 아직 사용 용도를 몰라 해당 리듀서를 만들진 않았습니다.
  };
};

// 친구 팔로우
const followDB = followUser => {
  return async function (dispatch, getState, { history }) {
    postAPI("/api/follow", { followUser }).then(res => {
      alert("팔로우가 완료되었습니다.");
    });
  };
};

// 친구 언팔로우
const unFollowDB = userId => {
  return async function (dispatch, getState, { history }) {
    postAPI("/api/idCheck", { userId });
    // 아직 사용 용도를 몰라 해당 리듀서를 만들진 않았습니다.
  };
};

const likeDB = postId => {
  return async function (dispatch, getState, { history }) {
    putAPI("/api/like", { postId }).then(res => {
      dispatch(updateLike(postId, true))
    });
  };
};

const unLikeDB = postId => {
  return async function (dispatch, getState, { history }) {
    deleteAPI("/api/unlike", { postId }).then(res => {
      dispatch(updateLike(postId, false))
    });
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, draft => {
        draft.userInfo = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, draft => {
        draft.is_login = false;
        removeToken();
      }),
    [SET_LIKE]: (state, action) =>
      produce(state, draft => {
        draft.likePosts = action.payload.list;
      }),
    [UPDATE_LIKE]: (state, action) =>
      produce(state, draft => {
        if(action.payload.isLike) {
          draft.likePosts.unshift(action.payload.postId)
        }else {
          draft.likePosts = draft.likePosts.filter(v => v !== action.payload.postId);
        }
      }),
    [FOLLOW_USER]: (state, action) => produce(state, draft => {}),
  },
  initialState
);

const actionCreators = {
  loginDB,
  singupDB,
  loginCheckDB,
  logOutDB,
  idCheckDB,
  followDB,
  likeDB,
  unLikeDB,
};

export { actionCreators };
