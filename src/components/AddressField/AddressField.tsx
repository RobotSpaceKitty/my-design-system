import { TextField, type TextFieldProps } from "../Textfield";

export const AddressField = (props: Omit<TextFieldProps, "label">) => (
  <TextField
    label="Address"
    type="text"
    autoComplete="street-address"
    placeholder="123 Main St"
    maxLength={50}
    onChange={(e) => {
      // Allow only letters, digits, spaces, commas, periods, slashes, hyphens, and #
      e.target.value = e.target.value.replace(/[^a-zA-Z0-9\s.,#/-]/g, "");
    }}
    onBlur={(e) => {
      // Auto-capitalize words
      e.target.value = e.target.value
        .toLowerCase()
        .replace(/\b\w/g, (c) => c.toUpperCase());
    }}
    {...props}
  />
);
