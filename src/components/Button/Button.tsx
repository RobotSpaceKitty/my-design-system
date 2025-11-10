import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  disabled,
  onClick,
  children,
}) => (
  <button
    className={clsx(styles.button, styles[variant], styles[size])}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
