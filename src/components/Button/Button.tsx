import React from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  disabled,
  children,
}) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], styles[size])}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
