"use client";

import { Home, Menu, Minus, Plus, Search } from "lucide-react";
import { JSX } from "react";

import { Button } from "@/components/ui/button";
import Card from "@/components/molecules/Card";

type FlexDivProps = {
	children: JSX.Element | JSX.Element[];
} & React.HTMLAttributes<HTMLDivElement>;

const FlexDiv = ({ children, ...props }: FlexDivProps) => {
	return (
		<div className="flex gap-2 items-center" {...props}>
			{children}
		</div>
	);
};

export default function AssetList() {
	return (
		<div className=" gap-2 w-1/2 h-full flex flex-col items-center justify-center ">
			<FlexDiv>
				<h4 className="dark:text-black">{"Button List"}</h4>
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
			</FlexDiv>

			<FlexDiv>
				<h4 className="dark:text-black">{"Filled"} </h4>

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
			</FlexDiv>

			<FlexDiv>
				<h4 className="dark:text-black">{"Outlined"}</h4>
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
			</FlexDiv>

			<FlexDiv>
				<h4 className="dark:text-black">{"Link"}</h4>
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
			</FlexDiv>

			<FlexDiv>
				<h4 className="dark:text-black">{"Icon"} </h4>
				<Button isIconOnly size="xs">
					<Minus />
				</Button>
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
					{"Home"}
				</Button>
			</FlexDiv>

			<FlexDiv>
				<h4>{"Card"}</h4>
				<Card
					title="Card title"
					description="This is a description "
					tags={["flow", "chart"]}
					buttonText="Button text"
				/>
			</FlexDiv>
		</div>
	);
}
