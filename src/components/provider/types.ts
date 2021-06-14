import { Couple } from "./BudgetContextProvider";

export type Income = {
  name: Couple;
  value: number;
};

export type Expense = {
  id: string;
  name: string;
  cost: number;
};