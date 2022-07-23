import axios from 'axios';

const url = 'http://localhost:5000/curriculums';

export const fetchCurriculums = () => axios.get(url);
export const createCurriculum = (newCurriculum) => axios.post(url, newCurriculum);
export const updateCurriculum = (id, updatedCurriculum) => axios.patch(`${url}/${id}`, updatedCurriculum);
export const deleteCurriculum = (id) => axios.delete(`${url}/${id}`);
