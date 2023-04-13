import React from 'react'
import './SideBarStyle.css'
import logo from '../../assets/logo.png'
import { fixMenuItems, scrollMenuItems } from './assets/menuItem'
import MenuComponent from './components/MenuComponent'
import Library from './components/Library'
import PlaylistCreator from './components/PlaylistCreator'

export default function Sidebar (): JSX.Element {
  return (
    <nav className='side-bar'>
      <div>
        <header>
          <img className='side-bar-logo' src={logo} alt="" />
        </header>
        <div>
          {
            <MenuComponent items={fixMenuItems} />
          }
          <div className='divider-solid'></div>
          {
            <MenuComponent items={scrollMenuItems} />
          }
        </div>
        <div className='sidebar-vip-banner'>
          <p className='sidebar-vip-banner-label'>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
          <a className='sidebar-vip-banner-button'>NÂNG CẤP VIP</a>
        </div>
        <div className='sidebar-library'>
          <Library />
        </div>
      </div>
      <div>
        <PlaylistCreator />
      </div>
    </nav>
  )
}
