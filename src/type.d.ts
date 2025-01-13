interface CardNodeData {
	title: string;
	description: string;
	tags: string[];
	buttonText: string;
	onButtonClick: () => void;
	[key: string]: unknown;
}

type CardNodeTypes = {
	cardNode: FC<Node<CardNodeData>>;
};
