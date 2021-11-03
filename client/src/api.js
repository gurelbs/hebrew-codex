import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const {
  REACT_APP_DN1,
  REACT_APP_DN2,
  REACT_APP_LOCAL
} = process.env;

const url = process.env.NODE_ENV === 'production' 
  ? REACT_APP_DN1 || REACT_APP_DN2
  : REACT_APP_LOCAL;

const api = axios.create({
  baseURL: url,
  sni_endpoint: url,
});

export default api;