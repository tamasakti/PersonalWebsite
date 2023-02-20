import React, { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  label?: string;
  icon?: JSX.Element;
  loading?: boolean;
  onClick?: any;
}

const Button: FC<ButtonProps> = ({
  id,
  label,
  icon,
  loading,
  onClick,
  ...props
}) => {
  return (
    <button
      id={id}
      className={`${loading && "bg-gray-700 cursor-not-allowed"}`}
      disabled={loading}
      onClick={onClick}
      {...props}
    >
      {icon} {label}
    </button>
  );
};

const Input = () => {
  return <></>;
};

export { Button, Input };
