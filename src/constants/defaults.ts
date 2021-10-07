import { v4 as uuidv4 } from "uuid";

export const BASE_API_URL = process.env["REACT_APP_BASE_API_URL"] ?? "";

export enum Couple {
  You = "You",
  Partner = "Partner",
}

export const defaultIncomes = {
  You: { name: Couple.You, value: 35000 },
  Partner: { name: Couple.Partner, value: 75000 },
};

export const defaultExpenses = {
  Netflix: {
    id: uuidv4(),
    name: "Netflix",
    cost: 10.99,
  },
  Electricity: {
    id: uuidv4(),
    name: "Electricity",
    cost: 30.0,
  },
  Cellular: {
    id: uuidv4(),
    name: "Cellular",
    cost: 50.0,
  },
  Groceries: {
    id: uuidv4(),
    name: "Groceries",
    cost: 200.0,
  },
};
