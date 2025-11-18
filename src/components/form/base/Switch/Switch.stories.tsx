import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
  title: "DesignSystem/Form/Base/Switch",
  component: Switch,
  args: {
    label: "Enable notifications",
    hint: "Toggle to receive alerts.",
  },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const Error: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        error="This setting cannot be disabled."
      />
    );
  },
};
