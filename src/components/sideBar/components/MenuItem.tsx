import React from 'react'
import './MenuItemStyle.css'

interface MenuItemProp {
  icon: JSX.Element
  lable: string
}

export default function MenuItem (prop: MenuItemProp): JSX.Element {
  return (
    <div className='menu-item'>
      {prop.icon}
      <span className='menu-item-lable'>{prop.lable}</span>
    </div>
  )
}
