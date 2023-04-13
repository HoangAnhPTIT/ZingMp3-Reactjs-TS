import React, { } from 'react'
import { stringIsNullOrEmpty } from '../../utils/checkAvailable'

export interface IconOutlineType {
  icon: JSX.Element
  extraClass?: string
}

export default function IconOutline (prop: IconOutlineType): JSX.Element {
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <div className={stringIsNullOrEmpty(prop.extraClass) ? 'icon-outline' : `${prop.extraClass} icon-outline`}>
      { prop.icon }
    </div>
  )
}
