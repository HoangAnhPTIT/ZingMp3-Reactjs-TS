import React, { } from 'react'
import Header from './header/Header'
import Banner from './banner/Banner'
import './BodyStyle.css'
export default function Body (): JSX.Element {
  return (
    <div className='body-container'>
      <Header />
      <Banner />
    </div>
  )
}
