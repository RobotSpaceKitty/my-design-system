import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";
import { useState } from "react";

const meta: Meta<typeof Textarea> = {
  title: "DesignSystem/Forms/Textarea",
  component: Textarea,
  args: {
    label: "Message",
    placeholder: "Type your message here...",
    hint: "You can resize this field vertically.",
    rows: 4,
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <Textarea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <Textarea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={!value ? "Message cannot be empty." : ""}
      />
    );
  },
};
