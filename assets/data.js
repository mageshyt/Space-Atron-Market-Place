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
