import { MoreVertical } from "lucide-react";

import { Button } from "@/components/atoms/Button";
import {
	Card as ShadcnCard,
	CardContent,
	CardFooter,
	CardHeader
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CardProps {
	title: string;
	description: string;
	tags?: string[];
	buttonText: string;
	onClick?: () => void;
}

export default function Card({
	title,
	description,
	tags,
	buttonText = "Click here",
	onClick
}: CardProps) {
	return (
		<>
			<ShadcnCard className="w-full h-[214px] max-w-md min-w-[317px]">
				<CardHeader className="flex flex-row items-center justify-between pb-2">
					<h3 className="text-xl font-medium">{title}</h3>
					<button className="hover:bg-gray-100 p-2 rounded-full">
						<MoreVertical className="h-5 w-5 text-gray-500" />
					</button>
				</CardHeader>

				{tags && tags.length > 0 ? (
					<CardContent className="pb-3">
						<p className="text-gray-500 mb-4">{description}</p>
						<div className="flex gap-2">
							{tags.map((tag, index) => (
								<Badge
									key={index}
									variant="secondary"
									className="bg-blue-100 text-blue-700 hover:bg-blue-200">
									{tag}
								</Badge>
							))}
						</div>
					</CardContent>
				) : null}

				<CardFooter>
					<Button
						variant="outline"
						className="w-full border-gray-200"
						onClick={onClick}>
						{buttonText}
					</Button>
				</CardFooter>
			</ShadcnCard>
		</>
	);
}
