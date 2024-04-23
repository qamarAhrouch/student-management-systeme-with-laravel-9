import React from 'react';
import Navbar from "./Navbar";
import employeeJson from '../Components/employee.json';
import { Link } from "react-router-dom";

export default function Team() {
    const employees = employeeJson.Employees;

    return (
        <>
            {/* <Navbar/> */}
            <div className="container my-24 mx-auto md:px-6 mr-9">
                <section className="mb-32 text-center">
                    <h2 className="mb-12 text-3xl font-bold">
                        Employee <u className="text-primary dark:text-primary-400">team</u>
                    </h2>
                    <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-2">
                        {
                            employees && employees.map((employee, index) => (
                                <Link to={`/navbar/employee/${employee.employeeId}`} key={index}>
                                    <div className="mb-12">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg"
                                            className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
                                            alt=""
                                            style={{ maxWidth: "200px" }}
                                        />
                                        <p className="mb-2 font-bold">{employee.FirstName}</p>
                                        <p className="text-neutral-500 dark:text-neutral-300">{employee.mission}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </section>
            </div>
        </>
    );
}
