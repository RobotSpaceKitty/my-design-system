import { TextField, type TextFieldProps } from "../Textfield";

export const CityField = (props: Omit<TextFieldProps, "label">) => {
  return (
    <TextField
      label="City"
      type="text"
      autoComplete="address-level2"
      placeholder="San Francisco"
      {...props}
    />
  );
};
