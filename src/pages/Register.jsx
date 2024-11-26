// Register.js
import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
    return (
        <div>
            {/* 네브바 */}
            <Navbar />

            <div className="flex flex-col items-center justify-center min-h-screen mt-10 mb-10 bg-gray-50">
                <div className="bg-white p-10 rounded-md shadow-md w-96">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        회원가입
                    </h2>

                    {/* 이름 입력폼 */}
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700">
                            이름
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-3 border border-gray-300 rounded-md w-full"
                            placeholder="이름을 입력하세요"
                            required
                        />
                    </div>

                    {/* 연락처 입력폼 */}
                    <div className="mb-6">
                        <label className="flex justify-between text-lg font-medium text-gray-700">
                            연락처
                            <button className="text-sm">인증하기</button>
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-3 border border-gray-300 rounded-md w-full"
                            placeholder="연락처를 입력하세요"
                            required
                        />
                    </div>

                    {/* 인증번호 입력폼 */}
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700">
                            인증번호
                        </label>
                        <div className="">
                            <div className="border border-gray-300 rounded-md mt-1 pl-3 py-3">
                                <input
                                    type="text"
                                    className="w-[80%] focus:outline-none "
                                    placeholder="인증번호를 입력하세요"
                                    required
                                />
                                <button className="w-[20%]">확인</button>
                            </div>
                        </div>
                    </div>

                    {/* 이메일 입력폼 */}
                    <div className="mb-6">
                        <label className="flex justify-between text-lg font-medium text-gray-700">
                            이메일
                            <button className="text-sm">인증하기</button>
                        </label>
                        <input
                            type="email"
                            className="mt-1 p-3 border border-gray-300 rounded-md w-full"
                            placeholder="이메일을 입력하세요"
                            required
                        />
                    </div>

                    {/* 비밀번호 입력폼 */}
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700">
                            비밀번호
                        </label>
                        <input
                            type="password"
                            className="mt-1 p-3 border border-gray-300 rounded-md w-full"
                            placeholder="비밀번호를 입력하세요"
                            required
                        />
                    </div>

                    {/* 비밀번호 확인 입력폼 */}
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700">
                            비밀번호 확인
                        </label>
                        <input
                            type="password"
                            className="mt-1 p-3 border border-gray-300 rounded-md w-full"
                            placeholder="비밀번호를 다시 입력하세요"
                            required
                        />
                    </div>

                    {/* 회원가입 버튼 */}
                    <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
                        회원가입
                    </button>

                    {/* 로그인 안내 */}
                    <p className="mt-6 text-center">
                        이미 계정이 있으신가요?
                        <a
                            href="/login"
                            className="text-blue-500 hover:underline"
                        >
                            {" "}
                            로그인하기
                        </a>
                    </p>
                </div>
            </div>

            {/* 푸터 */}
            <Footer />
        </div>
    );
};

export default Register;
