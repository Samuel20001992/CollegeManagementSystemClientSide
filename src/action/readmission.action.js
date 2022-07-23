
import * as api from '../api/readmission.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getReadmissions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchReadmissions();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createReadmission = (readmission) => async (dispatch) => {
  try {
    const { data } = await api.createReadmission(readmission);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateReadmission = (id, readmission) => async (dispatch) => {
  try {
    const { data } = await api.updateReadmission(id, readmission);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteReadmission = (id) => async (dispatch) => {
  try {
    await api.deleteReadmission(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
