import React from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

export default function PlaylistCreator (): JSX.Element {
  return (
    <div className='playlist-creator'>
      <AddOutlinedIcon className='playlist-creator-add-icon' />
      <span className='playlist-creator-title'>Tạo playlist mới</span>
    </div>
  )
}
