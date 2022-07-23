import axios from 'axios';

const url = 'http://localhost:5000/applications';

export const fetchApplications = () => axios.get(url);
export const createApplication= (newApplications) => axios.post(url, newApplications);
export const updateApplication = (id, updatedApplications) => axios.patch(`${url}/${id}`, updatedApplications);
export const deleteApplication = (id) => axios.delete(`${url}/${id}`);
