import {
  AiFillShop,
  AiOutlineShop,
  AiOutlineWallet,
  AiFillWallet,
} from 'react-icons/ai'
import {
  BiBookmarkHeart,
  BiCalendarHeart,
  BiCalendarEvent,
  BiDialpadAlt,
  BiDialpad,
} from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import {
  FcSettings,
  FcAreaChart,
  FcComboChart,
  FcSlrBackSide,
  FcTemplate,
  FcShop,
  FcLike,
  FcOvertime,
  FcMoneyTransfer,
  FcAlarmClock,
  FcIdea,
} from 'react-icons/fc'
import { GiDigDug } from 'react-icons/gi'
import { MdHistory } from 'react-icons/md'
import { BsGraphUp } from 'react-icons/bs'
import { MdOutlineDashboardCustomize } from 'react-icons/md'

export const sideBarData = [
  {
    name: 'Dashboard',
    icon: BiDialpadAlt,
    icon2: FcTemplate,
  },
  {
    name: 'Active Bits',
    icon2: FcAreaChart,
    icon: BsGraphUp,
  },
  {
    name: 'Markets',
    icon: AiOutlineShop,
    icon2: FcShop,
  },
  {
    name: 'Favorite',
    icon: BiBookmarkHeart,
    icon2: FcLike,
  },
  {
    name: 'Mint',
    icon: GiDigDug,
    icon2: FcIdea,
  },
]

export const userOptions = [
  {
    name: 'My Portfolio',
    icon: FcOvertime,
  },
  {
    name: 'My Wallet',
    icon: FcMoneyTransfer,
  },
  {
    name: 'History',
    icon: FcAlarmClock,
  },
  {
    name: 'Settings',
    icon: FcSettings,
  },
]

// ! trending nft
export const NFtCategory = [
  {
    name: 'Trending',
    emoji: '🔥',
  },
  {
    name: 'Art',
    emoji: '🎨',
  },
  {
    name: 'Games',
    emoji: '🕹️',
  },
  {
    name: 'Music',
    emoji: '🎵',
  },
  {
    name: 'Fashion',
    emoji: '👗',
  },
]

export const NftCollectionsData = [
  {
    url: 'https://lh3.googleusercontent.com/Oz-pR9Tt1PLeanAqIqYwpUPejeMVEZzCCh-9dgZpFAr2_X3LQenwFMt4wBNTYslNVT9JGCQrrwabEE41NV1zKIIp1ENP8jPVn5fg_Q=w473',
    name: 'Mavia Land',
    price: '5.2',
    owner:
      'https://lh3.googleusercontent.com/KwtlzGCHxo9CgfOzLHrO1f6a8ty1QSBGFpGyof9DlVw4zpQ-N_tbqzAwI3kQNuItCM47XwwJp97jqs86k6fW304hRLgFpLrBMXPrGQ=s100',
  },
  {
    url: 'https://lh3.googleusercontent.com/tSc1HTkkO5TcFJuDigc5dUrd2ZGnQrmZwvEQs7Gze2_iLDk1zx9LWsOC0vaO1sjfYxlF8pwf2tQu99_vPCRfytAN8IuTtEqC6Dnq=w323',
    name: 'Invisible Friends #1116',
    price: '5.2',
    owner:
      'https://lh3.googleusercontent.com/lW22aEwUE0IqGaYm5HRiMS8DwkDwsdjPpprEqYnBqo2s7gSR-JqcYOjU9LM6p32ujG_YAEd72aDyox-pdCVK10G-u1qZ3zAsn2r9=s100',
  },
  {
    url: 'https://lh3.googleusercontent.com/ZqfuB_6u_eJgVfAHmsXoZiYFieEN6fRk9Q8laRkkESZhoQgUA93wPp8amIgPWTABe2gtxdNT7u_XL7EQZs6cvuSyTGeOR9NJuqQH7g=w600',
    name: 'Invisible Friends #1533',
    price: '5.211',
    owner:
      'https://lh3.googleusercontent.com/lW22aEwUE0IqGaYm5HRiMS8DwkDwsdjPpprEqYnBqo2s7gSR-JqcYOjU9LM6p32ujG_YAEd72aDyox-pdCVK10G-u1qZ3zAsn2r9=s100',
  },

  {
    url: 'https://lh3.googleusercontent.com/zG_C4PlPwjYqYnGB_YIt1ugozJOQrZmTKOcyd3b3GUeiU-hBVmBEiHBVXqBpbSpFtMkGgIayjMvVenyqCKyQshSmEiMGFv5DZKK46P8=w600  ',
    name: 'WonderPal #5710',
    price: '0.40',
    owner:
      'https://lh3.googleusercontent.com/DA_iUjt7S9PdmAANh0aqMkxYVhvGogTuKbMSzFO3uEnbvRRt5hn1B8DuN50HQpkRtH34QX7EOYYKIayz1q5KgZWfgLedNo7xBQzK=s100',
  },
  {
    url: 'https://lh3.googleusercontent.com/nlkNgeZvWhhrG06Xg0-Vj15ZVn65fBIUNjdPsDF6Rd8QQwT8YWKKJSboXr_EOSt9JJ1KVHwNYmeRci6oAT7uDGqzt86oOE8_K5mPkg=w600',
    name: 'CloneX #15365',
    price: '10',
    owner:
      'https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s130',
  },
  {
    url: 'https://lh3.googleusercontent.com/HJKQSa31nTy9MwrObNlAC6zHcl6Yfm5FShU9XSrlQp2S5UUMD1Ow0zVdSSXM_DZogdPQsDuNi-BG8FHw6ciXsmPbSx3L6eT6_FbOdg=w323 ',
    name: 'CloneX #1172',
    price: '11.11',
    owner:
      'https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s130',
  },
  {
    url: 'https://lh3.googleusercontent.com/nlkNgeZvWhhrG06Xg0-Vj15ZVn65fBIUNjdPsDF6Rd8QQwT8YWKKJSboXr_EOSt9JJ1KVHwNYmeRci6oAT7uDGqzt86oOE8_K5mPkg=w600',
    name: 'CloneX #15365',
    price: '10',
    owner:
      'https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s130',
  },
  {
    url: 'https://lh3.googleusercontent.com/HJKQSa31nTy9MwrObNlAC6zHcl6Yfm5FShU9XSrlQp2S5UUMD1Ow0zVdSSXM_DZogdPQsDuNi-BG8FHw6ciXsmPbSx3L6eT6_FbOdg=w323 ',
    name: 'CloneX #1172',
    price: '11.11',
    owner:
      'https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s130',
  },
]

// ! nft top creators

export const creators = [
  {
    profileImg:
      'https://lh3.googleusercontent.com/mUlxzid0LwTeLJXQGgLZJ1S4-jAi3OopFMd9JcPf0Jtav1MZsb8hLU2i83cZGaL85y1C-Yx8V-z4Nijux4_Vx1zWMghfAvTFMhlPDSU=s130',
    name: 'iconicimagesnft',
    AtUser: '@iconic',
  },
  {
    profileImg:
      'https://lh3.googleusercontent.com/lW22aEwUE0IqGaYm5HRiMS8DwkDwsdjPpprEqYnBqo2s7gSR-JqcYOjU9LM6p32ujG_YAEd72aDyox-pdCVK10G-u1qZ3zAsn2r9=s100',
    name: 'Invisible Friends ',
    AtUser: '@Invisible',
  },
  {
    profileImg:
      'https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100',
    name: 'CryptoPunks ',
    AtUser: '@Punks',
  },
  {
    profileImg:
      'https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s100',
    name: 'Bored Ape Club',
    AtUser: '@Bored',
  },
  {
    profileImg:
      'https://lh3.googleusercontent.com/DA_iUjt7S9PdmAANh0aqMkxYVhvGogTuKbMSzFO3uEnbvRRt5hn1B8DuN50HQpkRtH34QX7EOYYKIayz1q5KgZWfgLedNo7xBQzK=s100',
    name: 'WonderPals',
    AtUser: '@Wonder',
  },
  {
    profileImg:
      'https://lh3.googleusercontent.com/0E-6rL-B-dLFiu-9tipTI7zXaaK0DHEQ4699BVC0nMQ9XRIqgeJ7XrhER-bXYSEsSIex-5CW2fr7bUaCFV-978YiWABy8nKYrxOp=s100',
    name: 'DentedFellsNft',
    AtUser: '@Dented',
  },
  {
    profileImg:
      'https://lh3.googleusercontent.com/3Rk7PFs3XX1ja50aKi8lxh9x67yNX5kZLti7gPlHvWsS7iuXSUdQGctoOXtto7uLLLnvwxe1uhWN6WmmZvVWCcQ-Qm7a8K2KFmEZJC4=s100',
    name: 'DEGEN TOONZ',
    AtUser: '@DEGEN',
  },
  {
    profileImg:
      'https://lh3.googleusercontent.com/SXH8tW1siikB80rwCRnjm1a5xM_MwTg9Xl9Db6mioIk9HIlDM09pVoSR7GKJgS6ulSUpgW9BDtMk_ePX_NKgO9A=s100',
    name: 'The Sandbox',
    AtUser: '@Sandbox',
  },
  {
    profileImg:
      'https://lh3.googleusercontent.com/3Rk7PFs3XX1ja50aKi8lxh9x67yNX5kZLti7gPlHvWsS7iuXSUdQGctoOXtto7uLLLnvwxe1uhWN6WmmZvVWCcQ-Qm7a8K2KFmEZJC4=s100',
    name: 'HOWLERZ',
    AtUser: '@Howlerz',
  },
  {
    profileImg:
      'https://lh3.googleusercontent.com/Qd1IEPYz_0YlMaclPwb6_9PyP7afZIzH15IdIU2X6t1Wvg81DwpAaWOY0cNmxy173C4yMA7sM3xF9-HJsCSKJdx6KvDR3old3IKuTIc=s100',
    name: 'CyberBrokers V3',
    AtUser: '@Cyber',
  },
]
