import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import "../styled/landingpage.css";
import Logo from "../assets/crossfire.gif";
import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navigasibar() {
    const navigate = useNavigate();
    const text = "Halo, ";
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
    const logoutHanlder = async () => {
        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        //fetch Rest API
        await axios.post("https://cflegacyindonesia.herokuapp.com/api/logout").then(() => {
            //remove token from localStorage
            sessionStorage.removeItem("token");

            //redirect halaman login
            navigate("/");
        });
    };

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        width="200"
                        height="48"
                        src={Logo}
                        style={{ borderRadius: "25px" }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto m-3 gap-3">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/news">News</Nav.Link>
                        <Nav.Link href="/download">Download</Nav.Link>
                    </Nav>

                    <Nav className="ms-auto m-3 gap-3">
                        {!sessionStorage.getItem("token") ? (
                            <>
                                <Button
                                    href="/register"
                                    variant="outline-secondary"
                                >
                                    Sign Up
                                </Button>
                                {"  "}
                                <Button href="/signin" variant="primary">
                                    Login
                                </Button>
                                {"  "}
                            </>
                        ) : (
                            <><NavDropdown
                            id="nav-dropdown-dark-example"
                            title={text + user.firstname}
                            menuVariant="dark"
                          >
                            <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logoutHanlder}>LogOut</NavDropdown.Item>
                          </NavDropdown>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigasibar;
