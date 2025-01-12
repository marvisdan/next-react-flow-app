"use client";

import { Home, Menu, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Card from "../molecules/Card";

export default function AssetList() {
	return (
		<div className=" gap-2 w-full h-full flex flex-col items-center justify-center ">
			<div className="flex gap-2 items-center">
				<h4>{"Button List"}</h4>
				<Button variant="primary" size="md" type="submit">
					{"Default"}
				</Button>
				<Button variant="outline" size="md" type="submit">
					{"Outline"}
				</Button>
				<Button disabled size="md" type="submit">
					{"Disabled"}
				</Button>
				<Button variant="link" size="md" type="submit">
					{"Link"}
				</Button>
			</div>

			<div className="flex gap-2 items-center">
				<h4>{"Filled"} </h4>

				<Button variant="primary" size="xs">
					{"Button Text"}
				</Button>
				<Button variant="primary" size="sm">
					{"Button Text"}
				</Button>
				<Button variant="primary" size="md">
					{"Button Text"}
				</Button>
				<Button variant="primary" size="lg">
					{"Button Text"}
				</Button>
				<Button variant="primary" size="xl">
					{"Button Text"}
				</Button>
			</div>

			<div className="flex gap-2 items-center">
				<h4>{"Outlined"}</h4>
				<Button variant="outline" size="xs">
					{"Button Text"}
				</Button>
				<Button variant="outline" size="sm">
					{"Button Text"}
				</Button>
				<Button variant="outline" size="md">
					{"Button Text"}
				</Button>
				<Button variant="outline" size="lg">
					{"Button Text"}
				</Button>
				<Button variant="outline" size="xl">
					{"Button Text"}
				</Button>
			</div>

			<div className="flex gap-2 items-center">
				<h4>{"Link"}</h4>
				<Button variant="link" size="xs">
					{"Button Text"}
				</Button>
				<Button variant="link" size="sm">
					{"Button Text"}
				</Button>
				<Button variant="link" size="md">
					{"Button Text"}
				</Button>
				<Button variant="link" size="lg">
					{"Button Text"}
				</Button>
				<Button variant="link" size="xl">
					{"Button Text"}
				</Button>
			</div>

			<div className="flex gap-2 items-center">
				<h3>{"Icon"} </h3>
				<Button isIconOnly size="sm">
					<Search />
				</Button>
				<Button isIconOnly size="md">
					<Plus />
				</Button>
				<Button isIconOnly size="lg">
					<Menu />
				</Button>
				<Button isIconOnly variant="outline" size="xl">
					<Plus />
				</Button>
				<Button variant="link" size="md" startIcon={<Home />}>
					Home
				</Button>
			</div>

			<div className="flex gap-2 items-start">
				<h4>{"Card"}</h4>
				<Card
					title="Card title"
					description="This is a description "
					tags={["flow", "chart"]}
					buttonText="Button text"
				/>
			</div>
		</div>
	);
}
