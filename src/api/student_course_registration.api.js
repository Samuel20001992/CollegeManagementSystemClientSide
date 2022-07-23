import axios from 'axios';

const url = 'http://localhost:5000/student_course_registrations'; 

export const fetchStudent_Course_Registrations = () => axios.get(url);
export const fetchOne =  (attendance_year, semester,student_id) => axios.get(`${url}/${attendance_year}/${semester}/${student_id}`);
export const createStudent_Course_Registration = (newStudent_Course_Registration) => axios.post(url, newStudent_Course_Registration);
export const updateStudent_Course_Registration = (id, updatedStudent_Course_Registration) => axios.patch(`${url}/${id}`, updatedStudent_Course_Registration);
export const deleteStudent_Course_Registration = (id) => axios.delete(`${url}/${id}`);
