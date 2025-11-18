import { TextField, type TextFieldProps } from "../../base";

export const CCExpiryField = (props: Omit<TextFieldProps, "label">) => {
  return (
    <TextField
      label="Expiration Date"
      type="text"
      inputMode="numeric"
      autoComplete="cc-exp"
      placeholder="MM/YY"
      maxLength={5}
      onKeyDown={(e) => {
        const allowed = /^[0-9/]$/;
        const navigation = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
        const value = e.currentTarget.value;

        if (navigation.includes(e.key)) return;

        // Only allow numbers and slash
        if (!allowed.test(e.key)) {
          e.preventDefault();
          return;
        }

        // Prevent multiple slashes
        if (e.key === "/" && value.includes("/")) {
          e.preventDefault();
          return;
        }

        // Prevent slash as first character
        if (e.key === "/" && value.length < 2) {
          e.preventDefault();
          return;
        }
      }}
      onChange={(e) => {
        // Remove anything invalid from paste
        let clean = e.target.value.replace(/[^0-9/]/g, "");

        // Only one slash allowed
        const parts = clean.split("/");
        clean = parts[0].slice(0, 2) + (parts[1] ? "/" + parts[1].slice(0, 2) : "");

        e.target.value = clean;
      }}
      {...props}
    />
  );
};
