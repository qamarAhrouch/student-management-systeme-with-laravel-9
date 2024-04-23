import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Rp() {
    const listRequests = useSelector((state) => state.requests.requests);

    // Filter requests with "Accepted" or "Refused" status
    const filteredRequests = listRequests.filter(req => req.status === "Accepted" || req.status === "Refused");

    const [filterAbsence, setFilterAbsence] = useState('');

    // Filter the already filtered list by the new filters
    const filteredRequestsByFilters = filteredRequests.filter(req => {
        const absenceMatch = req.leaveReason.includes(filterAbsence);
        return absenceMatch;
    });

    return (
        <>
            <div style={{ padding: '10px' }} className="w-full mt-16 ms-4 ">
                <h1 className='text-5xl text-black font-bold mb-12'>Absence Report</h1>
                <p className='font-normal mb-8 text-xl text-slate-700'>This report includes all absences for the selected period. You can filter by absence type, employee, or team.</p>

                <div style={{ marginBottom: '10px' }}>
                    <input type="text" placeholder="Filter by Absence" value={filterAbsence} onChange={(e) => setFilterAbsence(e.target.value)} />
                </div>

                {/* * All Absences...  */}
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-6">
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', padding: '10px' }}>All Absences</h3>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 p-6 rounded">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-800 dark:bg-sky-800 dark:text-gray-200 p-9">
                            <tr className='p-18'>
                                <th scope="col" className="px-6 py-3">
                                    Employee
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Absence
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Type
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    First Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    End Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRequestsByFilters.map((r, index) => (
                                <tr key={index} className='p-16'>
                                    <td className='p-4'>{r.employeeId}</td>
                                    <td className='p-4'>{r.leaveReason}</td>
                                    <td className='p-4'>{r.detail}</td>
                                    <td className='p-4'>{r.startDate}</td>
                                    <td className='p-4'>{r.endDate}</td>
                                    <td className='p-4'>{r.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
