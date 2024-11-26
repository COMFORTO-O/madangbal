import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import SplashScreen from "./pages/SplashScreen.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PaymentOrder from "./pages/PaymentOrder.jsx";
import Contact from "./pages/Contact.jsx";
import CreateCard from "./pages/CreateCard.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import MyPage from "./pages/MyPage.jsx";

import CardManage from "./pages/CardManage.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* SplashScreen */}
                <Route path="/splash-screen" element={<SplashScreen />} />

                {/* Home, Defalut page */}
                <Route exact path="/" element={<Home />} />

                {/* About */}
                <Route path="/about" element={<About />} />
                {/* PaymentOrder */}
                <Route path="/payment-order" element={<PaymentOrder />} />
                {/* Contact */}
                <Route path="/contact" element={<Contact />} />
                {/* CreateCard */}
                <Route path="/create-card" element={<CreateCard />} />

                {/* Login */}
                <Route path="/login" element={<Login />} />
                {/* Register */}
                <Route path="/signup" element={<Register />} />

                {/* createCard */}
                <Route path="/create-card" element={<CreateCard />} />
                {/* Recommend */}
                <Route path="/recommend" element={<CreateCard />} />

                {/* PrivacyPolicy */}
                <Route path="/privacy" element={<PrivacyPolicy />} />
                {/* TermsOfService */}
                <Route path="/terms" element={<TermsOfService />} />

                {/* MyPage */}
                <Route path="/my-page" element={<MyPage />} />

                {/* CardManage */}
                <Route path="/card-manage" element={<CardManage />} />
            </Routes>
        </BrowserRouter>
    );
}
