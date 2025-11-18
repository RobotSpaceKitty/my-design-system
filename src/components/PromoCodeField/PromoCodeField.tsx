import { TextField, type TextFieldProps } from "../Textfield";

export const PromoCodeField = (props: Omit<TextFieldProps, "label">) => (
  <TextField
    label="Promo Code"
    type="text"
    autoComplete="off"
    placeholder="SAVE20"
    {...props}
  />
);
