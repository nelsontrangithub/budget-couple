import React from "react";

interface Props {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LabelledInput: React.FC<Props> = ({ id, label, type, placeholder, onChange }) => {
  return (
    <div
      className={`border transition duration-150 ease-in-out focus-within:border-primary border-gray-gray4`}
    >
      <label
        htmlFor={id}
        className={`text-xs text-primary font-light placeholder-gray-gray4 px-2 pt-1.5`}
      >
        {label}
      </label>
      <input
        type={type}
        className={`w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md`}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
