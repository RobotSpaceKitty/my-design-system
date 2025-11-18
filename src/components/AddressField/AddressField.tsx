import { TextField, type TextFieldProps } from "../Textfield";

export const AddressField = (props: Omit<TextFieldProps, "label">) => (
  <TextField
    label="Address"
    type="text"
    autoComplete="street-address"
    placeholder="123 Main St"
    {...props}
  />
);
