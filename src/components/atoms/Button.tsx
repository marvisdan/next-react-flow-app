import {
	Button as ShadcnButton,
	ButtonProps,
	buttonVariants
} from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

interface Props extends ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: VariantProps<typeof buttonVariants>["variant"];
	size?: VariantProps<typeof buttonVariants>["size"];
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
}

export function Button({
	children,
	onClick,
	variant = "primary",
	size = "md",
	startIcon,
	endIcon,

	...props
}: Props) {
	return (
		<ShadcnButton
			startIcon={startIcon}
			endIcon={endIcon}
			onClick={onClick}
			variant={variant}
			size={size}
			{...props}>
			{children}
		</ShadcnButton>
	);
}
