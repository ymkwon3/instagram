import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { getAPI, postAPI, deleteAPI, patchAPI } from "../../shared/api";

import { getToken, setToken, removeToken } from "../../shared/localStorage";

// actions
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const ID_CHECK = "ID_CHECK";

// action creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const idCheck = createAction(ID_CHECK, (userId) => ({ userId }));

const initialState = {
  userInfo: {
    userId: "",
    userName: "",
    follower: [], // 유저를 팔로우한 사람 목록
    follow: [], // 유저가 팔로우한 사람 목록
  },
  is_login: false,
};

// middlewaore actions
const loginDB = (userId, password) => {
  return async function (dispatch, getState, { history }) {
    let data = { userId, password };
    console.log(data);

    let userInfo = postAPI("/api/login", data);
    console.log(userInfo); // 콘솔 확인 후 data 객체 안에 또 다른 key/value로 이루어져 있는지 확인하기

    // dispatch(setUser(userInfo)); // 테스트 후 정리하기
  };
};

const singupDB = (userId, userName, password, passwordCheck) => {
  return async function (dispatch, getState, { history }) {
    let data = { userId, userName, password, passwordCheck };
    console.log(data);

    console.log(postAPI("/api/signUp", data));
  };
};

const loginCheckDB = () => {
  return async function (dispatch, getState, { history }) {
    console.log(getAPI("/api/isLogin")); // 콘솔 확인 후 data 객체 안에 또 다른 key/value로 이루어져 있는지 확인하기
    let userInfo = getAPI("/api/islogin");

    // dispatch(setUser(userInfo));
  };
};

const logOutDB = () => {
  return async function (dispatch, getState, { history }) {
    console.log("-- 로그아웃 실행");
    removeToken();
    dispatch(logOut());
  };
};

const idCheckDB = () => {
  return async function (dispatch, getState, { history }) {
    console.log("-- 아이디 체크 실행");
    let userId = getState().user.userInfo.userId;
    postAPI("/api/idCheck", userId);
    // 아직 사용 용도를 몰라 해당 리듀서를 만들진 않았습니다.
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  loginDB,
  singupDB,
  loginCheckDB,
  logOutDB,
  idCheckDB,
};

export { actionCreators };
