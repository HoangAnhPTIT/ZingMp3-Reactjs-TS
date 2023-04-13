import React from 'react'
import './Style.css'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import IconOutline from '../../common/IconOutline'
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import BrowserUpdatedOutlinedIcon from '@mui/icons-material/BrowserUpdatedOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

export default function Header (): JSX.Element {
  return (
    <div className='body-header'>
      <div className="body-header-left">
        <div className='body-header-controll-direction'>
          <KeyboardBackspaceOutlinedIcon />
          <EastOutlinedIcon />
        </div>
        <div className='body-header-search'>
          <SearchOutlinedIcon className='body-header-search-icon' />
          <input type="text" placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...' />
        </div>
      </div>
      <div className="body-header-right">
        <div className='download-window-version'>
          <BrowserUpdatedOutlinedIcon className='window-download-icon'/>
          <span>Tải bản Windows</span>
        </div>
        <div>
          <IconOutline icon={<AddReactionOutlinedIcon />} />
        </div>
        <div>
          <IconOutline icon={<SettingsOutlinedIcon />} />
        </div>
        <div>
          <IconOutline icon={<PersonOutlineOutlinedIcon />} extraClass='margin-unset'/>
        </div>
      </div>
    </div>
  )
}
