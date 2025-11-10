import { forwardRef, useId } from "react"; // Removed unused import of React
import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  hint?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ id, label, hint, error, checked, onChange, fullWidth = true, className, ...props }, ref) => {
    const autoId = useId();
    const switchId = id ?? `switch-${autoId}`;
    const hintId = `${switchId}-hint`;
    const errorId = `${switchId}-error`;
    const hasError = Boolean(error);

    return (
      <div className={clsx("flex flex-col gap-1", fullWidth && "w-full", className)}>
        <label htmlFor={switchId} className="flex items-center gap-3 cursor-pointer select-none">
          <div className="relative">
            <input
              id={switchId}
              ref={ref}
              type="checkbox"
              role="switch"
              aria-checked={checked}
              aria-invalid={hasError || undefined}
              aria-describedby={hasError ? errorId : hint ? hintId : undefined}
              checked={checked}
              onChange={onChange}
              className="sr-only"
              {...props}
            />
            <div
              className={clsx(
                "w-10 h-6 rounded-full transition-colors",
                checked ? "bg-blue-600" : "bg-gray-300",
                hasError && "bg-red-500"
              )}
            ></div>
            <div
              className={clsx(
                "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform",
                checked ? "translate-x-4" : "translate-x-0"
              )}
            ></div>
          </div>
          {label && <span className="text-gray-900 font-medium">{label}</span>}
        </label>

        {hasError ? (
          <p id={errorId} className="text-sm text-red-600">
            {error}
          </p>
        ) : hint ? (
          <p id={hintId} className="text-sm text-gray-500">
            {hint}
          </p>
        ) : null}
      </div>
    );
  }
);

Switch.displayName = "Switch";
