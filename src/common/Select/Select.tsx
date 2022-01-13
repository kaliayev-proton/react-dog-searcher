import { HTMLProps } from "react";

export interface OptionProps {
  value: string;
  label: string;
}
export interface SelectProps extends HTMLProps<HTMLSelectElement> {
  options: OptionProps[];
}

export const Select = ({ options, ...rest }: SelectProps) => {
  return (
    <select {...rest}>
      <option value=""></option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
