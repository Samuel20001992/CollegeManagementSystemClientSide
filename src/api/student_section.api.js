import axios from 'axios';

const url = 'http://localhost:5000/student_sections';

export const fetchStudent_Sections = () => axios.get(url);
export const createStudent_Section = (newStudent_Section) => axios.post(url, newStudent_Section);
export const updateStudent_Section = (id, updatedStudent_Section) => axios.patch(`${url}/${id}`, updatedStudent_Section);
export const deleteStudent_Section = (id) => axios.delete(`${url}/${id}`);
export const fetchOne =  (section_name) => axios.get(`${url}/${section_name}`);