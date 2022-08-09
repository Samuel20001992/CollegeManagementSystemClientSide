import axios from 'axios';

const url = 'http://localhost:5000/applicants';

export const fetchApplicants = () => axios.get(url);
export const createApplicant = (newApplicant) => axios.post(url, newApplicant);
export const updateApplicant = (id, updatedApplicant) => axios.patch(`${url}/${id}`, updatedApplicant);
export const deleteApplicant = (id) => axios.delete(`${url}/${id}`);
export const fetchOne =  (applicant_id) => axios.get(`${url}/${applicant_id}`);