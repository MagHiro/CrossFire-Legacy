import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import Cookies from "./../../Cookies";

function Dashboard1Profile1UpdateProfile() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const token = Cookies.getItem("token");

    const fetchData = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await axios.get("https://cflegacyindonesia.herokuapp.com/api/user").then((response) => {
            setUser(response.data);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const updateData = async (e) => {
        e.preventDefault();
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        try {
            await axios.post("https://cflegacyindonesia.herokuapp.com/api/update", {
                password: password,
                password_confirmation: password_confirmation,
            });
            navigate("/dashboard/profile");
        } catch (error) {
            (response.data);
        }
    };

    return (
        <div className="Dashboard1Profile1Update">
            <Card>
                <div>
                    <label className="form-label">New Password</label>
                    <input
                        type="text"
                        className="form-control"
                        value={password}
                        placeholder={user.password}
                        onChange={(e) =>setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label className="form-label">Confirm Password</label>
                    <input
                        type="text"
                        className="form-control"
                        value={password_confirmation} 
                        onChange={(e) =>setPassword_confirmation(e.target.value)}       
                    />
                </div>
                <button type="button" onClick={updateData} className="btn btn-outline-primary">
                    Update Data
                </button>
            </Card>
        </div>
    );
}

export default Dashboard1Profile1UpdateProfile;
