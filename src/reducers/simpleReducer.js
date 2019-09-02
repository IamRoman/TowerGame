import * as types from '../actions/simpleAction';

const initialState = {
  data: null,
};

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    case types.CLEAR_DATA:
      return {
        state: initialState,
      };
    default:
      return state;
  }
}
