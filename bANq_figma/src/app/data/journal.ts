import type { Article } from './types';

export const journalArticles: Article[] = [
  {
    id: 'first-ipcp',
    title: 'はじめての「IP」「CP」',
    date: '2026.03',
    category: '入門',
    excerpt:
      'bANq はシンプルに言うと IP と CP を扱う会社です。そもそも IP や CP とは何かを、ギターと音楽を例に端的にお伝えします。',
    image: 'https://images.unsplash.com/photo-1696245843980-79b69e076ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0d28lMjBhY291c3RpYyUyMGd1aXRhcnMlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzcxOTQ0MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    body: [
      {
        type: 'paragraph',
        text: 'bANq はシンプルに言うと IP と CP を扱う会社です。',
      },
      {
        type: 'paragraph',
        text: 'この Journal ではそもそも IP や CP とは何かと言うことを端的にお伝えします。以下の記事ではわかりやすくする為に IP は音楽・楽曲、CP はギターを例に話を進めています。',
      },
      {
        type: 'heading',
        level: 2,
        text: '【ギターから理解する、IP と CP の考え方】',
      },
      { type: 'heading', level: 3, text: '1. ギターは「完成したもの」ではありません' },
      {
        type: 'paragraph',
        text: 'アコースティックギターは、作られた瞬間が完成ではありません。',
      },
      {
        type: 'paragraph',
        text: '弾かれ、時間を経て、環境に影響を受けながら、少しずつ音が変わり、育っていきます。',
      },
      { type: 'divider' },
      { type: 'heading', level: 3, text: '2. だから、私たちはギターを「管理」します' },
      {
        type: 'paragraph',
        text: '良い状態を保ち、そのギターが本来持っている可能性を引き出すために、',
      },
      {
        type: 'list',
        items: ['環境を整え', '状態を見ながら', '時間をかけて関わる'],
      },
      {
        type: 'paragraph',
        text: 'という運用を行います。これが、bANq の CP（文化資産）の考え方です。',
      },
      { type: 'divider' },
      { type: 'callout', text: '具体例（CP）' },
      { type: 'paragraph', text: '同じモデルのギターでも、' },
      {
        type: 'list',
        items: ['ほとんど弾かれていない個体', '何千時間も弾き込まれた個体'],
      },
      { type: 'paragraph', text: 'では、音は全く違います。' },
      { type: 'paragraph', text: 'bANq では、例えば：' },
      {
        type: 'list',
        items: ['定期的に演奏する', '保管環境を調整する', '音の変化を記録する'],
      },
      {
        type: 'paragraph',
        text: 'ことで、そのギターがどう育っていくかを管理します。',
      },
      {
        type: 'paragraph',
        emphasis: true,
        text: 'つまり、ギターは「買って終わり」ではなく、関わり続けることで価値が変わる資産です。',
      },
      { type: 'divider' },
      { type: 'heading', level: 3, text: '3. 実は、音楽も同じです' },
      {
        type: 'paragraph',
        text: '音楽もまた、作って終わるものではありません。',
      },
      { type: 'paragraph', text: '同じ楽曲でも、' },
      {
        type: 'list',
        items: ['どこで聴かれるか', '何と組み合わさるか', 'どんな形で届けられるか'],
      },
      { type: 'paragraph', text: 'によって、意味や価値が変わります。' },
      { type: 'divider' },
      { type: 'callout', text: '具体例（IP）' },
      { type: 'paragraph', text: '同じ 1 曲でも：' },
      {
        type: 'list',
        items: [
          '配信で聴かれる場合 → 日常の中で消費される音楽',
          'LP としてリリースされる場合 → 作品として所有される音楽',
          'アート（例：Hiroshi Nagai）と組み合わさる場合 → 視覚と結びついた文化的作品',
          '企業 CM で使われる場合 → ブランドの一部として機能する音楽',
        ],
      },
      {
        type: 'paragraph',
        emphasis: true,
        text: '音楽・楽曲は同じでも、意味は全く変わる',
      },
      { type: 'divider' },
      { type: 'heading', level: 3, text: '4. これが IP（知的財産）の運用です' },
      {
        type: 'paragraph',
        text: '音楽は目に見えませんが、ギターと同じように',
      },
      {
        type: 'list',
        items: ['どこに置くか（配置）', '何と繋ぐか（接続）', 'どう展開していくか（変化）'],
      },
      { type: 'paragraph', text: 'によって価値が変わります。' },
      { type: 'divider' },
      { type: 'heading', level: 3, text: '5. bANq はこの 2 つを同時に扱っています' },
      {
        type: 'list',
        items: [
          'ギター（CP） → 時間の中で育つもの',
          '音楽（IP） → 関係の中で変わるもの',
        ],
      },
      { type: 'divider' },
      { type: 'heading', level: 3, text: '6. そして、両方に共通していること' },
      { type: 'paragraph', text: 'それは、' },
      {
        type: 'paragraph',
        emphasis: true,
        text: '価値は、時間と関わりの中で生まれる',
      },
      { type: 'paragraph', text: 'ということです。' },
      { type: 'divider' },
      { type: 'heading', level: 3, text: '7. bANq の役割' },
      { type: 'paragraph', text: '私たちは、' },
      {
        type: 'list',
        items: ['ギターを守り、育てること', '音楽を適切な場所に置き、繋ぎ、展開すること'],
      },
      { type: 'paragraph', text: 'を通じて、' },
      {
        type: 'paragraph',
        emphasis: true,
        text: '価値を消費するのではなく、次の時代へ手渡すための運用',
      },
      { type: 'paragraph', text: 'を行っています。' },
      { type: 'divider' },
      {
        type: 'callout',
        text: 'ギターを育てることが分かれば、音楽の扱い方も見えてきます。',
      },
    ],
  },
];
