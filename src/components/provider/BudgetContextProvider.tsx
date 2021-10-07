import React, { createContext, useCallback, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { OptionValue } from "../../constants/options";
import { Expense, Income, User } from "./types";
import { Couple, defaultExpenses, defaultIncomes } from "../../constants/defaults";
import { PostLoginArgs, postLogin } from "../../api/auth";

export type BudgetContextProperties = {
  incomes: Record<string, Income>;
  expenses: Record<string, Expense>;
  handleIncomeChange: (couple: Couple, value: number) => void;
  handleAddExpense: () => void;
  login: (args: PostLoginArgs) => Promise<boolean>;
  isAuthenticated: boolean;
};

const BudgetContext = createContext<BudgetContextProperties | undefined>(undefined);

export const BudgetContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | undefined>();
  const [incomes, setIncomes] = useState(defaultIncomes);
  const [expenses, setExpenses] = useState<Record<string, Expense>>(defaultExpenses);
  const [splitOption, setSplitOption] = useState<OptionValue>(OptionValue.Income);

  const isAuthenticated = !!user;

  const login = useCallback(async (args: PostLoginArgs) => {
    try {
      const { data } = await postLogin(args);
      const user: User = {
        email: data.email,
      };
      setUser(user);
      return true;
    } catch (error) {
      return false;
    }
  }, []);

  const handleIncomeChange = useCallback(
    (couple: Couple, value: number) => {
      setIncomes((s) => {
        const newstate = { ...s };

        newstate[couple] = {
          ...s[couple],
          value,
        };

        return newstate;
      });
    },
    [setIncomes],
  );

  const handleExpenseChange = useCallback(() => {}, []);

  const handleAddExpense = useCallback(() => {
    setExpenses((s) => {
      const newState = { ...s };
      newState[" "] = {
        id: uuidv4(),
        name: "",
        cost: 0,
      };
      return newState;
    });
  }, []);

  const contextValue: BudgetContextProperties = {
    incomes,
    expenses,
    handleIncomeChange,
    handleAddExpense,
    login,
    isAuthenticated,
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
