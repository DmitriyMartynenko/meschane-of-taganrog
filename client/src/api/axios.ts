import axios from 'axios';

const baseURL: string = import.meta.env.VITE_SERVER_URL as string;

const api = axios.create({ baseURL });

export default api;
