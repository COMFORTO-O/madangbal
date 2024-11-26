import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyPage = () => {
    return (
        <div>
            <Navbar />

            <div className="min-h-screen bg-gray-100">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold mt-[100px] mb-6">
                        마이 페이지
                    </h1>

                    <Link
                        to="/card-manage"
                        className="w-[500px] h-[50px] flex justify-center items-center mt-[50px] rounded-xl bg-white text-2xl"
                    >
                        내 명함 관리
                    </Link>
                    <Link className="w-[500px] h-[50px] flex justify-center items-center mt-[10px] rounded-xl bg-white text-2xl">
                        QR코드 생성
                    </Link>
                    <Link className="w-[500px] h-[50px] flex justify-center items-center mt-[10px] rounded-xl bg-white text-2xl">
                        프로필 수정
                    </Link>
                    <Link className="w-[500px] h-[50px] flex justify-center items-center mt-[10px] rounded-xl bg-white text-2xl">
                        설정
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MyPage;
