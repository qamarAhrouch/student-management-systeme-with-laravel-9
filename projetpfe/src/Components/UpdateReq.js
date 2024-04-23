import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UpdateReqAction } from "../Config/actions";

export default function UpdateReq() {
    const { id } = useParams();
    const navigate = useNavigate();
    const listRequest = useSelector((state) => state.requests.requests);
    console.log(listRequest);
    const request = listRequest.find((r) => r.id === parseInt(id));
    const dispatch = useDispatch();

    const [leaveReason, setLeaveReason] = useState(request.leaveReason);
    const [startDate, setStartDate] = useState(request.startDate);
    const [endDate, setEndDate] = useState(request.endDate);
    const [detail, setDetail] = useState(request.detail);

    const handleUpdateRequest = (e) => {
        e.preventDefault();
        if (!leaveReason || !startDate || !endDate) {
            alert("Please fill all fields");
        } else {
            dispatch(UpdateReqAction({
                id:id,
                leaveReason:leaveReason,
                startDate: startDate,
                endDate:endDate,
                detail:detail
            }))
            navigate('/Navbar/my-reqs');
        }
    };

    // useEffect(() => {
    //     setLeaveReason(request.leaveReason);
    //     setStartDate(request.startDate);
    //     setEndDate(request.endDate);
    //     setDetail(request.detail);
    // }, [request]);

    return (
        <section className="bg-white dark:bg-gray-900 justify-center mt-14 w-2/4 rounded-lg">
            <h2 className="mt-4 ms-3 text-3xl font-bold text-slate-300">Update request</h2>

            <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                {/* <button>
                    <Link to="/Navbar/leave_req">Add request</Link>
                </button> */}
                <form onSubmit={handleUpdateRequest} className="p-6">
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="sm:col-span-2">
                            <label htmlFor="leaveReason" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Leave Reason</label>
                            <input type="text" name="leaveReason" id="leaveReason" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required 
                                value={leaveReason} onChange={(e) => setLeaveReason(e.target.value)} />
                        </div>
                        <div className="w-full">
                            <label htmlFor="startDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                            <input type="date" name="startDate" id="startDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required 
                                value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        </div>
                        <div className="w-full">
                            <label htmlFor="endDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                            <input type="date" name="endDate" id="endDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required 
                                value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="detail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Detail</label>
                            <textarea id="detail" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                value={detail} onChange={(e) => setDetail(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button type="submit"  className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Update request
                        </button>
                        {/* <button type="button" className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                            <svg className="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                            Delete
                        </button> */}
                    </div>
                </form>
            </div>
        </section>
    );
}
