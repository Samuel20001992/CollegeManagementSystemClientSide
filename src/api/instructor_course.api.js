import axios from 'axios';

const url = 'http://localhost:5000/instructor_courses';

export const fetchInstructor_Courses = () => axios.get(url);
export const createInstructor_Course = (newInstructor_Course) => axios.post(url, newInstructor_Course);
export const updateInstructor_Course = (id, updatedInstructor_Course) => axios.patch(`${url}/${id}`, updatedInstructor_Course);
export const deleteInstructor_Course = (id) => axios.delete(`${url}/${id}`);
