import axios from 'axios';

const url = 'http://localhost:5000/course_designs';

export const fetchCourse_Designs = () => axios.get(url);
export const createCourse_Design = (newCourse_Design) => axios.post(url, newCourse_Design);
export const updateCourse_Design = (id, updatedCourse_Design) => axios.patch(`${url}/${id}`, updatedCourse_Design);
export const deleteCourse_Design = (id) => axios.delete(`${url}/${id}`);
export const fetchOne =  (course_design_id) => axios.get(`${url}/${course_design_id}`);