import React from 'react'
import { RecoilRoot } from 'recoil'
import { Home } from './Screens/Home'
import { Dashboard } from './Screens/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import FixedComponent from './components/FixedComponent'
import Calender from './Screens/Calender'
import Test from './Screens/Test'


function App() {
  return (
    <>

      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/home/myspace/overview" element={<Home />} />
            <Route path="/home/myspace/dashboard" element={<Dashboard />} />
            <Route path="/home/myspace/calender" element={<Calender />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App



