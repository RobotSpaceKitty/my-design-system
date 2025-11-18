import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import { useState } from "react";

const meta: Meta<typeof Slider> = {
  title: "DesignSystem/Forms/Slider",
  component: Slider,
  args: {
    label: "Volume",
    min: 0,
    max: 100,
    step: 1,
    tone: "default",
  },
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(50);
    return (
      <div className="space-y-1">
        <Slider
          {...args}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          hint={`Current value: ${value}`}
        />
      </div>
    );
  },
};

export const Success: Story = {
  render: (args) => {
    const [value, setValue] = useState(75);
    return (
      <Slider
        {...args}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        tone="success"
        hint="Looks good."
      />
    );
  },
};

export const Error: Story = {
  render: (args) => {
    const [value, setValue] = useState(30);
    return (
      <Slider
        {...args}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        tone="error"
        error="Value too low."
      />
    );
  },
};
