import axios from 'axios';

const url = 'http://localhost:5000/drops';

export const fetchDrops = () => axios.get(url);
export const createDrop = (newDrop) => axios.post(url, newDrop);
export const updateDrop = (id, updatedDrop) => axios.patch(`${url}/${id}`, updatedDrop);
export const deleteDrop = (id) => axios.delete(`${url}/${id}`);
export const fetchOne =  (drop_id) => axios.get(`${url}/${drop_id}`);