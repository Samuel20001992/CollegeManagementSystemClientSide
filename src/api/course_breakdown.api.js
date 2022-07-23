import axios from 'axios';

const url = 'http://localhost:5000/course_breakdowns';

export const fetchCourse_Breakdowns = () => axios.get(url);
export const createCourse_Breakdown = (newCourse_Breakdown) => axios.post(url, newCourse_Breakdown);
export const updateCourse_Breakdown = (id, updatedCourse_Breakdown) => axios.patch(`${url}/${id}`, updatedCourse_Breakdown);
export const deleteCourse_Breakdown = (id) => axios.delete(`${url}/${id}`);
