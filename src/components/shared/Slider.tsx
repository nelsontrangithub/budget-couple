import React from 'react';
import { Range } from 'react-range';

interface Props {
  onChange: (values: number[]) => void;
  disabled: boolean;
  value: number;
}

const MAX_INCOME = 500000;

export const Slider: React.FC<Props> = ({
  onChange,
  disabled,
  value,
}) => {
  return (
    <Range
      step={500}
      min={0}
      max={MAX_INCOME}
      values={[value > MAX_INCOME ? MAX_INCOME : value]}
      onChange={onChange}
      disabled={disabled}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
          }}
          className="rounded w-full bg-white h-1"
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
          }}
          className="rounded-full shadow bg-white h-5 w-5"
        />
      )}
    />
  );
};
