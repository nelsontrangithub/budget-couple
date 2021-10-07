import axios from "axios";
import { BASE_API_URL } from "../constants/defaults";

export type PostLoginArgs = {
  email: string;
  password: string;
};

export const postLogin = (args: PostLoginArgs) => axios.post(`${BASE_API_URL}/login`, args);
export const postSignUp = (args: PostLoginArgs) => axios.post(`${BASE_API_URL}/signup`, args);
