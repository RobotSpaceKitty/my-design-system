import type { Meta, StoryObj } from "@storybook/react";
import { AddressField } from "./AddressField";

const meta: Meta<typeof AddressField> = {
  title: "DesignSystem/Forms/AddressField",
  component: AddressField,
};
export default meta;

type Story = StoryObj<typeof AddressField>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
