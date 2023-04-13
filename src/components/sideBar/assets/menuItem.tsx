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

export const fixMenuItems: MenuItemType[] = [
  {
    Icon: <LibraryMusicIcon />,
    lable: 'Thư viện',
    hasPlayIcon: true
  },
  {
    Icon: <AlbumOutlinedIcon />,
    lable: 'Khám phá',
    isActive: true
  },
  {
    Icon: <AutoGraphOutlinedIcon />,
    lable: '#chart',
    hasPlayIcon: true

  },
  {
    Icon: <GraphicEqOutlinedIcon />,
    lable: 'Radio',
    hasPlayIcon: true
  },
  {
    Icon: <FeedOutlinedIcon />,
    lable: 'Theo dõi'
  }
]

export const scrollMenuItems: MenuItemType[] = [
  {
    Icon: <MusicNoteOutlinedIcon />,
    lable: 'Nhạc mới',
    hasPlayIcon: true
  },
  {
    Icon: <CategoryOutlinedIcon />,
    lable: 'Chủ đề và thể loại'
  },
  {
    Icon: <StarOutlineOutlinedIcon />,
    lable: 'Top100'
  },
  {
    Icon: <MusicVideoOutlinedIcon />,
    lable: 'MV'
  }
]
