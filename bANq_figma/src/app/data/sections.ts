import type { Article } from './types';

export const ipDetailArticle: Article = {
  id: 'ip-detail',
  title: 'IP & Creative Project',
  subtitle: '音楽、アート・デザインの交差点における創造',
  excerpt: '',
  body: [
    { type: 'heading', level: 2, text: '【What we do】' },
    { type: 'paragraph', text: '音楽 IP を基盤とし、以下の領域と接続・運用します。' },
    { type: 'heading', level: 3, text: '・Music IP' },
    {
      type: 'paragraph',
      text: '作品そのものの設計と運用。リリース、文脈（作品の位置づけ・意味づけ）、流通（フィジカル・デジタル等）を含め、IP としての持続性を設計する。',
    },
    { type: 'heading', level: 3, text: '・Art / Design IP' },
    {
      type: 'paragraph',
      text: 'アートやデザインとの接続により、音楽 IP の解釈と体験を拡張する。',
    },
    { type: 'heading', level: 3, text: '・Corporate / Commercial' },
    {
      type: 'paragraph',
      text: '企業やブランド、メディアとの関係の中で、IP を社会的文脈に配置する。',
    },
    { type: 'heading', level: 3, text: '・Cultural Property（CP）' },
    {
      type: 'paragraph',
      text: '楽器や文化資産と接続により、音楽 IP を物理的・時間的な文脈の中で再定義する。',
    },
    { type: 'heading', level: 3, text: '・Format / Distribution' },
    {
      type: 'paragraph',
      text: 'フィジカルおよびデジタル双方において、適切なフォーマットと流通設計を行う。',
    },
    { type: 'divider' },
    { type: 'heading', level: 2, text: 'IP と CP の対比' },
    {
      type: 'table',
      headers: ['領域', 'IP 側', 'CP 側'],
      rows: [
        ['対象', '知的資産', '文化資産'],
        ['方法', '接続・運用', '保護・育成'],
        ['時間軸', '文脈・関係性', '物理・経年'],
        ['本質', '関係で定義', '時間で変化'],
      ],
    },
  ],
};

export const cpDetailArticle: Article = {
  id: 'cp-detail',
  title: 'CP & Asset Stewardship',
  subtitle: 'Stewardship = Protecting × Growing（守る × 育てる）',
  excerpt: '',
  body: [
    { type: 'heading', level: 2, text: 'Guitar Stewardship' },
    {
      type: 'table',
      headers: ['', 'Asset Care', 'Growth Program'],
      rows: [
        ['Approach', 'Protect & Sustain', 'Observe & Develop'],
        ['Focus', 'Present Stability', 'Future Potential'],
      ],
    },
    { type: 'divider' },
    { type: 'heading', level: 2, text: 'Guitar Asset Care／保護・運用' },
    { type: 'paragraph', emphasis: true, text: 'Focus：Present Stability' },
    {
      type: 'paragraph',
      text: '「ギターの状態と価値を守り、長期的な視点で安定したコンディションを維持する。つまり、ギターを所有するのではなく、時間と価値を引き受ける。」',
    },
    {
      type: 'paragraph',
      text: 'Guitar Asset Care は、アコースティックギターを文化資産（CP）として管理・運用するための取り組みです。',
    },
    {
      type: 'paragraph',
      text: '私たちはギターを単なる楽器や商品としてではなく、時間や演奏、環境との関わりによって価値が変化していく存在だと考えています。保管環境、使用状況、コンディションの維持だけでなく、将来の成長や変化を見据えながら、ギターが本来持つ可能性を損なわない形で中・長期的な視点から関与していきます。',
    },
    {
      type: 'paragraph',
      text: 'Guitar Asset Care は、「預かる」ことを目的とするサービスではなく、価値を守り、継続させるための Stewardship です。',
    },
    { type: 'callout', text: 'Our Approach' },
    {
      type: 'list',
      items: [
        'Protection（保護）：ギターを単なる物としてではなく、時間を含んだ文化資産として守ります。',
        'Condition Management（環境・使用状況の最適化）：保管環境や演奏状況を整え、ギター本来の状態が維持されるように管理します。',
        'Long-term Sustainability（長期的な価値の維持）：短期的な音や市場価値でなく、時間の中で継続して価値を持ち続ける状態を目指します。',
        'Asset Stewardship Design（文化資産としての運用設計）：所有ではなく関与という視点から、将来へ価値を引き継ぐための運用を設計します。',
      ],
    },
    {
      type: 'paragraph',
      text: '気温・湿度の一定の環境で保管し、未来のコンディションをより安定的に保っていくための音響調整も致します。ただ置いておくだけではなく、提携ギタールシアーや輸入代理店の bANq チームによってギターに必要なテンションをかけて、適度に振動させることなどでギターの安定性を高めます。また、日本を代表するギタリストのレコーディングへの貸出なども行います。',
    },
    { type: 'divider' },
    { type: 'heading', level: 2, text: 'Guitar Growth Program／育成・観測' },
    { type: 'paragraph', emphasis: true, text: 'Focus：Future Potential' },
    {
      type: 'paragraph',
      text: '「ギターの変化を数値化し、成長していく過程そのものを理解・記録する。完成した音ではなく、育っていく過程を観測する。」',
    },
    {
      type: 'paragraph',
      text: 'Guitar Growth Program は、アコースティックギターの成長過程を観測・記録・理解するためのプログラムです。',
    },
    {
      type: 'paragraph',
      text: 'ギターは製造された瞬間に完成するのではなく、演奏時間、環境、構造の変化によって長い時間をかけて成熟していきます。Growth Program では、演奏履歴や環境要素、FFT を含む音響的な観測を通じて、ギターの現在地からどのように変化していくのかを記録し、その過程そのものを価値として捉えます。',
    },
    {
      type: 'paragraph',
      text: 'このプログラムは、「今の音」を評価するためではなく、成長を理解するための観測です。',
    },
    { type: 'callout', text: 'Our Approach' },
    {
      type: 'list',
      items: [
        'Maturity Index（成熟度観測）：ギターがどの段階にあるのかを、時間と変化の視点から観測します。',
        'FFT Analysis（音響変化の記録）：音響特性の変化を定点的に記録し、成長の傾向を客観的に捉えます。',
        'Development Tracking（演奏・時間による成長分析）：演奏時間や使用環境と音の変化を照らし合わせ、成長プロセスを追跡します。',
        'Visualization of Growth（成長プロセスの可視化）：数値と感覚の両面から、ギターが育っていく過程を理解できる形にします。',
      ],
    },
    {
      type: 'paragraph',
      text: 'コンディションを保つために、アーティストやスタジオミュージシャン、bANq チームによる積極的な音響調整・エイジングを行います。日本を代表するギタリストによるエイジングも行います。またギター音響評価アプリも開発中です。',
    },
  ],
};
