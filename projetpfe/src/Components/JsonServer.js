import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function JsonServer(){
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/leave_requests')
      .then((res) => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>EmployeeId</th>
            <th>Leave Reason</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((l, index) => (
            <tr key={index}>
              <td>{l.id}</td>
              <td>{l.employeeId}</td>
              <td>{l.leaveReason}</td>
              <td>{l.startDate}</td>
              <td>{l.endDate}</td>
              <td>{l.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
