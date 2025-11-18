import { TextField, type TextFieldProps } from "../../base/";

export const CreditCardNumberField = (props: Omit<TextFieldProps, "label">) => {
  return (
    <TextField
      label="Credit Card Number"
      type="text"
      inputMode="numeric"
      autoComplete="cc-number"
      placeholder="1234 5678 9012 3456"
      onKeyDown={(e) => {
        const allowed = /^[0-9 ]$/;
        const navigation = [
          "Backspace",
          "Delete",
          "ArrowLeft",
          "ArrowRight",
          "Tab",
        ];

        const value = e.currentTarget.value.replace(/\s/g, ""); // digits only

        // Allow navigation keys
        if (navigation.includes(e.key)) return;

        // Block anything that's not a digit or space
        if (!allowed.test(e.key)) {
          e.preventDefault();
          return;
        }

        // Prevent typing more than 16 digits
        if (/[0-9]/.test(e.key) && value.length >= 16) {
          e.preventDefault();
        }
      }}
      onChange={(e) => {
        // Strip invalid chars
        let raw = e.target.value.replace(/[^0-9 ]/g, "");

        // Extract digits only (no spaces), enforce max 16
        const digits = raw.replace(/\s/g, "").slice(0, 16);

        // OPTIONAL: group every 4 digits with a space
        const spaced = digits.replace(/(.{4})/g, "$1 ").trim();

        e.target.value = spaced;
      }}
      {...props}
    />
  );
};
