import type { Project } from './types';
import nagaiImg from '../../assets/other/nagai-collab.jpg';
import recordShopImg from '../../assets/jackets/record-shop.jpg';
import snowMountainImg from '../../assets/jackets/snow-mountain.jpg';
import landscapeImg from '../../assets/jackets/landscape.jpg';

export const ipProjects: Project[] = [
  {
    id: 'nagai-collab',
    title: '永井博氏とのコラボレーション',
    description:
      '世界的に著名なイラストレーター・永井博氏とアーティスト "musiqman Jr." のコラボレーションアルバムを制作。永井氏の象徴的なビジュアルと音楽を融合させた、新しい文化体験を創造します。',
    image: nagaiImg,
  },
  {
    id: 'banquest',
    title: 'BANQUE(S)T',
    description:
      "70〜80's の R&B、Soul、AOR の名曲を再構築したカバーアルバム。時代を超えた楽曲群を musiqman Jr. が現代的な解釈で再提示し、新たな価値を創出する。永井博氏の描くビジュアルと呼応し、音楽とアートが交差する一枚。",
    image: recordShopImg,
  },
  {
    id: 'winter-tale',
    title: '冬の物語',
    description:
      'musiqman Jr. による、冬の情景を繊細に描くバラード。静けさと温もりが交差する、季節の余韻を丁寧にすくい取った一曲。B面「冬の物語 〜Nu-Classic Pop Edit〜」には、柿崎洋一郎（久保田利伸「LA・LA・LA LOVE SONG」のアレンジで知られる）を迎え、90\'s J-Pop の質感を現代的に昇華したポップバラードとして収録。音楽的文脈の異なる二つのアプローチが、同一楽曲の新たな輪郭を浮かび上がらせる。',
    image: snowMountainImg,
  },
  {
    id: 'four-seasons-memories',
    title: '冬春夏秋 memories',
    description:
      '四季の移ろいをテーマに、時間と記憶を繋ぐミドルチューン。旅路の中で想い続ける「君」の面影を軸に、冬の静謐、春のやわらかな光、夏の儚い夢、秋の切なさが連なり、感情の循環として描かれる。鈴の音や夕暮れ、北斗の星といった象徴的なイメージが、過ぎ去る時間と祈りにも似た想いを浮かび上がらせ、やがてすべては "メモリーズ" として静かに結ばれていく。季節とともに移ろう心の軌跡を、繊細かつ叙情的に紡いだ一曲。',
    image: landscapeImg,
  },
];
