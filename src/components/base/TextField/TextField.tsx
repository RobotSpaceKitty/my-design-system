import { forwardRef, useId } from "react"; // Removed unused import of React
import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

export type TextFieldSize = "sm" | "md" | "lg";
export type TextFieldTone = "default" | "error" | "success";

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: string;
  size?: TextFieldSize;
  tone?: "default" | "error" | "success";
  hint?: string; // helper/assistive text
  error?: string; // validation message; sets tone="error"
  requiredMark?: boolean; // show "*" after label when required
  fullWidth?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id,
      label,
      size = "md",
      tone = "default",
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
    const inputId = id ?? `tf-${autoId}`;
    const hintId = `${inputId}-hint`;
    const errorId = `${inputId}-error`;

    const hasError = Boolean(error);
    const finalTone: TextFieldTone = hasError ? "error" : tone;

    const sizeStyles: Record<TextFieldSize, string> = {
      sm: "text-sm px-2 py-1 rounded",
      md: "text-base px-3 py-2 rounded-md",
      lg: "text-lg px-4 py-3 rounded-lg",
    };

    const toneStyles: Record<TextFieldTone, string> = {
      default:
        "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
      error:
        "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200",
      success:
        "border-green-500 focus:border-green-600 focus:ring-2 focus:ring-green-200",
    };

    const width = fullWidth ? "w-full" : "w-auto";

    const describedBy = [
      hasError ? errorId : null,
      !hasError && hint ? hintId : null,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={clsx("flex flex-col gap-1", width, className)}>
        <label htmlFor={inputId} className="font-medium text-gray-900">
          {label}
          {required && requiredMark && (
            <span className="text-red-600" aria-hidden="true">
              {" "}
              {/* space before asterisk */}*
            </span>
          )}
        </label>

        <input
          id={inputId}
          ref={ref}
          className={clsx(
            "border bg-white text-gray-900 placeholder:text-gray-400 outline-none transition",
            "disabled:opacity-60 disabled:cursor-not-allowed",
            sizeStyles[size],
            toneStyles[finalTone]
          )}
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy || undefined}
          required={required}
          {...props}
        />

        {hasError ? (
          <p id={errorId} className="text-sm text-red-600">
            {error}
          </p>
        ) : hint ? (
          <p
            id={hintId}
            className={clsx(
              "text-sm",
              tone === "success"
                ? "text-green-600"
                : tone === "error"
                ? "text-red-600"
                : "text-gray-500"
            )}
          >
            {hint}
          </p>
        ) : null}
      </div>
    );
  }
);

TextField.displayName = "TextField";
