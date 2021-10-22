import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { OptionValue } from "../../constants/options";
import { Expense, Income, User } from "./types";
import { Couple, defaultExpenses, defaultIncomes } from "../../constants/defaults";
import { PostLoginArgs, postLogin, getUser } from "../../api/auth";
import { getExpenses } from "../../api/expenses";

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

  useEffect(() => {
    async function getLogin() {
      try {
        const user = await getUser();
        console.log(user, "hi");
        return user;
      } catch (error) {
        console.log(error, "ERROR");
      }
    }
    getLogin();
    console.log("hello get user");
  }, []);

  const login = useCallback(async (args: PostLoginArgs) => {
    try {
      const { data } = await postLogin(args);
      // const { data: expenseData } = await getExpenses();
      const user: User = {
        email: data.email,
      };
      setUser(user);
      // @ts-ignore
      const incomeData = data.user.profile.income as any;
      // @ts-ignore
      const expensesData = data.expenses as Expense[];
      const incomes = {
        You: { name: Couple.You, value: incomeData.you },
        Partner: { name: Couple.Partner, value: incomeData.partner },
      };
      const expenses: Record<string, Expense> = {};
      expensesData.forEach((x) => {
        const exp: Expense = {
          id: x.id,
          cost: x.cost,
          name: x.name,
        };
        expenses[exp.id] = exp;
      });
      setIncomes({ ...incomes });
      setExpenses({ ...expenses });
      return true;
    } catch (error) {
      console.error("error loggin in");
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
    throw new Error("useBudgetContext must be used in BudgetContextProvider");
  }

  return context;
};
