import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfService = () => {
    return (
        <div>
            {/* 네브바 */}
            <Navbar />

            <div className="w-full h-screen flex justify-center items-center">
                <div className="mb-[200px] max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md">
                    <h1 className="text-3xl font-bold mb-4">이용약관</h1>

                    <h2 className="text-xl font-semibold mb-2">1. 목적</h2>
                    <p className="mb-6">
                        본 약관은 사용자가 웹사이트를 이용함에 있어 당사와
                        사용자 간의 권리, 의무 및 책임 사항을 규정함을 목적으로
                        합니다.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">
                        2. 이용자의 의무
                    </h2>
                    <p className="mb-6">
                        사용자는 다음 행위를 해서는 안 됩니다:
                        <ul className="list-disc ml-6">
                            <li>타인의 정보 도용</li>
                            <li>불법적인 정보 전송</li>
                            <li>서비스 운영 방해</li>
                        </ul>
                    </p>

                    <h2 className="text-xl font-semibold mb-2">
                        3. 서비스 제공
                    </h2>
                    <p className="mb-6">
                        당사는 이용자에게 다음과 같은 서비스를 제공합니다:
                        <ul className="list-disc ml-6">
                            <li>명함 제작 서비스</li>
                            <li>사용자 계정 관리 및 고객 지원</li>
                        </ul>
                    </p>

                    <h2 className="text-xl font-semibold mb-2">
                        4. 계약 해지 및 이용 제한
                    </h2>
                    <p className="mb-6">
                        사용자가 본 약관을 위반할 경우, 당사는 서비스 이용을
                        제한하거나 계약을 해지할 수 있습니다.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">
                        5. 책임의 제한
                    </h2>
                    <p className="mb-6">
                        당사는 천재지변, 기술적 오류 등 당사의 통제 범위를
                        벗어난 사유로 발생한 서비스 중단 및 손해에 대해 책임을
                        지지 않습니다.
                    </p>

                    <p className="mt-6">
                        본 약관은 {new Date().getFullYear()}년{" "}
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

export default TermsOfService;
