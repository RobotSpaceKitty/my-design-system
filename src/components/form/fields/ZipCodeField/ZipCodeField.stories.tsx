import type { Meta, StoryObj } from "@storybook/react";
import { ZipCodeField } from "./ZipCodeField";

const meta: Meta<typeof ZipCodeField> = {
  title: "DesignSystem/Form/Fields/ZipCodeField",
  component: ZipCodeField,
  args: {
    placeholder: "12345 or 12345-6789",
  },
  argTypes: {
    placeholder: { control: "text" },
    required: { control: "boolean" },
    hint: { control: "text" },
    error: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof ZipCodeField>;
export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const ErrorState: Story = { args: { error: "Invalid ZIP Code" } };
