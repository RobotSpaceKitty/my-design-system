import { TextField, type TextFieldProps } from "../Textfield";

export const BillingAddressField = (props: Omit<TextFieldProps, "label">) => (
  <TextField
    label="Billing Address"
    type="text"
    autoComplete="billing street-address"
    placeholder="123 Main St"
    {...props}
  />
);
