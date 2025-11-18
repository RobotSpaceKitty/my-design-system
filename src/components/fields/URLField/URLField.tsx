import { TextField, type TextFieldProps } from "../../base/";

export const URLField = (props: Omit<TextFieldProps, "label">) => (
  <TextField
    label="Website URL"
    type="url"
    placeholder="https://example.com"
    autoComplete="url"
    inputMode="url"
    onChange={(e) => {
      let value = e.target.value;

      // remove spaces (URLs never contain spaces)
      value = value.replace(/\s+/g, "");

      // lowercase the domain portion
      value = value.replace(/^(https?:\/\/)?([^/]+)/, (match, protocol, domain) => {
        return (protocol ?? "") + domain.toLowerCase();
      });

      e.target.value = value;

      props.onChange?.(e);
    }}
    onBlur={(e) => {
      let value = e.target.value.trim();

      // auto-prepend https:// if missing
      if (value && !/^https?:\/\//i.test(value)) {
        value = "https://" + value;
      }

      // remove trailing "." or "/" (typo from copy/paste)
      value = value.replace(/[./]+$/, "");

      e.target.value = value;
      props.onBlur?.(e);
    }}
    {...props}
  />
);
