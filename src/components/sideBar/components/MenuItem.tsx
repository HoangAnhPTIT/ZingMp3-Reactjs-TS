import React, { useRef } from 'react'
import './MenuItemStyle.css'
import { type MenuItemType } from '../../../models/MenuItemType'
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined'
export default function MenuItem (prop: MenuItemType): JSX.Element {
  const playButtonIcon = useRef({} as any)

  return (
    <a href='#' className={(prop.isActive === true) ? 'menu-item active' : 'menu-item'}
      onMouseLeave={(e) => {
        if (playButtonIcon.current.style !== undefined) { playButtonIcon.current.style.display = 'none' }
      }}
      onMouseEnter={(e) => {
        if (playButtonIcon.current.style !== undefined) { playButtonIcon.current.style.display = 'block' }
      }}>
      <div className='menu-item-main'>
        {prop.Icon}
        <span className='menu-item-lable'>{prop.lable}</span>
      </div>
      {
        (prop.hasPlayIcon === true && (prop.isActive === false || prop.isActive === undefined))
          ? <button
            ref={playButtonIcon}
            className='menu-item-play-icon'
          >
            <PlayCircleOutlineOutlinedIcon />
          </button>
          : <></>
      }
    </a>
  )
}
