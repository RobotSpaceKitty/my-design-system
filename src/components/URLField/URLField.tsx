import { TextField, type TextFieldProps } from "../Textfield";

export const URLField = (props: Omit<TextFieldProps, "label">) => (
  <TextField
    label="Website URL"
    type="url"
    placeholder="https://example.com"
    autoComplete="url"
    {...props}
  />
);
