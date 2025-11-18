import { TextField, type TextFieldProps } from "../Textfield";

export const PhoneField = (props: Omit<TextFieldProps, "label">) => (
  <TextField
    label="Phone Number"
    type="tel"
    inputMode="tel"
    autoComplete="tel"
    placeholder="(555) 555-5555"
    {...props}
  />
);
