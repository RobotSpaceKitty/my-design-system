import { forwardRef, useId } from "react"; // Removed unused import of React
import type { TextareaHTMLAttributes } from "react";
import clsx from "clsx";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  requiredMark?: boolean;
  fullWidth?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
      label,
      hint,
      error,
      requiredMark = true,
      fullWidth = true,
      className,
      ...props
    },
    ref
  ) => {
    const autoId = useId();
    const textareaId = id ?? `textarea-${autoId}`;
    const hintId = `${textareaId}-hint`;
    const errorId = `${textareaId}-error`;
    const hasError = Boolean(error);

    return (
      <div className={clsx("flex flex-col gap-1", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={textareaId}
            className="font-medium text-gray-900 select-none"
          >
            {label}
            {requiredMark && (
              <span className="text-red-600" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        <textarea
          id={textareaId}
          ref={ref}
          aria-describedby={hasError ? errorId : hint ? hintId : undefined}
          aria-invalid={hasError || undefined}
          className={clsx(
            "rounded-md border px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-shadow",
            hasError
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-blue-200",
            "resize-y min-h-[100px]",
            className
          )}
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

TextArea.displayName = "TextArea";
