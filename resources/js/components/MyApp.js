import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Download from "./pages/Download";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Character from "./pages/Character";
import UpdateProfile from "./pages/UpdateProfile";
import Recharge from "./pages/Recharge";
import Navbar from "./Navigasibar";
import Footer from "./Footer";

function MyApp() {

    return (
        <>
        <div className='pageBG'>

        <Navbar />

        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/news" element={<News /> } />
            <Route path="/contact" element={<Contact /> } />
            <Route path="/download" element={<Download /> } />
            <Route path="/register" element={<Register /> } />
            <Route path="/signin" element={<Login /> } />
            <Route path="/dashboard" element={<Dashboard /> } />
            <Route path="/dashboard/profile" element={<Dashboard /> } />
            <Route path="/dashboard/character" element={<Character /> } />
            <Route path="dashboard/profile/edit/:id" element={<UpdateProfile /> } />
            <Route path="/dashboard/topup" element={<Recharge /> } />
        </Routes>
        <Footer />
        </div>

        </>
    );
}

export default MyApp;

if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <MyApp />
        </BrowserRouter>
            , document.getElementById('app'));
}