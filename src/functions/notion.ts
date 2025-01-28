import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import { NotionToMarkdown } from "notion-to-md";

dotenv.config();
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

// NotionページをMarkdownに変換する関数
async function convertNotionToMarkdown(pageId: string): Promise<string> {
  try {
    const mdblocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdblocks);
    return mdString.parent;
  } catch (error) {
    console.error('Notionページの変換中にエラーが発生しました:', error);
    throw error;
  }
}

export { convertNotionToMarkdown };