
import * as api from '../api/withdrawal.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getWithdrawals = () => async (dispatch) => {
  try {
    const { data } = await api.fetchWithdrawals();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createWithdrawal = (withdrawal) => async (dispatch) => {
  try {
    const { data } = await api.createWithdrawal(withdrawal);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateWithdrawal = (id, withdrawal) => async (dispatch) => {
  try {
    const { data } = await api.updateWithdrawal(id, withdrawal);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteWithdrawal = (id) => async (dispatch) => {
  try {
    await api.deleteWithdrawal(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
