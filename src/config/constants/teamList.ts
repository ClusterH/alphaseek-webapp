import AVATAR_IMG10 from 'assets/images/avatar10_img.png'
import AVATAR_IMG11 from 'assets/images/avatar11_img.png'
import AVATAR_IMG1 from 'assets/images/avatar1_img.png'
import AVATAR_IMG2 from 'assets/images/avatar2_img.png'
import AVATAR_IMG3 from 'assets/images/avatar3_img.png'
import AVATAR_IMG4 from 'assets/images/avatar4_img.png'
import AVATAR_IMG5 from 'assets/images/avatar5_img.png'
import AVATAR_IMG6 from 'assets/images/avatar6_img.png'
import AVATAR_IMG7 from 'assets/images/avatar7_img.png'
import AVATAR_IMG8 from 'assets/images/avatar8_img.png'
import AVATAR_IMG9 from 'assets/images/avatar9_img.png'
import { ITeamItem } from 'views/Home/types'

export const TEAM_LIST: { [key: string]: ITeamItem[] } = {
  core: [
    {
      id: 1,
      role: 'CEO',
      name: 'Gytis Kandrotas',
      avatar: AVATAR_IMG1,
      detail:
        'Gytis has over ten years of experience in crypto and equity markets. He`s worked with multiple crypto derivatives exchanges like BitMEX before co-founding Alphaseek.',
    },
    {
      id: 2,
      role: 'CTO',
      name: 'Ray Campbell',
      avatar: AVATAR_IMG2,
      detail:
        'Ray has over twenty-five years of experience building trading systems globally. He spent more than fifteen years on Wall Street working with banks, prime brokers and, proprietary trading firms.',
    },
    {
      id: 3,
      role: 'COO',
      name: 'Rado Entchev',
      avatar: AVATAR_IMG3,
      detail:
        'Rado started trading crypto in 2013 and recently founded a crypto trading firm. He has over twenty years of experience building SAAS applications and leading high-performance distributed teams.',
    },
  ],
  accelerator: [
    {
      id: 1,
      role: 'CEO',
      name: 'Justin Ortiz',
      avatar: AVATAR_IMG4,
    },
    {
      id: 2,
      role: 'COO',
      name: 'Andrew Schleifer',
      avatar: AVATAR_IMG5,
    },
    {
      id: 3,
      role: 'CTO',
      name: 'Jason LeBlanc',
      avatar: AVATAR_IMG6,
    },
  ],
  advisory: [
    {
      id: 1,
      name: 'Von Doom',
      avatar: AVATAR_IMG7,
      twitter: 'https://twitter.com',
    },
    {
      id: 2,
      name: 'Josh Ong',
      avatar: AVATAR_IMG8,
      twitter: 'https://twitter.com',
    },
    {
      id: 3,
      name: 'Adam Hollander',
      avatar: AVATAR_IMG9,
      twitter: 'https://twitter.com',
    },
    {
      id: 4,
      name: 'BlockChain Brown',
      avatar: AVATAR_IMG10,
      twitter: 'https://twitter.com',
    },
  ],
  counsel: [
    {
      id: 1,
      role: 'MetaCounsel.io',
      name: 'Andrew Cripps',
      avatar: AVATAR_IMG11,
    },
  ],
}
