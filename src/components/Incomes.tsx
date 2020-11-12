import React from "react";
import { useBudgetContext } from "./provider/BudgetContextProvider";
import CurrencyInput from "./shared/CurrencyInput";
import Label from './shared/Label';
import { Row } from './shared/Row';
import { Slider } from './shared/Slider';

interface Props {}

export const Incomes: React.FC<Props> = ({}) => {
  const { incomes } = useBudgetContext();

  return (
    <>
      <h3 className="text-white text-2xl font-normal mt-8 mb-6">Annual Income</h3>
      {Object.values(incomes)
        .sort()
        .map((income) => (
          <div className="mb-8" key={income.name}>
            <Row>
              <div className="w-6/12 sm:w-7/12 px-1 uppercase text-white">{income.name}</div>
              <Label className="w-5/12 sm:w-4/12 px-1 mr-auto text-right text-white uppercase text-xs font-bold">
                Gross Income
              </Label>
            </Row>
            <Row>
              <div className="w-6/12 sm:w-7/12 px-2">
                <Slider onChange={() => {}} value={income.value} disabled={false} />
              </div>
              <div className="w-5/12 sm:w-4/12 px-2 mr-auto">
                <CurrencyInput
                  onChange={(values) => {
                    console.log(values);
                  }}
                  value={income.value.toString()}
                />
              </div>
            </Row>
          </div>
        ))}
    </>
  );
};
