import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "DesignSystem/Form/Base/Select",
  component: Select,
  args: {
    label: "Select an option",
    fullWidth: true,
    options: [
      { value: "1", label: "Option One" },
      { value: "2", label: "Option Two" },
      { value: "3", label: "Option Three" },
    ],
  },
  parameters: { controls: { expanded: true } },
  argTypes: {
    label: { control: "text" },
    options: { control: "object" },
    required: { control: "boolean" },
    requiredMark: { control: "boolean" },
    fullWidth: { control: "boolean" },
    hint: { control: "text" },
    error: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};
