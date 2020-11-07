import React, { useEffect } from "react";
import Label from './shared/Label';
import { Row } from './shared/Row';
import { Slider } from './shared/Slider';

interface Props {}

const incomes = [
  { name: "You", value: 35000 },
  { name: "Partner", value: 65000 },
];

export const Incomes: React.FC<Props> = ({}) => {
  return (
    <>
      <h3 className="text-white text-2xl font-normal mt-8 mb-6">
        Annual Income
      </h3>
      {incomes.sort().map((income) => (
        <div className="mb-8" key={income.name}>
          <Row>
            <div className="w-6/12 sm:w-7/12 px-1 uppercase text-white">
              {income.name}
            </div>
            <Label className="w-5/12 sm:w-4/12 px-1 mr-auto text-right">
              Gross income
            </Label>
          </Row>
          <Row>
            <div className="w-6/12 sm:w-7/12 px-2">
              <Slider
                onChange={(values) => {}}
                value={income.value}
                disabled={false}
              />
            </div>
            <div className="w-5/12 sm:w-4/12 px-2 mr-auto">
            </div>
          </Row>
        </div>
      ))}
    </>
  );
};
