import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { updateMissionAction } from "../Config/actions"; // Corrected import
import { useState } from "react";

export default function UpdateMission() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const employees = useSelector((state) => state.requests.employees);
    console.log(employees);
    const employee = employees.find((e) => e.employeeId === parseInt(id));
    console.log(employee);

    const [mission, setMission] = useState(employee.mission);
    // console.log(mission);
    const handleUpdateMission = (e) => {
        e.preventDefault();
        if (!mission ) {
            alert("Please fill the field");
        } else {
            dispatch(updateMissionAction({  
                id:id,
                mission:mission
            }))
            navigate('/Navbar/emps');
        }
    };

    

    return (
        <>
            <section className="bg-white dark:bg-gray-900 justify-center mt-20 rounded-lg p-12">
                <div className="max-w-2xl px-4 py-8 mx-auto lg:py-9">
                    <h2 className="text-3xl text-white font-bold mb-12">Update Mission for {employee.FirstName}</h2>
                    {/* <button className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-3 mb-4 "> 
                        <Link to='/Navbar/leave_req'>Add request</Link>
                    </button> */}
                    <form onSubmit={handleUpdateMission}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <div className="sm:col-span-2">
                                <label htmlFor="leaveReason" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mb-6 font-bold"> Mission</label>
                                <input type="text" name="mission" id="leaveReason" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4" required
                                    value={mission} onChange={(e) => setMission(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button type="submit" className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Update mission
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
