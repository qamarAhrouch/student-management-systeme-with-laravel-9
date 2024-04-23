import Navbar from "./Navbar";
import employeeJson from '../Components/employee.json';
import { Outlet } from "react-router-dom";

export default function Dashboard(){
    const employees = employeeJson.Employees;

    return (
        <>
            {/* <Outlet /> */}
            <div className="container my-24 mx-auto md:px-6">
                <section className="mb-32 text-center">
                    <h2 className="mb-12 text-3xl font-bold">
                        Our <u className="text-primary dark:text-primary-400">employees</u>
                    </h2>
                    <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-2 ml-9 pl-6">
                        {
                            employees && employees.map((employee, index) => (
                                <div className="mb-12" key={index}>
                                    <img className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg" alt="avatar" />
                                    <p className="mb-2 font-bold">{employee.FirstName}</p>
                                    <p className="text-neutral-500 dark:text-neutral-300">{employee.mission}</p>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        </>
    );
}
