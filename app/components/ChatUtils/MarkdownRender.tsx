import { remark } from 'remark';
import html from 'remark-html';

export const renderMarkdown = async (markdownContent: string): Promise<string> => {
  const processedContent = await remark().use(html).process(markdownContent);
  return processedContent.toString();
};
