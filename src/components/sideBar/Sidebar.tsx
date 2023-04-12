import React from 'react'
import './SideBarStyle.css'
import logo from '../../assets/logo.png'
import MenuItem from './components/MenuItem'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusicOutlined'

export default function Sidebar (): JSX.Element {
  return (
    <nav className='side-bar'>
      <header>
        <img className='side-bar-logo' src={logo} alt="" />
        <MenuItem icon={<LibraryMusicIcon className='menu-item-icon'/>} lable='Thư viện'/>
      </header>
    </nav>
  )
}
