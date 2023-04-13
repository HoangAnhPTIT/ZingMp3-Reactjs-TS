import React from 'react'
import MenuItem from './MenuItem'
import { type MenuItemType } from '../../../models/MenuItemType'

export interface MenuItemTypes {
  items: MenuItemType[]
}

export default function MenuComponent (prop: MenuItemTypes): JSX.Element {
  return (
    <div>
      {
        prop.items.map((item, key) => {
          return <MenuItem key={key} Icon={item.Icon} lable={item.lable} isActive={item.isActive} hasPlayIcon={item.hasPlayIcon} />
        })
      }
    </div>
  )
}
