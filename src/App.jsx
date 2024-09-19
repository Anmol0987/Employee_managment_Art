import React from 'react'
import { RecoilRoot } from 'recoil'
import { Home } from './Screens/Home'
import { Dashboard } from './Screens/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import FixedComponent from './components/FixedComponent'
import Calender from './Screens/Calender'
import TimeTracker from './Screens/TimeTracker'
import Attendence from './Screens/Attendence'
import TrackLeave from './Screens/TrackLeave'


function App() {
  return (
    <>

      <RecoilRoot>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home/myspace/overview" element={<Home />} />
            <Route path="/home/myspace/dashboard" element={<Dashboard />} />
            <Route path="/home/myspace/calender" element={<Calender />} />
            <Route path="/timetracker/mydata/timelogs" element={<TimeTracker/>} />
            <Route path="/attendence" element={<Attendence/>} />
            <Route path="/trackLeave" element={<TrackLeave/>} />

          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App



