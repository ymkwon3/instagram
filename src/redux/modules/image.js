import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// actions
const SET_PREVIEW = "SET_PREVIEW";

// actions creators
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));

// initialState
const initialState = {
  preview: null,
};

// middlewares

// reducer
export default handleActions(
  {
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
  },
  initialState
);

// return Action Creators to export
const actionCreator = {
  setPreview,
};

export { actionCreator };
