import axios from 'axios';

const url = 'http://localhost:5000/academic_calanders';

export const fetchAcademic_Calanders = () => axios.get(url);
export const createAcademic_Calander = (newAcademic_Calander) => axios.post(url, newAcademic_Calander);
export const updateAcademic_Calander = (id, updatedAcademic_Calander) => axios.patch(`${url}/${id}`, updatedAcademic_Calander);
export const deleteAcademic_Calander = (id) => axios.delete(`${url}/${id}`);
