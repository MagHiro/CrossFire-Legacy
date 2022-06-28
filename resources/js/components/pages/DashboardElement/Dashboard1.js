import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Cookies from "./../../Cookies";
import Foto from './../../../assets/cfbrss-02.jpg';
import Foto1 from './../../../assets/cfl2.gif';
import Dashboard1Profile from "./Dashboard1Profile";
import Dashboard1Character from "./Dashboard1Character";
import Dashboard1Recharge from "./Dashboard1Recharge";

function Dashboard1() {

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
        <Parallax
            blur={4}
            bgImage={Foto}
            bgImageStyle={{ opacity: ".5" }}
        >
            <Container>
                <div className="row">
                    <div className="col">
                        <nav>
                            <div class="d-flex align-items-start">
                                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <div className="card user-nav">
                                        <div className="card-body">
                                            <img src={Foto1} width={100} height={100} />
                                            <h3>{user.nickname || ''} ID {user.id || ''}</h3>
                                            <button type="button" className="btn btn-outline-primary">PLAYER</button>
                                            <span>Player Since 06 March 2022</span>
                                        </div>
                                    </div>
                                    <button class="nav-link active" id="v-pills-Profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Profile" type="button" role="tab" aria-controls="v-pills-Profile" aria-selected="true">Profile</button>
                                    <button class="nav-link" id="v-pills-Character-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Character" type="button" role="tab" aria-controls="v-pills-Character" aria-selected="false">Character</button>
                                    <button class="nav-link" id="v-pills-Recharge-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Recharge" type="button" role="tab" aria-controls="v-pills-Recharge" aria-selected="false">Recharge</button>
                                    <button class="nav-link" id="v-pills-Logout-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Logout" type="button" role="tab" aria-controls="v-pills-Logout" aria-selected="false">Logout</button>
                                </div>
                                <div class="tab-content" id="v-pills-tabContent">
                                    <div class="tab-pane fade show active" id="v-pills-Profile" role="tabpanel" aria-labelledby="v-pills-Profile-tab" tabindex="0"><Dashboard1Profile /></div>
                                    <div class="tab-pane fade" id="v-pills-Character" role="tabpanel" aria-labelledby="v-pills-Character-tab" tabindex="0"><Dashboard1Character /></div>
                                    <div class="tab-pane fade" id="v-pills-Recharge" role="tabpanel" aria-labelledby="v-pills-Recharge-tab" tabindex="0"><Dashboard1Recharge /></div>
                                    <div class="tab-pane fade" id="v-pills-Logout" role="tabpanel" aria-labelledby="v-pills-Logout-tab" tabindex="0">...</div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </Container>
        </Parallax>
    )
}

export default Dashboard1;