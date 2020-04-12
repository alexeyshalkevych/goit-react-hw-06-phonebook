import { CHANGE_INPUT, RESET_INPUT } from '../actionTypes';

export const changeInput = (field, value) => ({
  type: CHANGE_INPUT,
  payload: { [field]: value },
});

export const resetForm = () => ({
  type: RESET_INPUT,
});
