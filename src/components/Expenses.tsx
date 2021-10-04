import React, { useCallback } from "react";
import { useBudgetContext } from "./provider/BudgetContextProvider";
import { Input } from "./shared/Input";
import Label from "./shared/Label";
import { Row } from "./shared/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import CurrencyInput from "./shared/CurrencyInput";
import { Button } from "./shared/Button";

export const Expenses: React.FC = () => {
  const { expenses, handleAddExpense } = useBudgetContext();

  return (
    <>
      <h3 className="text-white text-2xl font-normal mb-4`">Monthly Expenses</h3>
      <Row>
        <Label className="w-6/12 sm:w-7/12 px-1 text-white">Description</Label>
        <Label className="w-5/12 sm:w-4/12 px-1 mr-auto text-right text-white uppercase text-xs font-bold">
          Cost
        </Label>
      </Row>
      {Object.values(expenses)
        .sort()
        .map((expense) => (
          <Row key={expense.name}>
            <div className="w-7/12 px-2">
              <Input name="name" onChange={(e) => {}} value={expense.name} />
            </div>
            <div className="w-4/12 px-2">
              <CurrencyInput onChange={(values) => {}} value={expense.cost.toString()} />
            </div>
            <div className="w-1/12 px-1">
              {Object.keys(expenses).length > 1 && (
                <button title="Delete expense" onClick={() => {}}>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="text-teal fill-current w-4 h-4 hover:text-teal-light"
                  />
                </button>
              )}
            </div>
          </Row>
        ))}
      <Button
        onClick={handleAddExpense}
        className="rounded py-2 px-4 bg-teal no-underline text-blue border-2 border-transparent hover:bg-teal-light"
      >
        <FontAwesomeIcon icon={faPlus} className="text-teal fill-current w-3 h-3 mr-1" />
        Add expense
      </Button>
    </>
  );
};
