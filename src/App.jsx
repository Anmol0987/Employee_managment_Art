import React from 'react'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import { RecoilRoot } from 'recoil'
import NavBar2 from './components/NavBar2'


function App() {
  return (
    <>
    <RecoilRoot>
      <SideBar/>
      <NavBar/>
      <NavBar2/>
    </RecoilRoot>
    </>
  )
}

export default App



