import React, { useState } from "react";

import { Slider } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DragNDrop from "../components/DragNDrop";

export default function CreateCard() {
    // Slider 설정
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div>
            <Navbar />
            {/* 카드 생성 페이지 컨테이너 */}
            <div className="w-screen min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-screen h-screen flex items-center justify-center">
                    <div className="flex">
                        {
                            // <div className="text-4xl">
                            //     <div className="flex justify-center">
                            //         명함 사이즈를 선택해주세요.
                            //     </div>
                            //     <div className="flex justify-center items-center mt-20 gap-10">
                            //         <div className="w-[500px] h-[300px] border-2 border-black"></div>
                            //         <div className="w-[500px] h-[300px] border-2 border-black"></div>
                            //     </div>
                            // </div>
                        }
                        <DragNDrop />
                        <div className="w-full flex justify-between"></div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
