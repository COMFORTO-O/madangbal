import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
    return (
        <div>
            {/* 네브바 */}
            <Navbar />

            <div className="flex items-center justify-center min-h-screen mt-10 mb-10 bg-gray-50">
                <div className="bg-white p-10 rounded-md shadow-md w-96">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        로그인
                    </h2>

                    {/* 이메일 입력폼 */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            이메일
                        </label>
                        <input
                            type="email"
                            className="mt-1 p-3 border border-gray-300 rounded-md w-full"
                            placeholder="이메일을 입력하세요"
                            required
                        />
                    </div>
                    {/* 패스워드 입력폼 */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            비밀번호
                        </label>
                        <input
                            type="password"
                            className="mt-1 p-3 border border-gray-300 rounded-md w-full"
                            placeholder="비밀번호를 입력하세요"
                            required
                        />
                    </div>
                    {/* 로그인 버튼 */}
                    <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
                        로그인
                    </button>
                    {/* 가입하기 안내 */}
                    <p className="mt-6 text-center">
                        아직 회원이 아니신가요?
                        <a
                            href="/register"
                            className="text-blue-500 hover:underline"
                        >
                            가입하기
                        </a>
                    </p>
                    {/* SNS 로그인 */}
                    <div className="mt-8">
                        <div className="flex flex-col justify-center space-y-4 mt-4">
                            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
                                네이버로 로그인하기
                            </button>
                            <button className="bg-yellow-300 text-white px-6 py-3 rounded-md hover:bg-yellow-700">
                                카카오로 로그인하기
                            </button>
                            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700">
                                구글로 로그인하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 푸터 */}
            <Footer />
        </div>
    );
};

export default Login;
