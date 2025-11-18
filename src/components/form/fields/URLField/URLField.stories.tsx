import type { Meta, StoryObj } from "@storybook/react";
import { URLField } from "./URLField";

const meta: Meta<typeof URLField> = {
  title: "DesignSystem/Form/Fields/URLField",
  component: URLField,
  args: {
    placeholder: "https://example.com",
  },
  argTypes: {
    placeholder: { control: "text" },
    required: { control: "boolean" },
    hint: { control: "text" },
    error: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof URLField>;
export const Default: Story = {};
export const WithHint: Story = { args: { hint: "Include https://" } };
export const ErrorState: Story = { args: { error: "Invalid URL format" } };
