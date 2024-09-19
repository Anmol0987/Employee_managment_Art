import React from 'react'
import { RecoilRoot } from 'recoil'
import { Home } from './Screens/Home'
import { Dashboard } from './Screens/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import FixedComponent from './components/FixedComponent'
import Calender from './Screens/Calender'
import TimeTracker from './Screens/TimeTracker'
import Organization from './Screens/Organization'
import Attendence from './Screens/Attendence'
import TrackLeave from './Screens/TrackLeave'
import Announcement from './Screens/Announcement'
import NotFound from './Screens/NotFound'


function App() {
  return (
    <>

      <RecoilRoot>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home/myspace/Overview" element={<Home />} />
            <Route path="/home/myspace/Dashboard" element={<Dashboard />} />
            <Route path="/home/myspace/Calender" element={<Calender />} />
            <Route path='/home/Organization/Overview' element={<Organization/>} />
            <Route path='/home/Organization/announcement' element={<Announcement/>} />
            <Route path="/timetracker/mydata/timelogs" element={<TimeTracker/>} />
            <Route path="/attendence" element={<Attendence/>} />
            <Route path="/trackLeave" element={<TrackLeave/>} />
            <Route path="*" element={<NotFound/>} />


          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App



