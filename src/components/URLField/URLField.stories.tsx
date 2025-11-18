import type { Meta, StoryObj } from "@storybook/react";
import { URLField } from "./URLField";

const meta: Meta<typeof URLField> = {
  title: "DesignSystem/Forms/URLField",
  component: URLField,
};
export default meta;

type Story = StoryObj<typeof URLField>;

export const Default: Story = {};
export const WithHint: Story = { args: { hint: "Include https://" } };
export const ErrorState: Story = { args: { error: "Invalid URL format" } };
