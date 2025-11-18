import type { Meta, StoryObj } from "@storybook/react";
import { PhoneField } from "./PhoneField";

const meta: Meta<typeof PhoneField> = {
  title: "DesignSystem/Form/Fields/PhoneField",
  component: PhoneField,
  args: {
    placeholder: "(555) 555-5555",
  },
  argTypes: {
    placeholder: { control: "text" },
    required: { control: "boolean" },
    hint: { control: "text" },
    error: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof PhoneField>;
export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const ErrorState: Story = { args: { error: "Invalid phone number" } };
