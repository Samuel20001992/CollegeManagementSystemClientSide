import axios from 'axios';

const url = 'http://localhost:5000/semester_grades';

export const fetchSemester_Grades = () => axios.get(url);
export const createSemester_Grade = (newSemester_Grade) => axios.post(url, newSemester_Grade);
export const updateSemester_Grade = (id, updatedSemester_Grade) => axios.patch(`${url}/${id}`, updatedSemester_Grade);
export const deleteSemester_Grade = (id) => axios.delete(`${url}/${id}`);
export const fetchOne =  (semester_grade_id) => axios.get(`${url}/${semester_grade_id}`);