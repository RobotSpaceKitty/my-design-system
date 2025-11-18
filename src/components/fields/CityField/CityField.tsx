import { TextField, type TextFieldProps } from "../../base/";

export const CityField = (props: Omit<TextFieldProps, "label">) => {
  return (
    <TextField
      label="City"
      type="text"
      autoComplete="address-level2"
      placeholder="San Francisco"
      maxLength={50}
      onChange={(e) => {
        // Allow Unicode letters, spaces, hyphens between letters, and apostrophes
        e.target.value = e.target.value
          .replace(/[^(\p{L})\s'-]/gu, "") // remove all invalid chars
          .replace(/-{2,}/g, "-") // collapse double hyphens
          .replace(/^[\-]+/, ""); // remove starting hyphens
      }}
      onBlur={(e) => {
        // Auto-capitalize each word (Unicode safe)
        e.target.value = e.target.value
          .toLowerCase()
          .replace(/\b\p{L}/gu, (c) => c.toUpperCase());
      }}
      {...props}
    />
  );
};
