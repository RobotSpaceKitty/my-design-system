import { TextField, type TextFieldProps } from "../Textfield";

export const CreditCardNumberField = (props: Omit<TextFieldProps, "label">) => (
  <TextField
    label="Credit Card Number"
    type="text"
    inputMode="numeric"
    maxLength={19}
    autoComplete="cc-number"
    placeholder="1234 5678 9012 3456"
    {...props}
  />
);
