import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Team from './Components/Team';
import Dashboard from './Components/Dashboard';
import Leave_req from './Components/Leave_req';
import ListReq from './Components/ListReq';
import UpdateReq from './Components/UpdateReq';
import Employee from './Components/Employee';
import Setting from './Components/Setting';
import UpdateMission from './Components/UpdateMission';
import Navbar from './Components/Navbar';
// import Report from './Components/Report';
import Lg from './Components/Lg';
import Emps from './Components/Emps';
import MyReqs from './Components/MyReqs';
import Rp from './Components/Rp';
import ProfelChef from './Components/ProfelChef';
import ResetPassword from './Components/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Lg />} />
          <Route path="/Navbar" element={<Navbar />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="team" element={<Team />} />
            <Route path="report" element={<Rp />} />
            <Route path="leave_req" element={<Leave_req />} />
            <Route path="list-req" element={<ListReq />} />
            <Route path="update-req/:id" element={<UpdateReq />} />
            <Route path="update-miss/:id" element={<UpdateMission />} />
            <Route path="employee/:id" element={<Employee />} />
            <Route path="setting" element={<Setting />} />
            <Route path='emps' element={<Emps/>} />
            <Route path='my-reqs' element={<MyReqs/>} />
            <Route path='profelchef' element={<ProfelChef/>} />
            <Route path='resetpass' element={<ResetPassword/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
