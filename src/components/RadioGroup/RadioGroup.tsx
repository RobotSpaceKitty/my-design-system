import { forwardRef, useId } from "react"; // Removed unused import of React
import clsx from "clsx";

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

export interface RadioGroupProps {
  label: string;
  name?: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  hint?: string;
  error?: string;
  requiredMark?: boolean;
  fullWidth?: boolean;
}

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  (
    {
      label,
      name,
      options,
      value,
      onChange,
      hint,
      error,
      requiredMark = true,
      fullWidth = true,
      ...props
    },
    ref
  ) => {
    const autoId = useId();
    const groupName = name ?? `radio-${autoId}`;
    const hintId = `${groupName}-hint`;
    const errorId = `${groupName}-error`;
    const hasError = Boolean(error);

    return (
      <fieldset
        ref={ref}
        aria-describedby={hasError ? errorId : hint ? hintId : undefined}
        className={clsx("flex flex-col gap-2", fullWidth && "w-full")}
        {...props}
      >
        <legend className="font-medium text-gray-900">
          {label}
          {requiredMark && (
            <span className="text-red-600" aria-hidden="true">
              {" "}
              *
            </span>
          )}
        </legend>

        <div className="flex flex-col gap-2 mt-1">
          {options.map((opt) => (
            <label
              key={opt.value}
              className={clsx(
                "flex items-start gap-2 cursor-pointer select-none",
                "text-gray-900"
              )}
            >
              <input
                type="radio"
                name={groupName}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange?.(opt.value)}
                className={clsx(
                  "mt-1 h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-200",
                  hasError && "border-red-500 text-red-600 focus:ring-red-200"
                )}
              />
              <div className="flex flex-col leading-tight">
                <span className="font-medium">{opt.label}</span>
                {opt.description && (
                  <span className="text-sm text-gray-500">
                    {opt.description}
                  </span>
                )}
              </div>
            </label>
          ))}
        </div>

        {hasError ? (
          <p id={errorId} className="text-sm text-red-600">
            {error}
          </p>
        ) : hint ? (
          <p id={hintId} className="text-sm text-gray-500">
            {hint}
          </p>
        ) : null}
      </fieldset>
    );
  }
);

RadioGroup.displayName = "RadioGroup";
