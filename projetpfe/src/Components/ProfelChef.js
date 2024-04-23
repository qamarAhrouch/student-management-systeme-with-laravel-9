import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

export default function AnotherComponent() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUserData = localStorage.getItem("loggedInUser");
        if (loggedInUserData) {
            const parsedUser = JSON.parse(loggedInUserData);
            setUser(parsedUser);
        } else {
            // Redirect to login page if user data is not found in localStorage
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div className="flex flex-col mt-12">
            {user ? (
                <div>
                    <img className="img-responsive profile-img margin-bottom-20" src="https://www.gravatar.com/avatar/0500b2ab42f89e6307060d3f45458c97?d=mm&amp;s=250" alt="" />

                    <h1>Welcome, {user.FirstName}!</h1>
                    <p>Email : {user.Email}</p>
                    <p>Department : {user.Departement}</p>
                    <p>Mission : {user.mission}</p>
                    <p>Country : {user.country}</p>
                    <p>City : {user.city}</p>
                    <p>State : {user.state}</p>
                    <p>Address : {user.address}</p>
                    <p>Birth Date : {user.birthDate}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <Link to='/Navbar/resetpass'>
                <button className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Reset password</button>
            </Link>
        </div>
    );
}
