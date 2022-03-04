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
} from 'react-icons/fc'
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
