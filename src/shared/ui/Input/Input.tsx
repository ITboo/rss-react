import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";

import "./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: FC<InputProps> = (props) => {
  const { className, onChange, placeholder, type, value } = props;

  const [inputData, setInputData] = useState<string>("");

  const onChangeInputData = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputData(e.target.value);
  };

  return (
    <input
      className={className}
      onChange={onChange ?? onChangeInputData}
      placeholder={placeholder}
      type={type}
      value={value ?? inputData}
    />
  );
};
