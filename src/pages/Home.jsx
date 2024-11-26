import React from "react";
import { Link } from "react-router-dom";

import firstBackgroundImage from "../assets/homeBackgroundImage/firstBackgroundImage.jpg";
import secondBackgroundImage from "../assets/homeBackgroundImage/secondBackgroundImage.jpg";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    const isLoggedIn = false; // 로그인 상태 관리

    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} />

            {/* 첫 번째 배경 섹션 */}
            <div
                className="relative min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${firstBackgroundImage})` }}
            >
                <div className="flex flex-col items-center justify-center h-screen">
                    <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">
                        오타, 수정 걱정 없는 명함은?
                    </h2>
                    <h2 className="text-6xl mt-2 font-bold mb-6 drop-shadow-lg">
                        <span className="text-blue-600">마당발</span>에서
                        무료로!
                    </h2>

                    <Link to="/create-card">
                        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-xl px-8 py-4 rounded-full shadow-lg transition duration-300">
                            명함 만들기
                        </button>
                    </Link>
                </div>
            </div>

            {/* 두 번째 배경 섹션 */}
            <div
                className="relative min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${secondBackgroundImage})` }}
            >
                <div className="flex flex-col items-center justify-center h-screen">
                    <h2 className="text-5xl font-bold mb-4 drop-shadow-lg ">
                        추천된 명함 디자인을 확인해보세요.
                    </h2>

                    <Link to="">
                        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-xl px-8 py-4 rounded-full shadow-lg transition duration-300">
                            보러 가기
                        </button>
                    </Link>
                </div>
            </div>

            {/* 푸터 */}
            <Footer />
        </div>
    );
};

export default Home;
