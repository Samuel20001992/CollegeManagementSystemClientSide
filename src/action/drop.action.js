
import * as api from '../api/drop.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getDrops = () => async (dispatch) => {
  try {
    const { data } = await api.fetchDrops();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createDrop = (drop) => async (dispatch) => {
  try {
    const { data } = await api.createDrop(drop);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateDrop = (id, drop) => async (dispatch) => {
  try {
    const { data } = await api.updateDrop(id, drop);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteDrop = (id) => async (dispatch) => {
  try {
    await api.deleteDrop(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getOneDrop = (drop_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOne(drop_id);
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};