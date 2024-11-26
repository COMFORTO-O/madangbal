// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
    const [nowPage, setNowPage] = useState("");

    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* 로고 텍스트 */}
                <Link to="/" onClick={() => setNowPage("/")}>
                    <span className="text-3xl font-bold">마당발</span>
                </Link>
                {/* 탭 메뉴 */}
                <div className="flex space-x-20 justify-center items-center">
                    <Link
                        to="/about"
                        className={` ${
                            nowPage === "about"
                                ? "text-blue-600"
                                : "text-gray-600"
                        } text-xl font-bold  rounded-md hover:text-blue-500`}
                        onClick={() => setNowPage("about")}
                    >
                        소개
                    </Link>
                    <Link
                        to="/paymentOrder"
                        className={` ${
                            nowPage === "payment-order"
                                ? "text-blue-600"
                                : "text-gray-600"
                        } text-xl font-bold rounded-md hover:text-blue-500`}
                        onClick={() => setNowPage("paymentOrder")}
                    >
                        결제/주문
                    </Link>
                    <Link
                        to="/contact"
                        className={` ${
                            nowPage === "contact"
                                ? "text-blue-600"
                                : "text-gray-600"
                        } text-xl font-bold  rounded-md hover:text-blue-500`}
                        onClick={() => setNowPage("contact")}
                    >
                        고객센터
                    </Link>
                    <Link
                        to="/create-card"
                        className={` ${
                            nowPage === "createCard"
                                ? "text-blue-600"
                                : "text-gray-600"
                        } text-xl font-bold  rounded-md hover:text-blue-500`}
                        onClick={() => setNowPage("createCard")}
                    >
                        명함 만들기
                    </Link>
                </div>
                {/* 로그인 상태에 따른 메뉴 */}
                <div className="space-x-4">
                    {isLoggedIn ? (
                        <>
                            <Link to="/login" className="text-gray-700">
                                로그인
                            </Link>
                            <Link to="/signup" className="text-gray-700">
                                회원가입
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/my-page" className="text-gray-700">
                                마이페이지
                            </Link>
                            <Link to="/logout" className="text-gray-700">
                                로그아웃
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
