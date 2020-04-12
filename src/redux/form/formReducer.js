import { RESET_INPUT, CHANGE_INPUT } from '../actionTypes';

const initialState = {
  name: '',
  number: '',
};

const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case RESET_INPUT:
      return initialState;
    case CHANGE_INPUT:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default formReducer;
