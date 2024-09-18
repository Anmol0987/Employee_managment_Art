import React from 'react'
import { RecoilRoot } from 'recoil'
import { Home } from './Screens/Home'
import { Dashboard } from './Screens/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FixedComponent from './components/FixedComponent'



function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
        <FixedComponent />
          <Routes>

            <Route path="/home/myspace/overview" element={<Home />} />
            <Route path="/home/myspace/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App



