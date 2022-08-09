
import * as api from '../api/add.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getAdds = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAdds();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createAdd = (add) => async (dispatch) => {
  try {
    const { data } = await api.createAdd(add);
    console.log('hi')
    console.log('hi')
    console.log('hi ' + data);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAdd = (id, add) => async (dispatch) => {
  try {
    const { data } = await api.updateAdd(id, add);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteAdd = (id) => async (dispatch) => {
  try {
    await api.deleteAdd(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getOneAdd = (add_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOne(add_id);
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};