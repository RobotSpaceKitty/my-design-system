import { TextField, type TextFieldProps } from "../Textfield";

export const DOBField = (props: Omit<TextFieldProps, "label">) => {
  return (
    <TextField
      label="Date of Birth"
      type="date"
      autoComplete="bday"
      placeholder="MM/DD/YYYY"
      {...props}
    />
  );
};
