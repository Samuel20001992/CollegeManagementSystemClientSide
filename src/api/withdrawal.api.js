import axios from 'axios';

const url = 'http://localhost:5000/withdrawals';

export const fetchWithdrawals = () => axios.get(url);
export const createWithdrawal = (newWithdrawal) => axios.post(url, newWithdrawal);
export const updateWithdrawal = (id, updatedWithdrawal) => axios.patch(`${url}/${id}`, updatedWithdrawal);
export const deleteWithdrawal = (id) => axios.delete(`${url}/${id}`);
export const fetchOne =  (withdraw_id) => axios.get(`${url}/${withdraw_id}`);