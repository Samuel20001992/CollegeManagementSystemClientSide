
import * as api from '../api/applicant.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getApplicants = () => async (dispatch) => {
  try {
    const { data } = await api.fetchApplicants();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createApplicant = (applicant) => async (dispatch) => {
  try {
    const { data } = await api.createApplicant(applicant);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateApplicant = (id, applicant) => async (dispatch) => {
  try {
    const { data } = await api.updateApplicant(id, applicant);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteApplicant = (id) => async (dispatch) => {
  try {
    await api.deleteApplicant(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
