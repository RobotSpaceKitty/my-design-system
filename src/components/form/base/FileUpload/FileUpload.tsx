import { forwardRef, useId } from "react";
import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

export interface FileUploadProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  hint?: string;
  error?: string;
  requiredMark?: boolean;
  fullWidth?: boolean;
}

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
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
    const inputId = id ?? `fu-${autoId}`;
    const hintId = `${inputId}-hint`;
    const errorId = `${inputId}-error`;

    const hasError = Boolean(error);
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
            <span className="text-red-600" aria-hidden="true"> *</span>
          )}
        </label>

        <input
          id={inputId}
          ref={ref}
          type="file"
          className={clsx(
            "border bg-white text-gray-900 file:mr-4 file:py-2 file:px-4",
            "file:rounded-md file:border file:border-gray-300 file:bg-gray-100",
            "file:text-gray-700 file:cursor-pointer",
            "cursor-pointer outline-none transition",
            "rounded-tl-md rounded-bl-md",
            hasError
              ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
            "disabled:opacity-60 disabled:cursor-not-allowed"
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
          <p id={hintId} className="text-sm text-gray-500">
            {hint}
          </p>
        ) : null}
      </div>
    );
  }
);

FileUpload.displayName = "FileUpload";
