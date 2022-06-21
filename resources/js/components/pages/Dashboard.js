import React, {useState, useEffect} from "react";
import { Parallax } from "react-parallax";
import { useNavigate } from "react-router-dom";

function Dashboard () {

    const directProfile = (e) => {
        window.location.href='/dashboard/profile'
    }
    const directCharacter = (e) => {
        window.location.href='/dashboard/character'
    }
    const directTopup = (e) => {
        window.location.href='/dashboard/topup'
    }
    const directUpdate = (e) => {
        window.location.href=`/dashboard/profile/edit/${user.id}`
    }

    const [user, setUser] = useState({});

    //token
    const token = sessionStorage.getItem("token");
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
        if (!sessionStorage.getItem("token")) {
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
            sessionStorage.removeItem("token");

            //redirect halaman login
            navigate("/");
        });
    };

    return(
        <Parallax
            blur={4}
            bgImage={require('./../../assets/cfbrss-02.jpg').default}
            bgImageStyle={{ opacity: ".5" }}
        >    
            <div className="container pt-5 mb-5">
                <div className="row">
                    <div className="col-4 dashboard-column">
                        <div className="card user-nav">
                            <div className="card-body">
                                <img src={ require('./../../assets/cfl2.gif').default} width={100} height={100}/>
                                <h3>{user.nickname} ID {user.id}</h3>
                                <button type="button" className="btn btn-outline-primary">PLAYER</button>
                                <span>Player Since 06 March 2022</span>
                            </div>
                        </div>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="submit" onClick={directProfile} className="btn btn-outline-primary">Profile</button>
                            <button type="button" onClick={directCharacter}className="btn btn-outline-primary">Character</button>
                            <button type="button" onClick={directTopup}className="btn btn-outline-primary">Top Up</button>
                            <button type="button" onClick={logoutHandler}className="btn btn-outline-primary">Logout</button>
                        </div>
                    </div>
                    <div className="col dashboard-right">
                        <h4>&#8883;  Dashboard</h4>
                        <div className="informasi-dashboard">
                            <p>Welcome to <span>Dashboard Crossfire Legacy!</span><br/>Kamu Bisa Mengganti Informasi Akun Mu Di Sini.</p>
                            
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
                                        <input type="text" className="form-control" value={user.firstname} disabled readOnly/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Username</label>
                                        <input type="text" className="form-control" value={user.username} disabled readOnly/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email Addres</label>
                                        <input type="text" className="form-control" value={user.email} disabled readonly/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Discord ID</label>
                                        <input type="text" className="form-control" value="" disabled readonly/>
                                    </div>
                                    <button type="button" style={{marginRight : '10px'}} onClick={fetchData} className="btn btn-outline-primary">Verify Account</button>
                                    <button type="button" onClick={directUpdate} className="btn btn-outline-primary">Change Password</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </Parallax>    
    )
}

export default Dashboard;