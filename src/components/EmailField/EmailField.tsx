import { TextField, type TextFieldProps } from "../Textfield";

export const EmailField = (props: Omit<TextFieldProps, "label">) => (
  <TextField
    label="Email Address"
    type="email"
    autoComplete="email"
    placeholder="you@example.com"
    {...props}
  />
);
