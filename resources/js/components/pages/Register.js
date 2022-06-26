import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-parallax";
import RegisterParallax from "./../../assets/Register-Parallax.jpg";
import axios from "axios";
import Cookies from "../Cookies";

export default function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [pin, setPin] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const [Msg, SetMsg] = useState("");

    useEffect(() => {
        //check token
        if (Cookies.getItem("token")) {
            //redirect page dashboard
            navigate("/dashboard");
        }
    }, []);

    const submitForm = async (e) => {
        e.preventDefault();
        // api call
        try {
            await axios.post("http://localhost:8000/api/register", {
                email: email,
                password: password,
                password_confirmation : password_confirmation,
                pin : pin,
                username: username,
                firstname: firstname,
                lastname: lastname,
            });
            navigate("/signin");
        } catch (error) {
            if (error.response) {
                SetMsg(error.response.data);
            }
        }
    };

    return (
        <Parallax
            blur={4}
            bgImage={RegisterParallax}
            bgImageStyle={{ opacity: ".5" }}
        >
            <div
                className="row justify-content-center mt-5"
                style={{ height: "980px" }}
            >
                <div className="col-sm-6 Regis-Tab">
                    <div className="card p-4">
                        <h1 className="text-center mb-3">Register Page </h1>
                        <div className="form-group mb-3">
                            <label className="mb-2">ID:</label>
                            <input
                                type="test"
                                className="form-control"
                                placeholder="Masukan username maksimal 16 huruf"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <span className="text-danger">{Msg.username}</span>
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-2">Nama Depan</label>
                            <input
                                type="test"
                                className="form-control"
                                placeholder="Masukkan Nama Depan"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                            <span className="text-danger">{Msg.firstname}</span>
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-2">Nama Belakang</label>
                            <input
                                type="test"
                                className="form-control"
                                placeholder="Masukkan Nama Belakang"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                            />
                            <span className="text-danger">{Msg.lastname}</span>
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-2">Email address:</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="example@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="text-danger">{Msg.email}</span>
                        </div>

                        <div className="form-group mb-3">
                            <label className="mb-2">Pin :</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Pin Terdiri Dari 6 Digit Hanya Angka"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                            />
                            <span className="text-danger">{Msg.pin}</span>
                        </div>
                        
                        <div className="form-group mb-3">
                            <label className="mb-2">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Masukkan Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="text-danger">{Msg.password}</span>
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-2">Password Confirmation:</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Masukkan Password"
                                value={password_confirmation}
                                onChange={(e) => setPassword_confirmation(e.target.value)}
                            />
                            <span className="text-danger">{Msg.password}</span>
                        </div>
                        <button
                            type="button"
                            onClick={submitForm}
                            className="btn btn-primary mt-4"
                        >
                            Register
                        </button>
                        <span className="text-danger">{Msg.messages}</span>
                        <span className="mt-4" style={{fontSize : '15px', textAlign : 'center', fontFamily : 'Open Sans' , color: '#eaeaea'}}>Sudah Punya Akun ?, Masuk <a href="/login">Di sini</a></span>
                    </div>
                </div>
            </div>
        </Parallax>
    );
}
