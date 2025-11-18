import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import { useState } from "react";

const meta: Meta<typeof Slider> = {
  title: "DesignSystem/Form/Base/Slider",
  component: Slider,
  args: {
    label: "Volume",
    min: 0,
    max: 100,
    step: 1,
    tone: "default",
    fullWidth: true,
  },
  parameters: { controls: { expanded: true } },
  argTypes: {
    label: { control: "text" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    tone: { control: "radio", options: ["default", "success", "error"] },
    fullWidth: { control: "boolean" },
    hint: { control: "text" },
    error: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(50);
    return (
      <Slider
        {...args}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        hint={`Current value: ${value}`}
      />
    );
  },
};
