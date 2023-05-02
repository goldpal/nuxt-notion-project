import { Client } from '@notionhq/client'

const client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });

export default defineEventHandler((event) => {
    try {
        const response = client.pages.retrieve({ page_id: event.context.params.id });
        return response
    } catch (error) {
        return error
    }
});
