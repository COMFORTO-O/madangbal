import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
    return (
        <div>
            {/* 네브바 */}
            <Navbar />

            <div className="w-full h-screen flex justify-center items-center">
                <div className="mb-[100px] max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md">
                    <h1 className="text-3xl font-bold mb-4">
                        개인정보 처리방침
                    </h1>
                    <p className="mb-6">
                        본 웹사이트는 사용자 여러분의 개인정보를 중요하게
                        생각하며, 이를 보호하기 위해 최선을 다하고 있습니다. 이
                        개인정보 처리방침은 개인정보를 어떻게 수집, 이용, 보관,
                        처리하는지 설명합니다.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">
                        1. 수집하는 개인정보의 항목
                    </h2>
                    <p className="mb-6">
                        회원가입, 상담, 서비스 신청 등을 위해 다음과 같은
                        개인정보를 수집할 수 있습니다:
                        <ul className="list-disc ml-6">
                            <li>이름, 이메일 주소, 전화번호</li>
                            <li>서비스 이용 기록, 접속 로그, 쿠키</li>
                        </ul>
                    </p>

                    <h2 className="text-xl font-semibold mb-2">
                        2. 개인정보의 수집 및 이용 목적
                    </h2>
                    <p className="mb-6">
                        수집된 개인정보는 다음의 목적으로 사용됩니다:
                        <ul className="list-disc ml-6">
                            <li>서비스 제공 및 운영</li>
                            <li>고객 문의 처리 및 문제 해결</li>
                            <li>서비스 개선을 위한 통계 분석</li>
                        </ul>
                    </p>

                    <h2 className="text-xl font-semibold mb-2">
                        3. 개인정보의 보유 및 이용 기간
                    </h2>
                    <p className="mb-6">
                        개인정보는 수집 및 이용 목적이 달성된 후 지체 없이
                        파기됩니다. 단, 관련 법령에 따라 일정 기간 보관이 필요할
                        경우 해당 기간 동안 보유할 수 있습니다.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">
                        4. 개인정보의 제3자 제공
                    </h2>
                    <p className="mb-6">
                        원칙적으로 개인정보를 외부에 제공하지 않습니다. 다만,
                        법령에 의거해 제공이 필요할 경우에는 예외로 합니다.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">
                        5. 개인정보 보호를 위한 노력
                    </h2>
                    <p className="mb-6">
                        당사는 개인정보 보호를 위해 다양한 보안 조치를 시행하고
                        있습니다. 개인정보 접근 제한, 암호화, 방화벽 설치 등이
                        그 예입니다.
                    </p>

                    <p className="mt-6">
                        본 방침은 {new Date().getFullYear()}년{" "}
                        {new Date().getMonth() + 1}월 {new Date().getDate()}
                        일자로 시행됩니다.
                    </p>
                </div>
            </div>

            {/* 푸터 */}
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
