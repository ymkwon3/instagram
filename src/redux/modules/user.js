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
const loginDB = (data) => {
  return async function (dispatch, getState, { history }) {
    postAPI("/api/login", data).then(res => {
      setToken(res.token);
      history.replace('/main')
    });
  };
};

const singupDB = (data) => {
  return async function (dispatch, getState, { history }) {
    console.log(data);

    postAPI("/api/signUp", data)
  };
};

const loginCheckDB = () => {
  return async function (dispatch, getState, { history }) {
   // 콘솔 확인 후 data 객체 안에 또 다른 key/value로 이루어져 있는지 확인하기
    getAPI("/api/islogin").then(res => {
      dispatch(setUser(res.userInfo));
    })
  };
};

const logOutDB = () => {
  return async function (dispatch, getState, { history }) {
    dispatch(logOut());
  };
};

const idCheckDB = (userId) => {
  return async function (dispatch, getState, { history }) {
    postAPI("/api/idCheck", {userId});
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
        removeToken();
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
