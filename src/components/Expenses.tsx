import React from "react";
import { useBudgetContext } from "./provider/BudgetContextProvider";
import Label from "./shared/Label";
import { Row } from "./shared/Row";

export const Expenses: React.FC = () => {
  const { incomes, expenses } = useBudgetContext();

  return (
    <>
      <h3 className="text-white text-2xl font-normal mb-4`">Monthly Expenses</h3>
      <Row>
        <Label className="w-7/12 px-2">Description</Label>
        <Label className="w-4/12 px-2 text-right mr-auto">Cost</Label>
      </Row>
    </>
  );
};
