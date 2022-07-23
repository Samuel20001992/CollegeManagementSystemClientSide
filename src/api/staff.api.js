import axios from 'axios';

const url = 'http://localhost:5000/staffs';

export const fetchStaffs = () => axios.get(url);
export const createStaff = (newStaff) => axios.post(url, newStaff);
export const updateStaff = (id, updatedStaff) => axios.patch(`${url}/${id}`, updatedStaff);
export const deleteStaff = (id) => axios.delete(`${url}/${id}`);
