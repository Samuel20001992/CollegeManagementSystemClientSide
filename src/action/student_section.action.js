
import * as api from '../api/student_section.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getStudent_Sections = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStudent_Sections();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createStudent_Section = (section_name) => async (dispatch) => {
  try {
    const { data } = await api.createStudent_Section(section_name);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateStudent_Section = (id, student_section) => async (dispatch) => {
  try {
    const { data } = await api.updateStudent_Section(id, student_section);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteStudent_Section = (id) => async (dispatch) => {
  try {
    await api.deleteStudent_Section(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getOneStudent_Section = (section_name) => async (dispatch) => {
  try {
    const { data } = await api.fetchOne(section_name);
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};