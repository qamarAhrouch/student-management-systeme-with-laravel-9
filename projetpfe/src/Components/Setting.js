import React, { useState, useEffect } from "react";
import usersJson from '../Components/Login.json';
import { Link } from "react-router-dom";

export default function Setting() {
    const [user, setUser] = useState(null);
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');

    useEffect(() => {
        const loggedInUser = usersJson.UsersLogin.find(user => user.Email === loggedInUserEmail);
        console.log(loggedInUserEmail);

        if (loggedInUser) {
            console.log("Setting User: ", loggedInUser);
            setUser(loggedInUser);
        } else {
            console.log("User not found");
        }
    }, []); 

    return (
        <div>
             <div className="top-4 right-96">
                <button className="bg-cyan-600 p-3 text-white ">
                    <Link to='/Navbar/emps'>Employees</Link>
                </button>
                <button className="bg-cyan-600 p-3 text-white ml-4" >
                    <Link to='/Navbar/my-reqs'>My requests</Link>
                </button>
            </div>
        <div className="flex justify-between items-center">
            
            <div className="flex items-center">
                {user ? (
                    <div className="profile container content">
                        <div className="row">
                            <div className="mt-14">
                                <img className="img-responsive profile-img margin-bottom-20 flex" src="https://www.gravatar.com/avatar/0500b2ab42f89e6307060d3f45458c97?d=mm&amp;s=250" alt="" />
                                <div>
                                    <h3 className="text-center flex">
                                        <b>{user.FirstName}</b>
                                    </h3>
                                    <h3 className="text-center">
                                        <b>{user.mission}</b>
                                    </h3>
                                </div>
                                <hr />
                                <div className="service-block-v3 service-block-u">
                                    {/* STAT */}
                                    <div className="row profile-stat">
                                        <div className="col-md-4 col-sm-4 col-xs-6" data-toggle="tooltip" data-placement="bottom" title="April">
                                            <b>Hiring Date : </b>
                                            <p>{user.DateDambauche}</p>
                                            <div>
                                                <b>Country : </b>
                                                <p>{user.country}</p>
                                            </div>
                                            <div>
                                            <b>State : </b>
                                            <p>{user.state}</p>
                                            </div>
                                            <div>
                                            <b>City : </b>
                                            <p>{user.city}</p>
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>User not found</p>
                )}
            </div>
           
        </div>
        </div>
    );
}
