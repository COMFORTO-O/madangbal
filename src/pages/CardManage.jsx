import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import logo from "../assets/cardInfoImg/soonchunghyangunivlogo1.jpg";

const CreateCard = () => {
    const [plusButtonClick, setPlusButtonClick] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);

    const [arrowClick, setArrowClick] = useState(0);

    // Slider 설정
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUploadedImage(imageUrl); // 이미지 URL 저장
        }
    };

    return (
        <div>
            <Navbar />
            {/* 카드 생성 페이지 컨테이너 */}
            <div className="w-screen min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-screen h-screen flex items-center justify-center">
                    <div className="flex flex-col">
                        {/* plus 버튼을 클릭 시 true, 초기 상태는 false */}

                        <div className="flex flex-row">
                            <button
                                disabled={arrowClick === 0 ? true : false}
                                className={`${
                                    arrowClick === 0
                                        ? "mr-10 text-5xl text-gray-300 font-bold"
                                        : "mr-10 text-5xl text-gray-500 font-bold"
                                }`}
                                onClick={() => setArrowClick(arrowClick - 1)}
                            >
                                {"<"}
                            </button>

                            {arrowClick === 0 ? (
                                <div className="w-[1500px] h-[700px] flex flex-col justify-start bg-white border-2 border-gray-300 shadow-md shadow-gray-500">
                                    {/* 이미지 삽입 */}
                                    <div className="w-[400px] h-[500px] flex justify-center items-center bg-gray-300">
                                        <img src={logo} />

                                        {/* {uploadedImage ? (
                                            <img
                                                src={uploadedImage}
                                                alt="Uploaded"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <button
                                                className="w-[100px] h-[100px] flex items-center justify-center bg-gray-400 text-white rounded-full hover:bg-gray-500 transition duration-300"
                                                onClick={() =>
                                                    document
                                                        .getElementById(
                                                            "fileInput"
                                                        )
                                                        .click()
                                                }
                                            >
                                                <span className="mb-[12px] text-[50px] font-bold">
                                                    +
                                                </span>
                                            </button>
                                        )}
                                        <input
                                            id="fileInput"
                                            type="file"
                                            className="hidden"
                                            onChange={handleImageUpload} // 파일 선택 시 handleImageUpload 호출
                                        /> */}
                                    </div>
                                    {/* 텍스트 삽입 */}
                                    <div className="w-full h-[50%] flex flex-col">
                                        <div className="flex justify-end">
                                            <div className="w-[20%] h-[60px] my-2 mr-20 text-4xl  text-center">
                                                학생
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="w-[20%] h-[60px] my-2 mr-20 text-5xl  text-center">
                                                정형진
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="w-[30%] h-[60px] my-2 mr-20 text-5xl  text-center">
                                                T 010-0000-0000
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="w-[30%] h-[60px] my-2 mr-20 text-xl  text-center">
                                                충남 아산시 순천향로22
                                                순천향대학교 창업동아리실
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-[1500px] h-[700px] flex flex-col justify-start bg-white border-2 border-gray-300 shadow-md shadow-gray-500">
                                    {/* 텍스트 삽입 */}
                                    <div className="w-full h-full flex flex-col">
                                        <div className="flex justify-end">
                                            <div className="w-[90%] h-[60px] mt-5 mb-2 mr-20 text-center text-3xl ">
                                                테스트중입니다.
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="w-[90%] h-[60px] mt-5 mb-2 mr-20 text-center text-3xl ">
                                                테스트중입니다.
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="w-[90%] h-[60px] mt-5 mb-2 mr-20 text-center text-3xl ">
                                                테스트중입니다.
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="w-[90%] h-[60px] mt-5 mb-2 mr-20 text-center text-3xl ">
                                                테스트중입니다.
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="w-[90%] h-[60px] mt-5 mb-2 mr-20 text-center text-3xl ">
                                                테스트중입니다.
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="w-[90%] h-[60px] mt-5 mb-2 mr-20 text-center text-3xl ">
                                                테스트중입니다.
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="w-[90%] h-[60px] mt-5 mb-2 mr-20 text-center text-3xl ">
                                                테스트중입니다.
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="w-[90%] h-[60px] mt-5 mb-2 mr-20 text-center text-3xl ">
                                                테스트중입니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button
                                disabled={arrowClick !== 0 ? true : false}
                                className={`${
                                    arrowClick === 0
                                        ? "ml-10 text-5xl text-gray-500 font-bold"
                                        : "ml-10 text-5xl text-gray-300 font-bold"
                                }`}
                                onClick={() => setArrowClick(arrowClick + 1)}
                            >
                                {">"}
                            </button>
                        </div>

                        {plusButtonClick === true ? (
                            <div className="flex justify-center mt-[100px]">
                                <button className="w-[200px] mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-8 py-4 shadow-lg transition duration-300">
                                    명함 만들기
                                </button>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CreateCard;
