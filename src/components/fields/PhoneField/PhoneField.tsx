import { TextField, type TextFieldProps } from "../../base/";

export const PhoneField = (props: Omit<TextFieldProps, "label">) => (
  <TextField
    label="Phone Number"
    type="tel"
    inputMode="tel"
    autoComplete="tel"
    placeholder="(555) 555-5555"
    maxLength={14} // formatted length
    onChange={(e) => {
      let value = e.target.value;

      // remove all non-numeric characters
      value = value.replace(/\D/g, "");

      // format as (XXX) XXX-XXXX
      if (value.length > 0) value = "(" + value;
      if (value.length > 4) value = value.slice(0, 4) + ") " + value.slice(4);
      if (value.length > 9) value = value.slice(0, 9) + "-" + value.slice(9);

      // limit to 14 characters (formatted max)
      value = value.slice(0, 14);

      e.target.value = value;

      // forward event
      props.onChange?.(e);
    }}
    onBlur={(e) => {
      // trim accidental whitespace or partial formatting
      e.target.value = e.target.value.trim();
      props.onBlur?.(e);
    }}
    {...props}
  />
);
