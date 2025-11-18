import { TextField, type TextFieldProps } from "../../base";

export const EmailField = (props: Omit<TextFieldProps, "label">) => (
  <TextField
    label="Email Address"
    type="email"
    autoComplete="email"
    placeholder="you@example.com"
    onChange={(e) => {
      // remove spaces
      e.target.value = e.target.value.replace(/\s/g, "");
    }}
    onBlur={(e) => {
      // trim + normalize casing
      e.target.value = e.target.value.trim().toLowerCase();
    }}
    {...props}
  />
);
