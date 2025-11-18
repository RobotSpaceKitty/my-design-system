import { TextField, type TextFieldProps } from "../Textfield";

export const CreditCardExpiryField = (props: Omit<TextFieldProps, "label">) => (
  <TextField
    label="Expiration Date"
    type="text"
    inputMode="numeric"
    autoComplete="cc-exp"
    placeholder="MM/YY"
    maxLength={5}
    {...props}
  />
);
