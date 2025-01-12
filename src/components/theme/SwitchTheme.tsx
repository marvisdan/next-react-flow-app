"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SwitchTheme() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="outline"
			size="md"
			onClick={() => {
				setTheme(theme === "light" ? "dark" : "light");
			}}>
			<Sun className="h-[1.rem] w-[1.rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.rem] w-[1.rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">{"Toggle theme"}</span>
		</Button>
	);
}
