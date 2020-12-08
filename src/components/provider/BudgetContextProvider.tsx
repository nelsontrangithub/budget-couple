import React, { createContext, useCallback, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { OptionValue } from "../../constants/options";
import { Expense, Income } from "./types";

const defaultIncomes = {
  You: { name: "You", value: 35000 },
  Partner: { name: "Partner", value: 75000 },
};

const defaultExpenses = {
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

interface Props {}

export type BudgetContextProperties = {
  incomes: Record<string, Income>;
  expenses: Record<string, Expense>;
};

const BudgetContext = createContext<
  BudgetContextProperties | undefined
>(undefined);

export const BudgetContextProvider: React.FC<Props> = ({
  children,
}) => {
  const [incomes, setIncomes] = useState(defaultIncomes);
  const [expenses, setExpenses] = useState(defaultExpenses);
  const [splitOption, setSplitOption] = useState<OptionValue>(OptionValue.Income);

  const handleIncomeChange = useCallback(() => {}, []);

  const handleExpenseChange = useCallback(() => {}, []);

  const contextValue: BudgetContextProperties = {
    incomes,
    expenses,
  };
  return <BudgetContext.Provider value={contextValue}>{children}</BudgetContext.Provider>;
};

export const useBudgetContext = (): BudgetContextProperties => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error(
      "useBudgetContext must be used in BudgetContextProvider",
    );
  }

  return context;
};
