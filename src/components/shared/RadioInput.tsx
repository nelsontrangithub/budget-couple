import React from "react";
import styled from "styled-components/macro";
import { Option } from "../../constants/options";

const StyledRadio = styled.div`
  input[type="radio"]:checked + label > span {
    background-color: green;
    box-shadow: 0px 0px 0px 4px white inset;
  }
`;

interface Props {
  checked: boolean;
  option: Option;
  onChange: () => void;
}

export const RadioInput: React.FC<Props> = ({ checked, option, onChange }) => {
  return (
    <StyledRadio>
      <input
        type="radio"
        value={option.value}
        className="hidden"
        onChange={onChange}
        checked={checked}
        id={`split-${option.value}`}
      />
      <label htmlFor={`split-${option.value}`} className="flex cursor-pointer">
        <span className="w-5 h-5 block mt-px mr-2 rounded-full border border-teal flex-none"></span>
        <div>
          <span className="font-bold">{option.name}</span>
          {checked && <p className="text-sm">{option.description}</p>}
        </div>
      </label>
    </StyledRadio>
  );
};

export default RadioInput;
