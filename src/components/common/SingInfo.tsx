import React from 'react'
import { type SongInfoType } from '../../models/SongInfoType'
import './Common.css'

export default function SingInfo (prop: SongInfoType): JSX.Element {
  return (
    <div className='songinfo'>
      <img className='songinfo-image' src={prop.imageUrl} alt="" />
      <div className='songinfo-info'>
        <span className='songinfo-songname'>{prop.songName}</span>
        <span className='songinfo-songartist'>{prop.songArtist}</span>
        {
          (prop.isShowPublicDate === true) ? <span>{prop.publicDate}</span> : <></>
        }
      </div>
    </div>
  )
}
