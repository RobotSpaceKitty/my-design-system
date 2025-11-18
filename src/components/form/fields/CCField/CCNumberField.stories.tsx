import type { Meta, StoryObj } from "@storybook/react";
import { CCNumberField } from "./CCNumberField";

const meta: Meta<typeof CCNumberField> = {
  title: "DesignSystem/Form/Fields/CCNumberField",
  component: CCNumberField,
};
export default meta;

type Story = StoryObj<typeof CCNumberField>;

export const Default: Story = {};
export const ErrorState: Story = { args: { error: "Invalid card number" } };
