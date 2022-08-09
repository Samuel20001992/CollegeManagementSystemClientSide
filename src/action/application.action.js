
import * as api from '../api/application.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getApplications = () => async (dispatch) => {
  try {
    const { data } = await api.fetchApplications();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createApplication = (application) => async (dispatch) => {
  try {
    const { data } = await api.createApplication(application);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateApplication = (id, application) => async (dispatch) => {
  try {
    const { data } = await api.updateApplication(id, application);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteApplication = (id) => async (dispatch) => {
  try {
    await api.deleteApplication(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};


export const getOneApplication = (application_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOne(application_id);
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
