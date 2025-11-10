import { forwardRef, useId } from "react"; // Removed unused import of React
import type { SelectHTMLAttributes } from "react";
import clsx from "clsx";

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label: string;
  options: Option[];
  hint?: string;
  error?: string;
  requiredMark?: boolean;
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      label,
      options,
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
    const selectId = id ?? `select-${autoId}`;
    const hintId = `${selectId}-hint`;
    const errorId = `${selectId}-error`;
    const hasError = Boolean(error);

    const describedBy = [
      hasError ? errorId : null,
      !hasError && hint ? hintId : null,
    ]
      .filter(Boolean)
      .join(" ");

    const baseStyles =
      "border bg-white text-gray-900 placeholder:text-gray-400 outline-none transition disabled:opacity-60 disabled:cursor-not-allowed";
    const tone = hasError
      ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200"
      : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200";

    return (
      <div className={clsx("flex flex-col gap-1", fullWidth && "w-full")}>
        <label htmlFor={selectId} className="font-medium text-gray-900">
          {label}
          {required && requiredMark && (
            <span className="text-red-600" aria-hidden="true">
              {" "}
              *
            </span>
          )}
        </label>

        <select
          id={selectId}
          ref={ref}
          className={clsx(baseStyles, tone, "rounded-md px-3 py-2", className)}
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy || undefined}
          required={required}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

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

Select.displayName = "Select";