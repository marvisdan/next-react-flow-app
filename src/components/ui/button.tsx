import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				primary:
					"font-medium px-3 py-2 gap-0 rounded-tl-md  bg-blue-700 text-white bg-blue-600  hover:bg-blue-700 hover:text-white active:bg-blue-600 active:text-white  active:shadow-blue-200	active:shadow-md  active:border-[2px] active:border-solid active:border-blue-300 disabled:bg-blue-300  disabled:text-white  ",
				outline:
					"font-medium px-3 py-2 gap-0 rounded-tl-md border border-gray-300 bg-gray-50 hover:bg-gray-200 hover:text-accent-foreground active:bg-gray-100 active:text-gray-500  active:shadow-blue-200	active:shadow-md active:text-gray-600 active:border-[2px] active:border-solid active:border-blue-300  disabled:bg-white disabled:text-gray-400 dark:bg-gray-800 dark:text-white",

				link: "font-medium px-3 py-2 gap-0 rounded-tl-md text-primary bg-transparent text-blue-700 hover:bg-blue-200 hover:text-blue-600 active:bg-transparent active:text-blue-600 active:shadow-blue-200 active:shadow-md disabled:bg-white disabled:text-gray-400 active:border-[2px] active:border-solid active:border-blue-300",

				// default shadcn ui variant, I let them here as is
				default: "bg-primary text-primary-foreground hover:bg-primary/90 ",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground "
			},
			size: {
				default: "h-14 leading-7 px-4 py-2",
				xs: "h-8",
				sm: "h-9 px-4",
				md: "h-10 px-5", // base size
				lg: "h-12 px-6",
				xl: "h-14 px-6",
				icon: "h-10 w-10",
				"icon-sm": "h-9 w-9",
				"icon-lg": "h-11 w-11"
			}
		},
		defaultVariants: {
			variant: "primary",
			size: "md"
		}
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	isIconOnly?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size = "default",
			asChild = false,
			startIcon,
			endIcon,
			isIconOnly,
			children,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : "button";

		const iconSize =
			size === "sm" ? "icon-sm" : size === "lg" ? "icon-lg" : "icon";
		const finalSize = isIconOnly ? iconSize : size;

		return (
			<Comp
				className={cn(buttonVariants({ variant, size: finalSize, className }))}
				ref={ref}
				{...props}>
				{isIconOnly ? (
					startIcon || children
				) : (
					<>
						{startIcon && <span className="mr-2">{startIcon}</span>}
						{children}
						{endIcon && <span className="ml-2">{endIcon}</span>}
					</>
				)}
			</Comp>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
