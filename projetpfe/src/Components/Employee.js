// import React, { useState } from 'react';
import employeeJson from '../Components/employee.json';
import Navbar from './Navbar';

import { useParams } from "react-router-dom";

export default function Employee() {
    const { id } = useParams();
    const employee = employeeJson.Employees.find(emp => emp.employeeId === parseInt(id));
    console.log(id);


    return (
        <>
            {/* <Navbar /> <br /> */}
            <div className="profile container content">
                <div className="row">
                    
                    <div className="col-md-3 md-margin-bottom-40 mr-3 ml-3">
                        <img className="img-responsive profile-img margin-bottom-20" src="https://www.gravatar.com/avatar/0500b2ab42f89e6307060d3f45458c97?d=mm&amp;s=250" alt="" />
                        <h3 className="text-center">
                            <b>{employee.FirstName}</b>
                        </h3>
                        <h3 className="text-center">
                            <b>{employee.mission}</b>
                        </h3>
                        <hr />
                        <div className="service-block-v3 service-block-u">
                            {/* STAT */}
                            <div className="row profile-stat">
                                <div className="col-md-4 col-sm-4 col-xs-6" data-toggle="tooltip" data-placement="bottom" title="April">
                                    <b>Hiring Date : </b>
                                    <p>{employee.DateDambauche}</p>
                                    <div>
                                        <b>Country : </b>
                                        <p>{employee.country}</p>
                                    </div>
                                    <div>
                                    <b>State : </b>
                                    <p>{employee.state}</p>
                                    </div>
                                    <div>
                                    <b>City : </b>
                                    <p>{employee.city}</p>
                                    </div>
                                    <br />
                                    <div className="uppercase profile-stat-text">Attendance</div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6" data-toggle="tooltip" data-placement="bottom" title="Leaves">
                                    {/* Add content for Leaves */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
