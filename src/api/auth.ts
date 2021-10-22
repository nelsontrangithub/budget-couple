import axios from "axios";
import { BASE_API_URL } from "../constants/defaults";

// axios.defaults.withCredentials = true;

export type PostLoginArgs = {
  email: string;
  password: string;
};

axios.defaults.withCredentials = true;

const headers = {
  "Content-Type": "application/json",
};

export const getUser = () => axios.get(`${BASE_API_URL}/user`, { withCredentials: true });
export const postLogin = (args: PostLoginArgs) =>
  axios.post(`${BASE_API_URL}/login`, args, { withCredentials: true });
export const postSignUp = (args: PostLoginArgs) =>
  axios.post(`${BASE_API_URL}/signup`, args, { withCredentials: true });
