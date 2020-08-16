import React from 'react'

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
  introduction: 'We started off as people chatting in the same channel on an app, after we released our first map creation in 2018 and it gained a lot of popularity, we gradually became a Minecraft map making team.',
  werewolf: 'The Werewolf Game',
  werewolf_note: 'Similar to Town of Salem, but with different roles, abilities, and playstyle deviations'
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
    description: <span>
      <b style={{ fontWeight: 900 }}>“請問您今天要來點母湯嗎？”</b> <br />
      <b style={{ fontWeight: 900, textDecoration: 'underline' }}>綽號</b>：Kino/蘑菇<br />
      <b style={{ fontWeight: 900, textDecoration: 'underline' }}>喜好</b>：蓋模型，打遊戲，耍廢，半夜耍母湯<br />
      <b style={{ fontWeight: 900, textDecoration: 'underline' }}>特技</b>：母湯<br /><br />
酷米家族中的深夜車長，歷代作品中的「母湯」的原型，負責小部分的建築，提供點子常常被大姐否決掉的存在，但在當行星對齊的奇蹟般的情況下會被大姐批准。
</span>
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
    description: <span>
      <b style={{ fontWeight: 900, textDecoration: 'underline' }}>Nickname</b>: Kino<br />
      <b style={{ fontWeight: 900, textDecoration: 'underline' }}>Hobbies</b>: building plastic models, gaming, doing nothing at all, being fked up at midnight<br />
      <b style={{ fontWeight: 900, textDecoration: 'underline' }}>Special Skills</b>: being fked up<br /><br />
      The skilled “driver” of the Koumi Family, was represented as the mushroom stew in previous maps. Built some interiors of rooms/houses, sometime provide tips and idea but Eve always veto them. However, when the planets align she’s would accept several ideas.
  </span>
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
  }
}

export const SCENE_NAMES = {
  'zh-TW': SCENE_ZH_TW,
  'en-US': SCENE_EN_US
}