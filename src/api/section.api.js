import axios from 'axios';

const url = 'http://localhost:5000/sections';

export const fetchSections = () => axios.get(url);
export const createSection = (newSection) => axios.post(url, newSection);
export const updateSection = (id, updatedSection) => axios.patch(`${url}/${id}`, updatedSection);
export const deleteSection = (id) => axios.delete(`${url}/${id}`);
