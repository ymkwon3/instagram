import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";


// actions
const SET_USER = "SET_USER";


// action creators
const setUser = createAction(SET_USER, user => ({ user }));

const initialState = {
  userinfo: null,
};

// middlewaore actions
const loginMD = (id, pwd) => {
  return async function (dispatch, getState, { history }) {
    
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, draft => {
        draft.userinfo = action.payload.user;
      }),
  },
  initialState
);

const actionCreators = {
  loginMD,
  setUser,
};

export { actionCreators };
