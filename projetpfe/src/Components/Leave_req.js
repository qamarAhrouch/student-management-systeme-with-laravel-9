import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddReqtAction } from '../Config/actions'; // Import your add request action

import Navbar from "./Navbar";

const Leave_req = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requests = useSelector(state => state.requests.requests);
  const count = requests.length;

  const [leaveReason, setLeaveReason] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [detail, setDetail] = useState('');
  const [showDetail, setShowDetail] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    console.log(loggedInUserEmail);

    if (startDate >= endDate) {
      alert("End date should be greater than start date!");
      return;
    }

    const newRequest = {
      id: count + 1,
      employeeId: loggedInUserEmail,
      leaveReason: leaveReason,
      startDate: startDate,
      endDate: endDate,
      detail: detail,
      status:"Waiting"
    };

    dispatch(AddReqtAction(newRequest));
    console.log('Updated List of Requests:', [...requests, newRequest]);
    alert("Your request has been submitted!");
    navigate('/navbar/list-req');

    setLeaveReason('');
    setStartDate('');
    setEndDate('');
    setDetail('');
  };

  const handleLeaveReasonChange = (e) => {
    setLeaveReason(e.target.value);
    setShowDetail(e.target.value === 'other'); // Show Detail input only if leaveReason is 'other'
  };

  return (
    <div className='flex flex-col w-full'>
    {/* <Navbar/> */}
    <h1  className='text-5xl text-black font-bold mb-12 text-center mt-6'>Leave Request</h1>

    <div className="w-6/12 p-16 mx-auto mt-10 bg-white  border rounded-lg shadow-lg mt-8 ">
        
      <h2 className="text-xl font-semibold mb-4">Leave Request Form</h2>
      <form onSubmit={handleSubmit} className='w-full'> 
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Leave Reason</label>
          <select
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={leaveReason}
            onChange={handleLeaveReasonChange} 
          >
            <option value="">Select a reason</option>
            <option value="sick">Sick</option>
            <option value="Maternity">Maternity</option>
            <option value="Paternity">Paternity</option>
            <option value="other">Other</option>
          </select>
        </div>
        {showDetail && ( // Only render Detail input if showDetail is true
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Detail</label>
            <textarea
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            ></textarea>
          </div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <input
            type="date"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Leave_req;
