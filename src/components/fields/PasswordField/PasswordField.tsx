import { TextField, type TextFieldProps } from "../../base/";

export const PasswordField = (props: Omit<TextFieldProps, "label">) => (
  <TextField
    label="Password"
    type="password"
    autoComplete="current-password"
    placeholder="Enter your password"
    autoCapitalize="none"
    autoCorrect="off"
    spellCheck={false}
    maxLength={12} 
    inputMode="text"
    onChange={(e) => {
      // disallow spaces in passwords
      e.target.value = e.target.value.replace(/\s/g, "");
      props.onChange?.(e);
    }}
    onBlur={(e) => {
      // trim accidental space on paste
      e.target.value = e.target.value.trim();
      props.onBlur?.(e);
    }}
    {...props}
  />
);
