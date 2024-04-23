import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AcceptReqAction, RefuseReqAction } from '../Config/actions'; // Assuming actions are defined here
import { useNavigate } from 'react-router-dom';

export default function ListReq() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listRequests = useSelector((state) => state.requests.requests); // Access requests from state

  // No need for manual filtering as state already reflects changes from reducers
  const filteredRequests = listRequests.filter(
    (req) => req.status === 'Waiting' || req.status === 'waiting for approve'
  );

  const handleAccept = (id) => {
    dispatch(AcceptReqAction(id)); // Dispatch action to update state
  };

  const handleRefuse = (id) => {
    dispatch(RefuseReqAction(id)); // Dispatch action to update state
  };

  return (
    <div>
      <h1 className='text-4xl text-black font-semibold mb-12 mt-6'>List of employee Request</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8 mr-8">
        <table className="w-full text-sm text-left rtl:text-right text-black rounded-full">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-sky-800 dark:text-gray-200 p-9">
            <tr className='p-18'>
              <th scope="col" className="p-6">
                Employee email
              </th>
              <th scope="col" className="px-6 py-3">
                Leave reason
              </th>
              <th scope="col" className="px-6 py-3">
                Start Date
              </th>
              <th scope="col" className="px-6 py-3">
                End Date
              </th>
              <th scope="col" className="px-6 py-3">
                Detail
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests &&
              filteredRequests.map((req, index) => (
                <tr key={index} className='p-16'>
                  <td className='p-6'>{req.employeeId}</td>
                  <td className='p-6'>{req.leaveReason}</td>
                  <td className='p-6'>{req.startDate}</td>
                  <td className='p-6'>{req.endDate}</td>
                  <td className='p-6'>{req.detail}</td>
                  <td className='p-6'>{req.status}</td>
                  <td className='p-6'>
                    {req.status === 'Waiting' && (
                      <>
                        <button
                          className="inline-block bg-green-500 hover:bg-green-700 text-white font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                          onClick={() => handleAccept(req.id)}
                        >
                          Accept
                        </button>
                        <span className="mx-2"></span>
                        <button
                          className="inline-block bg-red-500 hover:bg-red-700 text-white font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                          onClick={() => handleRefuse(req.id)}
                        >
                          Refuse
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
