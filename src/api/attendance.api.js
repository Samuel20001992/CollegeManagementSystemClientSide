import axios from 'axios';

const url = 'http://localhost:5000/attendances';

export const fetchAttendances = () => axios.get(url);
export const createAttendance = (newAttendance) => axios.post(url, newAttendance);
export const updateAttendance = (id, updatedAttendance) => axios.patch(`${url}/${id}`, updatedAttendance);
export const deleteAttendance = (id) => axios.delete(`${url}/${id}`);
export const fetchOne =  (section, course_code, day, month, academic_year) => axios.get(`${url}/${section}/${course_code}/${day}/${month}/${academic_year}`);
export const fetchMany = (start_day, start_month, start_year, end_day, end_month, end_year) => axios.get(`${url}/${start_day}/${start_month}/${start_year}/${end_day}/${end_month}/${end_year}`);