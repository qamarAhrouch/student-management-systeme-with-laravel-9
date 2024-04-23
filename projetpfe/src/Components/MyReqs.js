import React from 'react';
// import Navbar from "./Navbar";
import { useSelector } from 'react-redux';
import { useNavigate, Link} from 'react-router-dom'; 

export default function MyReqs() {
    const navigate = useNavigate(); 
    const listRequests = useSelector((state) => state.requests.requests);
    console.log(listRequests);
    const OnlyWaiting = listRequests.filter((req)=>req.status === "Waiting");
    console.log(OnlyWaiting);
    

    
    
    return (
        <div>
         <h1  className='text-5xl text-black font-semibold mb-8 mt-6'>My Requests</h1>
            {/* <Navbar /> */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8 p-8 mr-8"> 
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-sky-800 dark:text-gray-200 p-9">
                        <tr className='p-18'>
                            <th scope="col" className="px-6 py-3">
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
                        {
                            OnlyWaiting && OnlyWaiting.map((req, index)=> (
                                <tr key={index} className='p-16'>
                                    <td className='p-4'>{req.employeeId}</td>
                                    <td className='p-4'>{req.leaveReason}</td>
                                    <td className='p-4'>{req.startDate}</td>
                                    <td className='p-4'>{req.endDate}</td>
                                    <td className='p-4'>{req.detail}</td>
                                    <td className='p-4'>{req.status}</td>
                                    <td className='p-4'>
                                    <Link to={`/Navbar/update-req/${req.employeeId}`} >
                                        <button 
                                             className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Update request
                                        </button>
                                    </Link>  
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
