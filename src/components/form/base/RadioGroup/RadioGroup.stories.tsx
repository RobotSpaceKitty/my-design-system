import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { useState } from "react";

const meta: Meta<typeof RadioGroup> = {
  title: "DesignSystem/Form/Base/RadioGroup",
  component: RadioGroup,
  args: {
    label: "Delivery Method",
    fullWidth: true,
    options: [
      { value: "standard", label: "Standard", description: "3–5 business days" },
      { value: "express", label: "Express", description: "1–2 business days" },
      { value: "overnight", label: "Overnight", description: "Next day" },
    ],
  },
  parameters: { controls: { expanded: true } },
  argTypes: {
    label: { control: "text" },
    options: { control: "object" },
    requiredMark: { control: "boolean" },
    fullWidth: { control: "boolean" },
    hint: { control: "text" },
    error: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("standard");
    return <RadioGroup {...args} value={value} onChange={setValue} />;
  },
};
