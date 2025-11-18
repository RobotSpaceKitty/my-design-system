import { TextField, type TextFieldProps } from "../../base/TextField";

export const ZipCodeField = (props: Omit<TextFieldProps, "label">) => {
  return (
    <TextField
      label="ZIP Code"
      type="text"
      inputMode="numeric"
      autoComplete="postal-code"
      placeholder="12345 or 12345-6789"
      maxLength={10} // 5 digits + hyphen + 4 digits
      onChange={(e) => {
        let value = e.target.value;

        // remove all non-numeric/hyphen characters
        value = value.replace(/[^0-9-]/g, "");

        // prevent more than one hyphen
        const parts = value.split("-");
        if (parts.length > 2) {
          value = parts[0] + "-" + parts[1]; 
        }

        // auto-insert hyphen after 5 digits (ZIP+4 formatting)
        value = value.replace(/^(\d{5})(\d)/, "$1-$2");

        // limit to ZIP+4 length
        value = value.slice(0, 10);

        e.target.value = value;

        props.onChange?.(e);
      }}
      onBlur={(e) => {
        // trim trailing dash on blur (e.g., "12345-")
        e.target.value = e.target.value.replace(/-$/, "");

        props.onBlur?.(e);
      }}
      {...props}
    />
  );
};
