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
      detail: 'Serial Entrepreneur, real estate developer, crypto investor since 2017, surfing madman',
      twitter: 'https://twitter.com/just_in_gains',
    },
    {
      id: 2,
      role: 'COO',
      name: 'Andrew Schleifer',
      avatar: AVATAR_IMG5,
      detail: 'Gamer, entrepreneur and metaverse fanatic. Believer in DeFi and Web3. CEO of Unreal Accelerator',
      twitter: 'https://twitter.com/0xandyg',
    },
    {
      id: 3,
      role: 'CTO',
      name: 'Jason LeBlanc',
      avatar: AVATAR_IMG6,
      detail:
        'Jason has over twenty years of experience in software development and engineering. He`s spent the last ten years as an Executive Manager at a multi-discipline Engineering Firm leading 160 + employees into successfully executing complex projects.',
      twitter: 'https://twitter.com/nonfungiblejson',
    },
  ],
  advisory: [
    {
      id: 1,
      name: 'Von Doom',
      avatar: AVATAR_IMG7,
      detail:
        'At the intersection of tech and marketing, Doom stumbled into Crypto in 2013. Thus began his journey down the rabbit hole of distraction. While IRL Doom runs both a marketing agency and a visualization startup he`s been busy exploring and obsessing over the NFT space since late 2020.',
      twitter: 'https://twitter.com/CryptoVonDoom',
    },
    {
      id: 2,
      name: 'Josh Ong',
      avatar: AVATAR_IMG8,
      detail:
        'Co-Founder of marketing and communications firm Causeway Strategies NFT advisor and marketer (advised projects include BYOPills, Jenkins the Valet Writer`s Room, Smilesssvrs, Property`s, and more)',
      twitter: 'https://twitter.com/beijingdou',
    },
    {
      id: 3,
      name: 'Adam Hollander',
      avatar: AVATAR_IMG9,
      detail:
        'Founder of Hungry Wolves NFT and White Sands Game. Adam is a seriel entreprenuer with an impressive track record in the web2 and web3 space.',
      twitter: 'https://twitter.com/HollanderAdam',
    },
    {
      id: 4,
      name: 'BlockChain Brown',
      avatar: AVATAR_IMG10,
      detail:
        'Co Founder of White Sands Game, Brandon is an NFT affianado and a wiz when it comes to developing strategies and marketing a web3 project.',
      twitter: 'https://twitter.com/br0wnblockchain',
    },
  ],
  counsel: [
    {
      id: 1,
      role: 'MetaCounsel.io',
      name: 'Andrew Cripps',
      avatar: AVATAR_IMG11,
      detail:
        'Decades of experience in web2 law, Andrew recently decided to go full time into web3 law and serves as the full time legal counsel for the Alphaseek team.',
      twitter: 'https://twitter.com/Drew_Kryptonite',
    },
  ],
}
