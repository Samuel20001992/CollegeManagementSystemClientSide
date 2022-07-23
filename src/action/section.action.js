
import * as api from '../api/section.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getSections = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSections();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createSection = (section) => async (dispatch) => {
  try {
    const { data } = await api.createSection(section);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateSection = (id, section) => async (dispatch) => {
  try {
    const { data } = await api.updateSection(id, section);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteSection = (id) => async (dispatch) => {
  try {
    await api.deleteSection(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
