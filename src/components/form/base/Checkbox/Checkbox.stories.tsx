import type {Meta, StoryObj} from "@storybook/react";
import {Checkbox} from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
    title: "DesignSystem/Form/Base/Checkbox",
    component: Checkbox,
    args: {
        label: "I agree to the terms",
    },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const WithHint: Story = {
    args: {
        hint: "You must accept before continuing."
    },
};

export const Required: Story = {
    args: {
        required: true,
    },
};

export const Error: Story = {
    args: {
        required: true,
        error: "You must agree before submitting.",
    },
};