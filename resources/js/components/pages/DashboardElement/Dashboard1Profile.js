import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "./../../Cookies";

function Dashboard1Profile() {

    const [user, setUser] = useState({});

    //token
    const token = Cookies.getItem("token");
    const navigate = useNavigate();

    //function "fetchData"
    const fetchData = async () => {
        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        //fetch user from Rest API
        await axios.get("http://localhost:8000/api/user").then((response) => {
            //set response user to state
            setUser(response.data);
        });
    };
    useEffect(() => {
        //call function "fetchData"
        fetchData();
        if (!Cookies.getItem("token")) {
            //redirect page dashboard
            navigate("/signin");
        };
    }, []);

    //function logout
    const logoutHandler = async () => {
        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        //fetch Rest API
        await axios.post("http://localhost:8000/api/logout").then(() => {
            //remove token from localStorage
            Cookies.removeItem("token");

            //redirect halaman login
            navigate("/");
        });
    };

    return (
        <div className="col dashboard-right">
            <h4>&#8883;  Dashboard</h4>
            <div className="informasi-dashboard">
                <p>Welcome to <span>Dashboard Crossfire Legacy!</span><br />Kamu Bisa Mengganti Informasi Akun Mu Di Sini.</p>

            </div>
            <div className="profile-info">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Profile</a>
                    </li>
                </ul>
                <div className="card profile-tab">
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label">Nama</label>
                            <input type="text" className="form-control" value={user.firstname || ''} disabled readOnly />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={user.username || ''} disabled readOnly />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email Addres</label>
                            <input type="text" className="form-control" value={user.email || ''} disabled readOnly />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Discord ID</label>
                            <input type="text" className="form-control" value="" disabled readOnly />
                        </div>
                        <button type="button" style={{ marginRight: '10px' }} onClick={fetchData} className="btn btn-outline-primary">Verify Account</button>
                        <button type="button" className="btn btn-outline-primary">Change Password</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard1Profile