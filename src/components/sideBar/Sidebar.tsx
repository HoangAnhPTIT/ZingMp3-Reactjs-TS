import React from 'react'
import './SideBarStyle.css'
import logo from '../../assets/logo.png'
import { fixMenuItems, scrollMenuItems } from './assets/menuItem'
import MenuComponent from './components/MenuComponent'

export default function Sidebar (): JSX.Element {
  return (
    <nav className='side-bar'>
      <header>
        <img className='side-bar-logo' src={logo} alt="" />
        {
          <MenuComponent items={fixMenuItems} />
        }

        <div className='divider-solid'></div>
        {
          <MenuComponent items={scrollMenuItems} />
        }
      </header>
    </nav>
  )
}
