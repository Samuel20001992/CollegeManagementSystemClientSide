import axios from 'axios';

const url = 'http://localhost:5000/clearances';

export const fetchClearances = () => axios.get(url);
export const createClearance = (newClearance) => axios.post(url, newClearance);
export const updateClearance = (id, updatedClearance) => axios.patch(`${url}/${id}`, updatedClearance);
export const deleteClearance = (id) => axios.delete(`${url}/${id}`);
