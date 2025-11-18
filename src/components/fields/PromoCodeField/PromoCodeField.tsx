import { TextField, type TextFieldProps } from "../../base/";

export const PromoCodeField = (props: Omit<TextFieldProps, "label">) => (
  <TextField
    label="Promo Code"
    type="text"
    autoComplete="off"
    placeholder="SAVE20"
    maxLength={20} // typical promo code max
    onChange={(e) => {
      let value = e.target.value;

      // Remove disallowed characters (letters, numbers, dash, underscore only)
      value = value.replace(/[^A-Za-z0-9-_]/g, "");

      // Always transform to upper-case
      value = value.toUpperCase();

      e.target.value = value;

      // forward event
      props.onChange?.(e);
    }}
    onBlur={(e) => {
      // clean trailing spaces or accidental paste garbage
      e.target.value = e.target.value.trim().toUpperCase();
      props.onBlur?.(e);
    }}
    {...props}
  />
);
