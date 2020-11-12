import React from "react";
import { OPTIONS } from "../constants/options";
import RadioInput from "./shared/RadioInput";

export const SplitOptions: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-normal mb-4">Divide our expenses</h2>
      <div className="flex -mx-2">
        <ul className="tw-2/3 px-2 list-none mb-8">
          {OPTIONS.map((option) => (
            <li key={option.value} className="mb-3">
              <RadioInput option={option} onChange={() => {}} checked={true} />
            </li>
          ))}
        </ul>
        <div className="w-1/3 px-2">{/* <Chart /> */}</div>
      </div>
    </>
  );
};
