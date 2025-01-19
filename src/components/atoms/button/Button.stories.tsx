import type { Meta, StoryObj } from "@storybook/react";
import { Home } from "lucide-react";

import Button from "@/components/atoms/button/Button";

const meta = {
	title: "Atoms/Button",
	component: Button,
	parameters: {
		layout: "centered"
	},
	argTypes: {
		onClick: {
			action: "clicked",
			description: "Button click handler"
		},
		variant: {
			control: "select",
			options: [
				"default",
				"destructive",
				"outline",
				"secondary",
				"ghost",
				"link"
			],
			description: "The button variant"
		},
		size: {
			control: "select",
			options: ["default", "xs", "sm", "lg", "xl", "icon"],
			description: "The button size"
		}
	},
	tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: "Button",
		variant: "primary",
		size: "md",
		onClick: () => console.log("Button clicked!")
	}
};

export const Secondary: Story = {
	args: {
		children: "Button",
		variant: "outline",
		size: "md"
	}
};

export const WithIcon: Story = {
	args: {
		children: "Home",
		variant: "link",
		size: "md"
	}
};

export const IconOnly: Story = {
	args: {
		children: <Home />,
		variant: "link",
		size: "md"
	}
};
