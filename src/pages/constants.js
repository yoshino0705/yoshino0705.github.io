export const LANGUAGES = {
  'zh-TW': '中文',
  'en-US': 'English'
}

// Home Page Content
const HOME_ZH_TW = {
  koumi: '酷米家族',
  welcome: '歡迎來到',
  website: '的網站',
  introduction: '我們一開始只是是一個聊天群，不過從2018年釋出第一部Minecraft的多人地圖後，受到相當多的玩家支持，就漸漸成為了Minecraft的地圖製作團隊。',
  werewolf: '人狼殺',
  werewolf_note: '其實就是狼人殺，可是當時我們比較習慣叫他人狼'
}

const HOME_EN_US = {
  koumi: 'The Koumi Family\'s',
  welcome: 'Welcome to',
  website: 'Website',
  introduction: 'We started off as random people chatting on the internet, after we released our first map creation in 2018 and it gained a lot of popularity, we gradually became a Minecraft map making team.',
  werewolf: 'The Werewolf Game',
  werewolf_note: 'Similar to Mafia/Town of Salem, but with different roles, abilities, and playstyle deviations'
}

export const HOME_PAGE_CONTENT = {
  'zh-TW': HOME_ZH_TW,
  'en-US': HOME_EN_US
}

// About Page Content

const ABOUT_ZH_TW = {
  yoshinobhl: {
    name: '藍髮蘿莉四糸乃',
    description: 'Minecraft 指令師、兼地圖規劃、兼本網站架設+設計者、兼翻譯'
  },
  eve: {
    name: '伊然 (Eve)',
    description: 'Minecraft 地圖規劃、大多點子的來源，我們尊稱為大姐'
  },
  slgame: {
    name: 'SL',
    description: '自稱是個微不足道的角色'
  },
  koumi: {
    name: '酷米',
    description: '酷米家族大團長，團隊名的由來，最愛炸蝦，是本家族的精神象徵'
  },
  lightDe: {
    name: '小滴',
    description: 'Minecraft 建築師，我們的地圖創作內所有精美的建築和布景都是小滴蓋的'
  },
  allen: {
    name: '熊貓',
    description: 'Minecraft 伺服器架設擔當者'
  },
  alex: {
    name: '蘑菇',
    description: '酷米家族中的深夜車長，歷代作品中的「母湯」的原型，負責小部分的建築'
  },
  yoru: {
    name: '夜',
    description: '過著美國時間的貓頭鷹'
  }
}

const ABOUT_EN_US = {
  yoshinobhl: {
    name: 'YoshinoBHL',
    description: 'Minecraft command expert, map creation planning, the owner of this website, and the translator.'
  },
  eve: {
    name: 'Eve',
    description: 'Minecraft map planning and the source of map ideas, we profoundly call her as our "Big Sis" in the Family.'
  },
  slgame: {
    name: 'SL',
    description: 'Calls himself somebody not worth mentioning.'
  },
  koumi: {
    name: 'Koumi',
    description: 'The spiritual leader of the group, the origin of the Family name, loves Japanese fried shrimp, and is the symbol of The Koumi Family.'
  },
  lightDe: {
    name: 'Light De',
    description: 'Minecraft building expert, all of the great landscapes and beautiful structures in our map creations are all done by Light De.'
  },
  allen: {
    name: 'Allen',
    description: 'Minecraft server operator.'
  },
  alex: {
    name: 'Kinoko Neko (Alex)',
    description: 'The skilled “driver” of the Koumi Family, was represented as the mushroom stew in previous maps. Built some interiors and buildings.'
  },
  yoru: {
    name: 'Yoru',
    description: 'Always stays up late like an owl (which ties with the nick name very well because the word Yoru means night time in Japanese)'
  }
}

export const ABOUT_PAGE_CONTENT = {
  'zh-TW': ABOUT_ZH_TW,
  'en-US': ABOUT_EN_US
}

// Scene/Landscape names

const SCENE_ZH_TW = {
  werewolf_dlx: {
    preview: '地圖預覽',
    snow: '雪町',
    art: '美術館',
    crystal: '水晶風暴',
    comm: '河堤社區',
    town: '經典城鎮',
    sea: '海底都市',
  },
  friedshrimp: {
    preview: '地圖預覽',
    venezia: '威尼斯小鎮',
    shrine: '花村',
    hotel: '酷米溫泉旅館'
  },
  werewolf_og: {
    preview: '地圖預覽',
    town: '經典城鎮',
    mushroom: '母湯沼澤',
    sea: '亞特蘭提斯',
    vacation: '渡假村',
    space: '銀河邊境',
    lobby: '遊戲大廳'
  },
  planetary_thieves: {
    preview: '地圖預覽',
    space: '宇宙開拓世界',
    zeta: '澤塔星ζ'
  }
}

const SCENE_EN_US = {
  werewolf_dlx: {
    preview: 'Landscapes Preview',
    snow: 'Snowdin',
    art: 'Art Museum',
    crystal: 'Crystalic Storm',
    comm: 'River Bank Community',
    town: 'Classic Town',
    sea: 'Underwater City',
  },
  friedshrimp: {
    preview: 'Landscapes Preview',
    venezia: 'Venezia',
    shrine: 'Cherry Blossom Village',
    hotel: 'Koumi\'s Hot Spring Hotel'
  },
  werewolf_og: {
    preview: 'Landscapes Preview',
    town: 'Classic Town',
    mushroom: 'Mushroom Swamp',
    sea: 'Atlantis',
    vacation: 'Resort',
    space: 'Galaxy Boundary',
    lobby: 'Lobby'
  },
  planetary_thieves: {
    preview: 'Landscapes Preview',
    space: 'Space',
    zeta: 'Planet Zeta'
  }
}

export const SCENE_NAMES = {
  'zh-TW': SCENE_ZH_TW,
  'en-US': SCENE_EN_US
}

// Page Contents

const WDLX_ZH_TW = {
  intro: '本地圖為我們團隊最初作品 "人狼殺" 的續作。在保留原始PvP元素的同時，也新增傳統的投票系統，並延伸出許多我們原創的角色能力與變異玩法，融合了Minecraft與狼人殺的樂趣',
  riot_title: '暴民式狼人殺',
  debate_title: '辯論式狼人殺',
  riot_content: '遊戲開始時直接進入白天。白天時所有人會獲得一把武器，拿它砍向你所懷疑之人。晚上時每個玩家都會獲得各自職業的專屬技能，用來殺人或保命',
  debate_content: '遊戲開始時直接進入晚上。遊戲方式主要為投票，白天玩家可進行辯論、猜測與投票，晚上為使用各自技能的時間。',
}

const WDLX_EN_US = {
  intro: 'This Multiplayer Map is the sequel to our very first creation "The Werewolf Game (Mafia)". While inheriting the PvP aspects, we also added the traditional voting system into the game, and created our own original roles and playstyles, integrating the fun elements of two games.',
  riot_title: 'Riot Mode',
  debate_title: 'Debate Mode',
  riot_content: 'Game starts in day. During the day, players will each receive a one-durability weapon, use that to hit any player you find suspicious. During the night, time players will receive their respective abilities, use them to kill or protect yourselves.',
  debate_content: 'Game starts in night. A majority of interactions are voting via written books. During the day, players can debate who is the killer and defend themselves. During the night, players can make use of their abilities to figure out who to trust.',
}

export const WEREWOLF_DLX_PAGE_CONTENTS = {
  'zh-TW': WDLX_ZH_TW,
  'en-US': WDLX_EN_US
}

