import axios from 'axios';

const url = 'http://localhost:5000/totals';

export const fetchTotals = () => axios.get(url);
export const createTotal = (newTotal) => axios.post(url, newTotal);
export const updateTotal = (id, updatedTotal) => axios.patch(`${url}/${id}`, updatedTotal);
export const deleteTotal = (id) => axios.delete(`${url}/${id}`);
export const fetchOne = (student_id) => {
    console.log("hfalaf")
    console.log("hfalaf")
    console.log("hfalaf")
    console.log("hfalaf")
    axios.get(`${url}/${student_id}`)
};
