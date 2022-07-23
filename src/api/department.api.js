import axios from 'axios';

const url = 'http://localhost:5000/departments';

export const fetchDepartments = () => axios.get(url);
export const createDepartment = (newDepartment) => axios.post(url, newDepartment);
export const updateDepartment = (id, updatedDepartment) => axios.patch(`${url}/${id}`, updatedDepartment);
export const deleteDepartment = (id) => axios.delete(`${url}/${id}`);
