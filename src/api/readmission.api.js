import axios from 'axios';

const url = 'http://localhost:5000/readmissions';

export const fetchReadmissions = () => axios.get(url);
export const createReadmission = (newReadmission) => axios.post(url, newReadmission);
export const updateReadmission = (id, updatedReadmission) => axios.patch(`${url}/${id}`, updatedReadmission);
export const deleteReadmission = (id) => axios.delete(`${url}/${id}`);
