import axios from "axios";
import { BASE_API_URL } from "../constants/defaults";

export const getExpenses = () => axios.get(`${BASE_API_URL}/expenses`);
