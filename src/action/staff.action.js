
import * as api from '../api/staff.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getStaffs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStaffs();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createStaff = (staff) => async (dispatch) => {
  try {
    const { data } = await api.createStaff(staff);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateStaff = (id, staff) => async (dispatch) => {
  try {
    const { data } = await api.updateStaff(id, staff);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteStaff = (id) => async (dispatch) => {
  try {
    await api.deleteStaff(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
