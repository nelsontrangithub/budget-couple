import React from "react";
import NumberFormat, { NumberFormatValues } from "react-number-format";
import { Input } from "./Input";

interface Props {
  onChange: (values: NumberFormatValues) => void;
  value: string;
}

export const CurrencyInput: React.FC<Props> = ({ onChange, value }) => {
  return (
    <div className="flex items-center">
      <div className="bg-gray-300 p-3 rounded-tl rounded-bl">$</div>
      <NumberFormat
        customInput={Input}
        allowNegative={false}
        thousandSeparator=","
        decimalScale={2}
        className="rounded-l-none rounded-r text-right min-w-0"
        maxLength={20}
        onValueChange={onChange}
        value={value}
        inputMode="decimal"
      />
    </div>
  );
};

export default CurrencyInput;
