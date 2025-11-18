import { TextField, type TextFieldProps } from "../Textfield";

export const PasswordField = (props: Omit<TextFieldProps, "label">) => (
  <TextField
    label="Password"
    type="password"
    autoComplete="new-password"
    {...props}
  />
);
