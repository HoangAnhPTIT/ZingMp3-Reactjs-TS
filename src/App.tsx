import React from 'react'
import Sidebar from './components/sideBar/Sidebar'
import PlayBar from './components/playBar/PlayBar'
import Body from './components/body/Body'
import './App.css'

function App (): JSX.Element {
  return (
    <div className="App">
      <Sidebar />
      <Body />
      <PlayBar />
    </div>
  )
}

export default App
