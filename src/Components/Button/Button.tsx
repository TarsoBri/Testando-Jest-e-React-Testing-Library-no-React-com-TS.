import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  disabled: boolean;
  onClick: () => void;
}

const Button = ({ children, disabled, onClick }: Props) => {
  return (
    <button
      onClick={() => onClick != undefined && onClick()}
      style={{ backgroundColor: disabled ? "green" : "red" }}
    >
      {children}
    </button>
  );
};

export default Button;
