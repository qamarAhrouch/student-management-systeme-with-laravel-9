import employeeJson from '../Components/employee.json';
import { Link } from 'react-router-dom';
export default function Emps(){
    const emps = employeeJson.Employees;
    console.log(emps);
    return (
        <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8 px-4 mr-8"> 
                <table className="w-full text-sm text-left rtl:text-right text-black  rounded-full">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-sky-800 dark:text-gray-200 p-9">
                        <tr className='p-18'>
                            <th scope="col" className="px-6 py-3">
                                First Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Lat Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Departement
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mission
                            </th>                    
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            emps && emps.map((req, index)=> (
                                <tr key={index} className='p-16'>
                                    <td className='p-4'>{req.FirstName}</td>
                                    <td className='p-4'>{req.LastName}</td>
                                    <td className='p-4'>{req.Email}</td>
                                    <td className='p-4'>{req.Departement}</td>
                                    <td className='p-4'>{req.mission}</td>
                                    <td className='p-4'>
                                    <Link to={`/Navbar/update-miss/${req.employeeId}`} >
                                        <button 
                                            className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Update mission
                                        </button>
                                    </Link>  
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}