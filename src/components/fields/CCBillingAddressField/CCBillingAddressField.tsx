import { TextField, type TextFieldProps } from "../../base/";

export const BillingAddressField = (props: Omit<TextFieldProps, "label">) => (
  <TextField
    label="Billing Address"
    type="text"
    autoComplete="billing address-line1"
    placeholder="123 Main St"
    maxLength={50}
    onChange={(e) => {
      // Allow only characters typically found in real addresses:
      // letters, numbers, spaces, commas, periods, slashes, hyphens, and #
      e.target.value = e.target.value.replace(/[^a-zA-Z0-9\s.,#/-]/g, "");
    }}
    onBlur={(e) => {
      // Auto-capitalize each word
      e.target.value = e.target.value
        .toLowerCase()
        .replace(/\b\w/g, (c) => c.toUpperCase());
    }}
    {...props}
  />
);
