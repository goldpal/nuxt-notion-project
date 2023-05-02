import { Client } from "@notionhq/client";

const client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });

export default defineEventHandler((event) => {
	const response = client.blocks.children.list({
		block_id: event.context.params.id,
	});

	return response;
});
