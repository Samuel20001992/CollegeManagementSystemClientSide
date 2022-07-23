import axios from 'axios';

const url = 'http://localhost:5000/course_registrations';

export const fetchCourse_Registrations = () => axios.get(url);
export const createCourse_Registration = (newCourse_Registration) => axios.post(url, newCourse_Registration);
export const updateCourse_Registration = (id, updatedCourse_Registration) => axios.patch(`${url}/${id}`, updatedCourse_Registration);
export const deleteCourse_Registration = (id) => axios.delete(`${url}/${id}`);
