import { FC, ReactNode } from "react";

import "./Button.css";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit" | undefined;
}
const Button: FC<ButtonProps> = (props) => {
  const { children, className, onClick, type } = props;
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
