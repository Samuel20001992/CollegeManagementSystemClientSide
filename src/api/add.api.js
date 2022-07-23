import axios from 'axios';

const url = 'http://localhost:5000/addsRegister';

export const fetchAdds = () => axios.get(url);
export const createAdd = (newAdd) => axios.post(url, newAdd);
export const updateAdd = (id, updatedAdd) => axios.patch(`${url}/${id}`, updatedAdd);
export const deleteAdd = (id) => axios.delete(`${url}/${id}`);
