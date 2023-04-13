import React from 'react'

import { type MenuItemType } from '../../../models/MenuItemType'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusicOutlined'
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined'
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined'
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined'
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined'
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined'
import { HistoryIcon } from '../assets/icons/HistoryIcon'
import { SingNoteIcon } from './icons/SingNoteIcon'
import { PlaylistIcon } from './icons/PlaylistIcon'

export const fixMenuItems: MenuItemType[] = [
  {
    Icon: <LibraryMusicIcon className='menu-item-icon' />,
    label: 'Thư viện',
    hasPlayIcon: true
  },
  {
    Icon: <AlbumOutlinedIcon className='menu-item-icon' />,
    label: 'Khám phá',
    isActive: true
  },
  {
    Icon: <AutoGraphOutlinedIcon className='menu-item-icon' />,
    label: '#chart',
    hasPlayIcon: true

  },
  {
    Icon: <GraphicEqOutlinedIcon className='menu-item-icon' />,
    label: 'Radio',
    hasPlayIcon: true
  },
  {
    Icon: <FeedOutlinedIcon className='menu-item-icon' />,
    label: 'Theo dõi'
  }
]

export const scrollMenuItems: MenuItemType[] = [
  {
    Icon: <MusicNoteOutlinedIcon className='menu-item-icon' />,
    label: 'Nhạc mới',
    hasPlayIcon: true
  },
  {
    Icon: <CategoryOutlinedIcon className='menu-item-icon' />,
    label: 'Chủ đề và thể loại'
  },
  {
    Icon: <StarOutlineOutlinedIcon className='menu-item-icon' />,
    label: 'Top100'
  },
  {
    Icon: <MusicVideoOutlinedIcon className='menu-item-icon' />,
    label: 'MV'
  }
]

export const libraryMenuItems: MenuItemType[] = [
  {
    Icon: SingNoteIcon,
    label: 'Bài hát',
    classLabel: 'menu-item-lable-normal',
    hasPlayIcon: true
  },
  {
    Icon: PlaylistIcon,
    label: 'Playlist',
    classLabel: 'menu-item-lable-normal'
  },
  {
    Icon: HistoryIcon,
    classLabel: 'menu-item-lable-normal',
    label: 'Gần đây'
  }
]
