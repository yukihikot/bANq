export type ArticleBlock =
  | { type: 'paragraph'; text: string; emphasis?: boolean }
  | { type: 'heading'; text: string; level?: 1 | 2 | 3 }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'divider' }
  | { type: 'note'; text: string };

export interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  body: ArticleBlock[];
}
