import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
    const [userdt, setUserdt] = useState({
        user_name: "",
        gender: "",
        user_dob: "",
        user_email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserdt({ ...userdt, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors
        try {
            const response = await axios.post("http://localhost:5000/api/user/adduser", userdt);
            console.log("User added successfully:", response.data);
            alert("Registration successful!");
        } catch (error) {
            console.error("Error adding user:", error.response?.data || error.message);
            setError(error.response?.data?.message || "Failed to register user.");
        }
    };

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" name="user_name" value={userdt.user_name} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>
                            <select name="gender" value={userdt.gender} onChange={handleInputChange}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>DOB</td>
                        <td><input type="date" name="user_dob" value={userdt.user_dob} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="email" name="user_email" value={userdt.user_email} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="password" value={userdt.password} onChange={handleInputChange} /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleSubmit}>Register</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Registration;
