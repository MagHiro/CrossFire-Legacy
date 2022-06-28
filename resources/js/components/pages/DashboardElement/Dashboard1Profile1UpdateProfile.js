import axios from "axios";
import React, {useState, useEffect} from "react";
import { Parallax } from "react-parallax";
import { useNavigate } from "react-router-dom";
import Cookies from "../Cookies";

function Dashboard1Profile1UpdateProfile () {


    const directProfile = (e) => {
        window.location.href='/dashboard/profile'
    }
    const directCharacter = (e) => {
        window.location.href='/dashboard/character'
    }
    const directTopup = (e) => {
        window.location.href='/dashboard/topup'
    }
    const directBack = (e) => {
        window.location.href='/dashboard/profile'
    }

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');

    //token
    const token = Cookies.getItem("token");

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
            navigate("/signin");
        });
    };

    const updateData = async (e) => {
        e.preventDefault();
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        try {
            await axios.post("http://localhost:8000/api/update",{
            password : password,
            password_confirmation : password_confirmation
        });
        navigate("/dashboard/profile");
        } catch (error) {
            console.log(response.data)
        }
        
    }

    return(
                    <div className="col dashboard-right">
                        <h4>&#8883;  Dashboard</h4>
                        <div className="informasi-dashboard">
                            <p>Welcome to <span>Dashboard Crossfire Legacy!</span><br/>Kamu Bisa Mengganti Informasi Akun Mu Di Sini.</p>
                            
                        </div>
                        <div className="profile-info">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Change Password</a>
                                </li>
                            </ul>
                            <div className="card profile-tab">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label className="form-label">New Password</label>
                                        <input type="password" className="form-control" placeholder={user.password} value={password} onChange={(e) =>setPassword(e.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" value={password_confirmation} onChange={(e) =>setPassword_confirmation(e.target.value)}/>
                                    </div>

                                    <button type="button" style={{marginRight : '10px'}} onClick={updateData} className="btn btn-outline-primary">Update</button>
                                    <button type="button" onClick={directBack} className="btn btn-outline-primary">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>  
    )
}

export default Dashboard1Profile1UpdateProfile;