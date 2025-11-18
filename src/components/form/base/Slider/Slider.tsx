import { forwardRef, useId } from "react"; // Removed unused import of React
import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

export interface SliderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  hint?: string;
  error?: string;
  tone?: "default" | "error" | "success";
  min?: number;
  max?: number;
  step?: number;
  fullWidth?: boolean;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      id,
      label,
      hint,
      error,
      tone = "default",
      min = 0,
      max = 100,
      step = 1,
      fullWidth = true,
      className,
      ...props
    },
    ref
  ) => {
    const autoId = useId();
    const sliderId = id ?? `slider-${autoId}`;
    const hasError = Boolean(error);

    return (
      <div className={clsx("flex flex-col gap-1", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={sliderId}
            className="font-medium text-gray-900 select-none"
          >
            {label}
          </label>
        )}

        <input
          id={sliderId}
          ref={ref}
          type="range"
          min={min}
          max={max}
          step={step}
          aria-invalid={hasError || undefined}
          className={clsx(
            "w-full appearance-none h-2 rounded-full cursor-pointer transition-colors",
            tone === "error"
              ? "bg-red-200 accent-red-600"
              : tone === "success"
              ? "bg-green-200 accent-green-600"
              : "bg-gray-200 accent-blue-600",
            className
          )}
          {...props}
        />

        {error ? (
          <p className="text-sm text-red-600">{error}</p>
        ) : hint ? (
          <p
            className={clsx(
              "text-sm",
              tone === "success"
                ? "text-green-600"
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

Slider.displayName = "Slider";
