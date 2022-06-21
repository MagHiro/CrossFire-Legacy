import React, {useState, useEffect} from "react";
import { Parallax } from "react-parallax";
import { useNavigate } from 'react-router-dom';

function Character () {
    const navigate = useNavigate();

    const directProfile = (e) => {
        window.location.href='/dashboard/profile'
    }
    const directCharacter = (e) => {
        window.location.href='/dashboard/character'
    }
    const directTopup = (e) => {
        window.location.href='/dashboard/topup'
    }

    const [user, setUser] = useState({});

    //token
    const token = sessionStorage.getItem("token");

    //function "fetchData"
    const fetchData = async () => {
        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        //fetch user from Rest API
        await axios.get("https://cflegacyindonesia.herokuapp.com/api/user").then((response) => {
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
        await axios.post("https://cflegacyindonesia.herokuapp.com/api/logout").then(() => {
            //remove token from localStorage
            sessionStorage.removeItem("token");

            //redirect halaman login
            navigate("/signin");
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
                            <button type="button" onClick={directCharacter} className="btn btn-outline-primary">Character</button>
                            <button type="button" onClick={directTopup} className="btn btn-outline-primary">Top Up</button>
                            <button type="button" onClick={logoutHandler} className="btn btn-outline-primary">Logout</button>
                        </div>
                    </div>

                    <div className="col dashboard-right">
                        <h4>&#8883;  Dashboard</h4>
                        <div className="informasi-dashboard">
                            <p>Welcome to <span>Account Crossfire Legacy!</span><br/>Kamu Bisa Melihat Keterangan Akun Mu Di Sini.</p>
                            
                        </div>
                        <div className="profile-info">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">General</a>
                                </li>
                            </ul>
                            <div className="card profile-tab">
                                <div className="card-body">
                                    <table class="table karakter-info">
                                        <tbody>
                                            <tr>
                                            <th scope="row">Rank</th>
                                            <td><img src={require('./../../assets/ranks/rank_104.jpg').default} width={30} height={30} /> Grand Marshall</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Exp</th>
                                            <td>{user.exp}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Rasio W/L</th>
                                            <td>{user.win} / {user.lose}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Rasio K/D</th>
                                            <td>{user.kill} / {user.death}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Game Point</th>
                                            <td>{user.point} GP</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Koin</th>
                                            <td>{user.cash} Koin </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button type="button" onClick={fetchData}className="btn btn-outline-primary">Refresh Data</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </Parallax>    
    )
}

export default Character;
