
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { useState } from "react";

const meta: Meta<typeof RadioGroup> = {
  title: "DesignSystem/Form/Base/RadioGroup",
  component: RadioGroup,
  args: {
    label: "Delivery Method",
    options: [
      { value: "standard", label: "Standard", description: "3–5 business days" },
      { value: "express", label: "Express", description: "1–2 business days" },
      { value: "overnight", label: "Overnight", description: "Next day delivery" },
    ],
    fullWidth: true,
  },
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState("standard");
    return (
      <RadioGroup
        {...args}
        value={selected}
        onChange={(v) => setSelected(v)}
        hint={`Selected: ${selected}`}
      />
    );
  },
};

export const WithError: Story = {
  render: (args) => {
    const [selected, setSelected] = useState("");
    return (
      <RadioGroup
        {...args}
        value={selected}
        onChange={(v) => setSelected(v)}
        error={!selected ? "Please choose a delivery method." : ""}
      />
    );
  },
};
