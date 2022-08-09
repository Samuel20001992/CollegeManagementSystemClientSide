
import * as api from '../api/department.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getDepartments = () => async (dispatch) => {
  try {
    const { data } = await api.fetchDepartments();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createDepartment = (department) => async (dispatch) => {
  try {
    const { data } = await api.createDepartment(department);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateDepartment = (id, department) => async (dispatch) => {
  try {
    const { data } = await api.updateDepartment(id, department);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteDepartment = (id) => async (dispatch) => {
  try {
    await api.deleteDepartment(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getOneDepartment = (department_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOne(department_id);
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};