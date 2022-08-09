import axios from 'axios';

const url = 'http://localhost:5000/student_detail';

export const fetchStudent_Details = () => axios.get(url);
export const createStudent_Detail = (newStudent_Detail) => axios.post(url, newStudent_Detail);
export const updateStudent_Detail = (id, updatedStudent_Detail) => axios.patch(`${url}/${id}`, updatedStudent_Detail);
export const deleteStudent_Detail = (id) => axios.delete(`${url}/${id}`);
export const fetchOne =  (student_id) => axios.get(`${url}/${student_id}`);