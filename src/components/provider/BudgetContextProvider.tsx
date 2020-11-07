import React, { createContext, useContext, useState } from "react";
import { Income } from "./types";

interface Props {}

export type BudgetContextProperties = {
  incomes: Record<string, Income>;
};

const BudgetContext = createContext<
  BudgetContextProperties | undefined
>(undefined);

const defaultIncomes = {
  You: { name: "You", value: 35000 },
  Partner: { name: "Partner", value: 65000 },
};

export const BudgetContextProvider: React.FC<Props> = ({
  children,
}) => {
  const [incomes, setIncomes] = useState(defaultIncomes);

  const contextValue: BudgetContextProperties = {
    incomes,
  };
  return (
    <BudgetContext.Provider value={contextValue}>
      {children}
    </BudgetContext.Provider>
  );
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
