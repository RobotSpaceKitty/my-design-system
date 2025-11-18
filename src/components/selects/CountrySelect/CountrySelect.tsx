import { Select, type SelectProps } from "../base/Select";

const COUNTRY_OPTIONS = [
  { value: "", label: "Select your country" },
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "MX", label: "Mexico" },
  { value: "GB", label: "United Kingdom" },
  { value: "AU", label: "Australia" },
  { value: "NZ", label: "New Zealand" },
  { value: "FR", label: "France" },
  { value: "DE", label: "Germany" },
  { value: "ES", label: "Spain" },
  { value: "IT", label: "Italy" },
  { value: "JP", label: "Japan" },
  { value: "CN", label: "China" },
  { value: "IN", label: "India" },
  { value: "BR", label: "Brazil" },
];

export const CountrySelect = (props: Omit<SelectProps, "label" | "options">) => {
  return (
    <Select
      label="Country"
      options={COUNTRY_OPTIONS}
      autoComplete="country"
      {...props}
    />
  );
};
