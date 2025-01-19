import Link from "next/link";

import { PATH } from "@/lib/constants";
import Button from "@/components/atoms/button/Button";
import { SwitchTheme } from "../theme";

export const Navbar = () => {
	return (
		<div className="flex gap-2 justify-between items-center">
			<h1 className="text-4xl font-bold underline">{"Home."}</h1>
			<div className="flex gap-3">
				<Button variant="primary" size="md">
					<Link href={PATH.dashboard.root}>{"Dashboard"}</Link>
				</Button>
				<Button variant="outline" size="md">
					<Link href={PATH.auth.signup}>{"Sign Up"}</Link>
				</Button>
				<SwitchTheme />
			</div>
		</div>
	);
};
