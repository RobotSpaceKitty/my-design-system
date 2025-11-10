import { forwardRef, useId } from "react"; // Removed unused import of React
import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  hint?: string;
  error?: string;
  requiredMark?: boolean;
  fullWidth?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      hint,
      error,
      required,
      requiredMark = true,
      fullWidth = true,
      className,
      ...props
    },
    ref
  ) => {
    const autoId = useId();
    const checkboxId = id ?? `cb-${autoId}`;
    const hintId = `${checkboxId}-hint`;
    const errorId = `${checkboxId}-error`;
    const hasError = Boolean(error);

    const describedBy = [
      hasError ? errorId : null,
      !hasError && hint ? hintId : null,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        className={clsx(
          "flex flex-col gap-1",
          fullWidth && "w-full",
          className
        )}
      >
        <label
          htmlFor={checkboxId}
          className="flex items-center gap-2 text-gray-900 font-medium"
        >
          <input
            id={checkboxId}
            ref={ref}
            type="checkbox"
            className={clsx(
              "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-200",
              hasError && "border-red-500 text-red-600 focus:ring-red-200"
            )}
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy || undefined}
            required={required}
            {...props}
          />
          {label}
          {required && requiredMark && (
            <span className="text-red-600" aria-hidden="true">
              *
            </span>
          )}
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

Checkbox.displayName = "Checkbox";
