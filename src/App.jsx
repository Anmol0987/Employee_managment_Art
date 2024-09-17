import React from 'react'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import { RecoilRoot } from 'recoil'



function App() {
  return (
    <>
    <RecoilRoot>
    <SideBar/>
    <NavBar/>
    </RecoilRoot>
    </>
  )
}

export default App



