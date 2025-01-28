import express, { Request, Response } from 'express';
import { convertNotionToMarkdown } from './functions/notion';

const app = express();
const port: number = 3000;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/api/notion/:pageId', async (req: Request, res: Response) => {
  const pageId = req.params.pageId;
  const data = await convertNotionToMarkdown(pageId);
  res.json(data);
});

app.listen(port, () => {
  console.log(`アプリケーションが http://localhost:${port} で起動しました`);
}); 