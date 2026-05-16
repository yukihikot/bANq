export type ArticleBlock =
  | { type: 'paragraph'; text: string; emphasis?: boolean }
  | { type: 'heading'; text: string; level?: 1 | 2 | 3 }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'divider' }
  | { type: 'note'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

export interface Article {
  id: string;
  title: string;
  date?: string;
  category?: string;
  subtitle?: string;
  excerpt: string;
  image?: string;
  body: ArticleBlock[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
}
