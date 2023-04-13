import React, { useState } from 'react'
import './PlayBar.css'
import SingInfo from '../common/SingInfo'
import { type SongInfoType } from '../../models/SongInfoType'

export default function PlayBar (): JSX.Element {
  const [currentSong] = useState<SongInfoType>({
    imageUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/5/3/6/d/536dc591405fc70b6f4932eeb18337e8.jpg',
    isShowPublicDate: false,
    songArtist: 'JanK, N2L',
    songName: 'Gió'
  })

  // useEffect(() => {
  //   const song: SongInfoType = {
  //     imageUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/5/3/6/d/536dc591405fc70b6f4932eeb18337e8.jpg',
  //     isShowPublicDate: false,
  //     songArtist: 'JanK, N2L',
  //     songName: 'Gió'
  //   }
  //   setCurrentSong(song)
  // }, [])

  return (
    <div className='playbar'>
      <SingInfo imageUrl={currentSong?.imageUrl} songArtist={currentSong?.songArtist} songName={currentSong.songName} isShowPublicDate={currentSong.isShowPublicDate} />

    </div>
  )
}
