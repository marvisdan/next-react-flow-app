interface CardNodeData {
	title: string;
	description: string;
	tags: string[];
	buttonText: string;
	onButtonClick: () => void;
	[key: string]: unknown;
}
// Define the node types mapping
type CardNodeTypes = {
	cardNode: React.FC<Node<CardNodeData>>;
};
