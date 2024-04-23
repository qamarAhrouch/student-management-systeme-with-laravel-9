import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);

    // Retrieve the logged-in user's data from localStorage
    useEffect(() => {
        const loggedInUserData = localStorage.getItem("loggedInUser");
        if (loggedInUserData) {
            const parsedUser = JSON.parse(loggedInUserData);
            setLoggedInUser(parsedUser);
            console.log(parsedUser)
        }
    }, []);
    console.log(loggedInUser);
    const handleChangePassword = (e) => {
        e.preventDefault();
        setError(null);

        // Check if the new passwords match
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        // Check if the old password matches the one in localStorage
        if (loggedInUser && loggedInUser.Password !== oldPassword) {
            setError("Old password is incorrect!");
            return;
        }

        // Here you would normally make an API call to reset the password
        // For the sake of this example, I'll just show a success message
        setSuccess(true);
        navigate('/Navbar/profelchef')
    };

    return (
        <div>
            <h1>Reset Password</h1>
            <form onSubmit={handleChangePassword}>
                <div>
                    <label htmlFor="oldPassword">Old Password</label>
                    <input
                        type="password"
                        id="oldPassword"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        placeholder="enter ur old password"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="newPassword">New Password: </label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="enter new password"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="confirm new password"
                        required
                    />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>Password successfully changed!</p>}
                <button type="submit" className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Reset Password</button>
            </form>
            
        </div>
    );
}
