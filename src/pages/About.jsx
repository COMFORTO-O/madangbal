import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* 네브바 */}
            <Navbar />

            <div className="flex-grow mt-10 max-w-4xl mx-auto p-6 bg-white">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    마당발 소개
                </h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        우리는 어떤 플랫폼인가요?
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        마당발은 명함을 디지털로 손쉽게 제작하고 관리할 수 있는
                        플랫폼입니다. 이곳에서 사용자는 직접 명함을 디자인하고,
                        실시간으로 수정 및 업데이트가 가능하며, 이를 통해 더
                        이상 명함의 수정, 인쇄 등의 번거로움 없이 효율적으로
                        명함을 관리할 수 있습니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        왜 마당발을 사용해야 하나요?
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        마당발을 사용하면 전통적인 종이 명함이 갖는 여러 단점을
                        해결할 수 있습니다. 다음은 우리가 제공하는 주요
                        혜택입니다:
                    </p>
                    <ul className="list-disc list-inside mt-4 text-gray-700">
                        <li>
                            디지털 명함으로 언제 어디서나 명함을 수정 및 관리
                        </li>
                        <li>실시간 명함 공유로 비즈니스 네트워킹 강화</li>
                        <li>친환경적인 명함 솔루션으로 종이 낭비 줄이기</li>
                        <li>다양한 명함 디자인 템플릿 제공</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        플랫폼의 주요 기능
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        마당발에서는 명함 제작 외에도 여러 기능을 통해 사용자의
                        경험을 최적화하고 있습니다:
                    </p>
                    <ul className="list-disc list-inside mt-4 text-gray-700">
                        <li>맞춤형 명함 디자인 도구</li>
                        <li>QR 코드를 통해 디지털 명함을 손쉽게 공유</li>
                        <li>다양한 명함 스타일 및 폰트 선택 가능</li>
                        <li>명함을 클라우드에 저장하여 언제든 접근 가능</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        마당발이 제공하는 가치는?
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        마당발은 개인과 기업 모두를 위한 플랫폼입니다. 사용자는
                        명함을 보다 쉽고 빠르게 관리함으로써 시간과 비용을
                        절감할 수 있으며, 더 나아가 비즈니스 네트워킹을 더욱
                        효과적으로 관리할 수 있습니다. 디지털 명함을 통해 더욱
                        유연하고 혁신적인 비즈니스 환경을 경험하세요.
                    </p>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default About;
