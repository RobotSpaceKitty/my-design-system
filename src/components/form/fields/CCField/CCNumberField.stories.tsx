import type { Meta, StoryObj } from "@storybook/react";
import { CCNumberField } from "./CCNumberField";

const meta: Meta<typeof CCNumberField> = {
  title: "DesignSystem/Form/Fields/CCNumberField",
  component: CCNumberField,
  args: {
    placeholder: "1234 5678 9012 3456",
  },
  argTypes: {
    placeholder: { control: "text" },
    required: { control: "boolean" },
    hint: { control: "text" },
    error: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof CCNumberField>;
export const Default: Story = {};
export const ErrorState: Story = { args: { error: "Invalid card number" } };
