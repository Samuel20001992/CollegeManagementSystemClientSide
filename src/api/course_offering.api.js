import axios from 'axios';

const url = 'http://localhost:5000/course_offerings';

export const fetchCourse_Offerings = () => axios.get(url);
export const createCourse_Offering = (newCourse_Offering) => axios.post(url, newCourse_Offering);
export const updateCourse_Offering = (id, updatedCourse_Offering) => axios.patch(`${url}/${id}`, updatedCourse_Offering);
export const deleteCourse_Offering = (id) => axios.delete(`${url}/${id}`);
export const fetchOne =  (course_offering_id) => axios.get(`${url}/${course_offering_id}`);