import { Couple } from "../../constants/defaults";

export type Income = {
  name: Couple;
  value: number;
};

export type Expense = {
  id: string;
  name: string;
  cost: number;
};

export type User = {
  email: string;
  firstName?: string;
  lastName?: string;
};
