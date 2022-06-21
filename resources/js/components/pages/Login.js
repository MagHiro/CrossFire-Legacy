import { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import { useNavigate } from "react-router-dom";
import RegisterParallax from "./../../assets/Register-Parallax.jpg";
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [Msg, SetMsg] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        //check token
        if (sessionStorage.getItem("token")) {
            //redirect page dashboard
            navigate("/dashboard");
        }
    }, []);

    const submitForm = async (e) => {
        e.preventDefault();
        // api call
        try {
            await axios
                .post("http://localhost:8000/api/login", { username: username, password: password })
                .then((response) => {
                    sessionStorage.setItem("token", response.data.token);
                    navigate("/dashboard");
                    navigate(0);
                });
        } catch (error) {
            console.log(error.response.data);
            SetMsg(error.response.data);
        }
    };

    return (
        <Parallax
            blur={4}
            bgImage={RegisterParallax}
            bgImageStyle={{ opacity: ".5" }}
            strength={0}
        >
            <div
                className="row justify-content-center pt-5"
                style={{ height: "500px" }}
            >
                <div className="col-sm-6 Login-Tab">
                    <div className="card p-4">
                        <h1 className="text-center mb-3">Login Page </h1>
                        <div className="form-group mb-3">
                            <label className="mb-2">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <span
                            className="text-danger"
                            style={{ fontSize: "17px" }}
                        >
                            {Msg.username}
                        </span>
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-2">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                            className="text-danger"
                            style={{ fontSize: "17px" }}
                        >
                            {Msg.password}
                        </span>
                        </div>
                        <span
                            className="text-danger"
                            style={{ fontSize: "17px" }}
                        >
                            {Msg.message}
                        </span>
                        <button
                            type="submit"
                            onClick={submitForm}
                            className="btn btn-primary mt-4"
                        >
                            Login
                        </button>
                        <span className="mt-3" style={{fontSize : '15px', textAlign : 'center', fontFamily : 'Open Sans' , color: '#eaeaea'}}>Belum Punya Akun ?, Daftar <a href="/register">Di sini</a></span>
                    </div>
                </div>
            </div>
        </Parallax>
    );
}
