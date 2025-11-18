import { TextField, type TextFieldProps } from "../base/TextField";

export const DOBField = (props: Omit<TextFieldProps, "label">) => {
  return (
    <TextField
      label="Date of Birth"
      type="text"
      inputMode="numeric"
      autoComplete="bday"
      placeholder="MM/DD/YYYY"
      maxLength={10}
      onKeyDown={(e) => {
        const allowed = /^[0-9/]$/;

        const navigation = [
          "Backspace",
          "Delete",
          "ArrowLeft",
          "ArrowRight",
          "Tab",
        ];

        if (navigation.includes(e.key)) return;

        // Block letters, symbols, emojis
        if (!allowed.test(e.key)) {
          e.preventDefault();
          return;
        }

        const value = e.currentTarget.value;

        // Prevent multiple slashes
        if (e.key === "/" && value.includes("/")) {
          // Allow second slash only after DD position
          const parts = value.split("/");
          if (parts.length >= 2) {
            e.preventDefault();
            return;
          }
        }

        // Prevent slash as first or second character
        if (e.key === "/" && value.length < 2) {
          e.preventDefault();
          return;
        }
      }}
      onChange={(e) => {
        let v = e.target.value.replace(/[^0-9/]/g, "");

        // Remove extra slashes beyond 2
        const parts = v.split("/");
        if (parts.length > 3) {
          v = parts.slice(0, 3).join("/");
        }

        // Auto-insert first slash: MM/
        if (v.length === 2 && !v.includes("/")) {
          v = v + "/";
        }

        // Auto-insert second slash: MM/DD/
        if (v.length === 5 && v.split("/").length === 2) {
          v = v + "/";
        }

        // Enforce MM/DD/YYYY structure
        const [mm, dd, yyyy] = v.split("/");

        // Limit MM to 2 digits
        if (mm && mm.length > 2) v = mm.slice(0, 2) + "/" + (dd || "");

        // Limit DD to 2 digits
        if (dd && dd.length > 2)
          v = mm + "/" + dd.slice(0, 2) + "/" + (yyyy || "");

        // Limit YYYY to 4 digits
        if (yyyy && yyyy.length > 4) v = mm + "/" + dd + "/" + yyyy.slice(0, 4);

        e.target.value = v.slice(0, 10); // enforce length
      }}
      {...props}
    />
  );
};
