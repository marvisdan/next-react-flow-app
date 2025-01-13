"use client";

import { useTheme } from "next-themes";
import {
	addEdge,
	Connection,
	useNodesState,
	useEdgesState,
	Edge,
	Node,
	Background,
	Controls,
	BackgroundVariant,
	Handle,
	Position
} from "@xyflow/react";
import { useCallback } from "react";

import Card from "@/components/molecules/Card";
import FlowContent from "@/components/organisms/FlowContent";

import "@xyflow/react/dist/style.css";

const initialEdges: Edge[] = [];

const initialNodes: Node[] = [
	{
		id: "1",
		data: {
			title: "Just",
			description: "Custom description",
			tags: ["flow", "chart"],
			buttonText: "Text Button"
		},
		position: { x: 0, y: 0 },
		type: "cardNode"
	},
	{
		id: "2",
		data: {
			title: "Do",
			description: "Custom description",
			tags: ["flow", "chart"],
			buttonText: "Text Button"
		},
		position: { x: 200, y: 400 },
		type: "cardNode"
	},
	{
		id: "3",
		data: {
			title: "It !",
			description: "Custom description",
			tags: ["flow", "chart"],
			buttonText: "Text Button"
		},
		position: { x: 400, y: 0 },
		type: "cardNode"
	}
];

const CardNode = ({ data }: Node<CardNodeData>) => {
	const { title, description, tags, buttonText, onButtonClick } = data;
	const style = {
		background: "rgba(217, 217, 217, 1)",
		width: "11px",
		height: "11px"
	};
	return (
		<>
			<Handle type="source" position={Position.Right} style={style} />

			<Card
				title={title}
				description={description}
				tags={tags}
				buttonText={buttonText}
				onClick={onButtonClick}
			/>
			<Handle type="target" position={Position.Left} style={style} />
		</>
	);
};

const nodeTypes: CardNodeTypes = {
	cardNode: CardNode
};

export default function FlowBuilder() {
	const { theme } = useTheme();
	const [nodes, , onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback(
		(params: Connection) => setEdges((eds) => addEdge(params, eds)),
		[setEdges]
	);

	return (
		<FlowContent
			nodes={nodes}
			edges={edges}
			onNodesChange={onNodesChange}
			onEdgesChange={onEdgesChange}
			onConnect={onConnect}
			nodeTypes={nodeTypes}
			theme={theme || "light"}
			fitView>
			<>
				<Background variant={BackgroundVariant.Dots} />
				<Controls />
			</>
		</FlowContent>
	);
}
