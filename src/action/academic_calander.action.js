
import * as api from '../api/academic_calander.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getAcademic_Calanders = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAcademic_Calanders();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createAcademic_Calander = (academic_calander) => async (dispatch) => {
  try {
    const { data } = await api.createAcademic_Calander(academic_calander);
    console.log('hi')
    console.log('hi')
    console.log('hi ' + data);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAcademic_Calander = (id, academic_calander) => async (dispatch) => {
  try {
    const { data } = await api.updateAcademic_Calander(id, academic_calander);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteAcademic_Calander = (id) => async (dispatch) => {
  try {
    await api.deleteAcademic_Calander(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};


export const getOneAcademicCalander = (academic_calander_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOne(academic_calander_id);
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};