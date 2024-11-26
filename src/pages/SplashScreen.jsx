import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import madanbalLogo from "../assets/bi/madangbalLogo.jpg";

const SplashScreen = () => {
    const [dots, setDots] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + "." : ""));
        }, 500);
        return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 해제
    }, []);

    const handleBGClick = () => {
        navigate("/");
    };

    return (
        <div
            className="flex items-center justify-center h-screen"
            onClick={handleBGClick}
        >
            <div className="text-center">
                {/* BI 이미지 */}
                <img
                    src={madanbalLogo}
                    alt="Web BI"
                    className="w-100 h-48 mb-4 mx-auto"
                />
                {/* 로딩 메시지 */}
                <h1 className="text-4xl font-bold">당신의 명함을 스마트하게</h1>
                <p className="text-lg mt-5">
                    로딩 중<span>{dots}</span>
                </p>
            </div>
        </div>
    );
};

export default SplashScreen;
