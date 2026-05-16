import type { Article } from './types';
import news1Image from '../../assets/news/news1.jpg';
import news2Image from '../../assets/news/news2.jpg';

export const newsArticles: Article[] = [
  {
    id: 'banquest-start',
    title: 'BANQUE(S)T 制作開始のお知らせ',
    date: '2026.04',
    category: 'Project',
    excerpt:
      'bANq の最初の IP プロジェクトとして、musiqman Jr. 氏による音楽作品「BANQUE(S)T」の制作を開始しました。',
    image: news2Image,
    body: [
      {
        type: 'paragraph',
        text: 'bANq の最初の IP プロジェクトとして、musiqman Jr. 氏による音楽作品「BANQUE(S)T」（バンケット）の制作を開始しました。',
      },
      {
        type: 'paragraph',
        text: '本作は、Soul / R&B / AOR の楽曲を再解釈しながら、音楽の文脈と位置づけを再構築する試みです。',
      },
      {
        type: 'paragraph',
        text: '制作は単なる録音にとどまらず、どのように提示され、どのように接続されるかを含めた、IP としての設計を前提としています。',
      },
      {
        type: 'paragraph',
        text: '本プロジェクトは、音楽を“完成品”としてではなく、運用される資産として扱う最初の実践となります。',
        emphasis: true,
      },
    ],
  },
  {
    id: 'banq-start',
    title: 'bANq 始動のお知らせ',
    date: '2026.03',
    category: 'Announcement',
    excerpt:
      'bANq は、音楽・アート・デザインを横断し、知的資産（IP）と文化資産（CP）を運用するプロジェクトとして始動しました。',
    image: news1Image,
    body: [
      {
        type: 'paragraph',
        text: 'bANq は、音楽・アート・デザインを横断し、知的資産（IP）と文化資産（CP）を運用するプロジェクトとして始動しました。',
      },
      {
        type: 'paragraph',
        text: '私たちは、価値を消費するのではなく、守り、育て、次の時代へ手渡すことを目的としています。',
      },
      {
        type: 'paragraph',
        text: '音楽は関係の中で変化し、文化資産は時間の中で成熟していきます。',
      },
      {
        type: 'paragraph',
        text: 'bANq はその両方を扱い、継続的な関与を通じて価値を運用していきます。',
        emphasis: true,
      },
      {
        type: 'note',
        text: '関連記事：Journal「はじめての IPCP」',
      },
    ],
  },
];
