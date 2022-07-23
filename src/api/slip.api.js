import axios from 'axios';

const url = 'http://localhost:5000/slips';

export const fetchSlips = () => axios.get(url);
export const fetchOne =  (attendance_year, semester,student_id) => axios.get(`${url}/${attendance_year}/${semester}/${student_id}`);
export const createSlip = (newSlip) => axios.post(url, newSlip);
export const updateSlip = (id, updatedSlip) => axios.patch(`${url}/${id}`, updatedSlip);
export const deleteSlip = (id) => axios.delete(`${url}/${id}`);
