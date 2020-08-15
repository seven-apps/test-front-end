import axios from 'axios';

const api = axios.create({
  baseURL: 'https://random-persons.herokuapp.com/users',
});
export default api;
