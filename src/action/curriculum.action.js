
import * as api from '../api/curriculum.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getCurriculums = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCurriculums();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createCurriculum = (curriculum) => async (dispatch) => {
  try {
    const { data } = await api.createCurriculum(curriculum);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCurriculum = (id, curriculum) => async (dispatch) => {
  try {
    const { data } = await api.updateCurriculum(id, curriculum);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteCurriculum = (id) => async (dispatch) => {
  try {
    await api.deleteCurriculum(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
