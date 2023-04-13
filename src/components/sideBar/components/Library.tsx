import React from 'react'
import MenuComponent from './MenuComponent'
import { libraryMenuItems } from '../assets/menuItem'

export default function Library (): JSX.Element {
  return (
    <div>
      <div className='sidebar-library-label'>Thư viện</div>
      <MenuComponent items={libraryMenuItems}/>
    </div>
  )
}
