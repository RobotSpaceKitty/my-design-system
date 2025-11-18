import { TextField, type TextFieldProps } from "../Textfield";

export const ZipCodeField = (props: Omit<TextFieldProps, "label">) => {
  return (
    <TextField
      label="ZIP Code"
      type="text"
      inputMode="numeric"
      maxLength={10}
      autoComplete="postal-code"
      {...props}
    />
  );
};
