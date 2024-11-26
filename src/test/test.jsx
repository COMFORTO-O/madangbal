import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import soonchunghyangunivlogo1 from "../assets/cardInfoImg/soonchunghyangunivlogo1.jpg";
import soonchunghyangunivlogo2 from "../assets/cardInfoImg/soonchunghyangunivlogo2.jpg";
import ictlogo from "../assets/cardInfoImg/ictlogo.png";
import nrflogo from "../assets/cardInfoImg/nrflogo.png";
import kiisclogo from "../assets/cardInfoImg/kiisclogo.png";
import msiplogo from "../assets/cardInfoImg/msiplogo.png";
import neclogo from "../assets/cardInfoImg/neclogo.png";
import kepcologo from "../assets/cardInfoImg/kepcologo.png";
import ksiilogo from "../assets/cardInfoImg/ksiilogo.png";
import ieielogo from "../assets/cardInfoImg/ieielogo.png";
import samsunglogo from "../assets/cardInfoImg/samsunglogo.jpg";
import purdueunivlogo from "../assets/cardInfoImg/purdueunivlogo.png";
import arizonastateunivlogo from "../assets/cardInfoImg/arizonastateunivlogo.png";

const CreateCard = () => {
    const Wrapper = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const SliderContainer = styled.div`
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);

        /* PC 스타일 */
        @media (min-width: 1921px) {
            width: 1820px;
            height: 900px;
        }
        @media (max-width: 1920px) {
            width: 1620px;
            height: 760px;
        }
        @media (max-width: 1820px) {
            width: 1520px;
            height: 710px;
        }
        @media (max-width: 1720px) {
            width: 1420px;
            height: 660px;
        }
        @media (max-width: 1620px) {
            width: 1320px;
            height: 610px;
        }
        @media (max-width: 1520px) {
            width: 1220px;
            height: 560px;
        }
        @media (max-width: 1420px) {
            width: 1120px;
            height: 510px;
        }
        @media (max-width: 1320px) {
            width: 1020px;
            height: 460px;
        }
        @media (max-width: 1220px) {
            width: 920px;
            height: 410px;
        }
        @media (max-width: 1120px) {
            width: 820px;
            height: 360px;
        }

        /* 태블릿 스타일 */
        @media (max-width: 1024px) {
            width: calc(100vh - 15vh);
            height: calc(100vw - 20vw);
            transform: rotate(90deg);
        }

        /* 모바일 스타일 */
        @media (max-width: 768px) {
            width: calc(100vh - 15vh);
            height: calc(100vw - 20vw);
            transform: rotate(90deg);
        }

        /* 작은 모바일 스타일 */
        @media (max-width: 480px) {
            width: calc(100vh - 15vh);
            height: calc(100vw - 20vw);
            transform: rotate(90deg);
        }
    `;

    const Slide = styled.div`
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        background-color: white;

        /* PC 스타일 */
        @media (min-width: 1921px) {
            width: 1820px;
            height: 900px;
        }
        @media (max-width: 1920px) {
            width: 1620px;
            height: 760px;
        }
        @media (max-width: 1820px) {
            width: 1520px;
            height: 710px;
        }
        @media (max-width: 1720px) {
            width: 1420px;
            height: 660px;
        }
        @media (max-width: 1620px) {
            width: 1320px;
            height: 610px;
        }
        @media (max-width: 1520px) {
            width: 1220px;
            height: 560px;
        }
        @media (max-width: 1420px) {
            width: 1120px;
            height: 510px;
        }
        @media (max-width: 1320px) {
            width: 1020px;
            height: 460px;
        }
        @media (max-width: 1220px) {
            width: 920px;
            height: 410px;
        }
        @media (max-width: 1120px) {
            width: 820px;
            height: 360px;
        }

        /* 태블릿 스타일 */
        @media (max-width: 1024px) {
            width: calc(100vh - 15vh);
            height: calc(100vw - 20vw);
        }

        /* 모바일 스타일 */
        @media (max-width: 768px) {
            width: calc(100vh - 15vh);
            height: calc(100vw - 20vw);
        }

        /* 작은 모바일 스타일 */
        @media (max-width: 480px) {
            width: calc(100vh - 15vh);
            height: calc(100vw - 20vw);
        }
    `;

    const Logo = styled.img`
        width: 20%;
        height: auto;
        position: absolute;
        top: 5%;
        left: 5%;
    `;

    const MainInfoContainer = styled.div`
        position: absolute;
        bottom: 10%;
        right: 10%;
        text-align: right;

        & > div {
            margin-bottom: 0.5%;

            &:first-child {
                font-size: 2vw; /* 이름을 더 크게 */
                font-weight: bold;

                @media (max-width: 768px) {
                    font-size: 5vw;
                }

                @media (max-width: 480px) {
                    font-size: 4vw;
                }
            }

            &:not(:first-child) {
                font-size: 1.5vw; /* 다른 텍스트를 작게 */

                @media (max-width: 768px) {
                    font-size: 5vw;
                }

                @media (max-width: 480px) {
                    font-size: 4vw;
                }
            }

            & > div:last-child {
                margin-bottom: 0; /* 마지막 요소에는 margin-bottom 제거 */
            }
        }
    `;

    const SubInfoContainer = styled.div`
        position: absolute;

        top: 1%;
        bottom: 2%;
        left: 3%;
        text-align: left;

        & > div {
            font-size: 1.2vh;

            @media (max-width: 768px) {
                font-size: 1.1vh;
            }

            @media (max-width: 480px) {
                font-size: 1.1vh;
            }
        }

        & > div > span {
            margin-left: 1%;
        }

        & > div > img {
            display: inline-block;

            width: 9%;
            height: 9%;
        }
    `;

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        touchThreshold: 10,
    };

    return (
        <div>
            <Navbar />

            <div className="w-full h-full flex justify-center items-center min-h-screen mt-10 mb-10">
                <Wrapper>
                    <SliderContainer>
                        <Slider {...settings}>
                            <Slide>
                                <div>
                                    <Logo
                                        src={soonchunghyangunivlogo1}
                                        alt="SoonChungHyang Univ Logo1"
                                    />
                                    <MainInfoContainer>
                                        <div>홍 길 동</div>
                                        <div>000대학교</div>
                                        <div>컴퓨터공학과</div>
                                    </MainInfoContainer>
                                </div>
                            </Slide>
                            <Slide>
                                <div>
                                    <SubInfoContainer>
                                        <div>
                                            <img
                                                src={soonchunghyangunivlogo2}
                                                alt="SoonChungHyang Univ Logo2"
                                            />
                                            <span>
                                                순천향대학교 SW융합대학 학장
                                            </span>
                                        </div>
                                        <div>
                                            <img
                                                src={soonchunghyangunivlogo2}
                                                alt="SoonChungHyang Univ Logo2"
                                            />
                                            <span>
                                                순천향대학교 신뢰성평가센터
                                                (KOLAS) 센터장
                                            </span>
                                        </div>
                                        <div>
                                            <img
                                                src={soonchunghyangunivlogo2}
                                                alt="SoonChungHyang Univ Log2"
                                            />
                                            <span>
                                                순천향대학교
                                                보안안전융합기술사업화센터
                                                센터장
                                            </span>
                                        </div>
                                        <div>
                                            <img
                                                src={soonchunghyangunivlogo2}
                                                alt="SoonChungHyang Univ Log2"
                                            />
                                            <span>
                                                순천향대학교IoT보안연구센터
                                                센터장
                                            </span>
                                        </div>
                                        <div>
                                            <img src={ictlogo} alt="ICT Logo" />
                                            <span>
                                                과기정통부
                                                융합보안핵심인재양성사업
                                                (자율주행차 부문) 책임교수
                                            </span>
                                        </div>
                                        <div>
                                            <img src={nrflogo} alt="NRF Logo" />
                                            <span>
                                                연구재단 BRL사업 (상황인지기반
                                                분산임베디드 SW보증) 책임교수
                                            </span>
                                        </div>
                                        <div>
                                            <img
                                                src={kiisclogo}
                                                alt="KIISC Logo"
                                            />
                                            <span>
                                                한국정보보호학회
                                                취약점분석연구회 위원장
                                            </span>
                                        </div>
                                        <div>
                                            <img
                                                src={kiisclogo}
                                                alt="KIISC Logo"
                                            />
                                            <span>
                                                한국정보보호학회 상임부회장
                                            </span>
                                        </div>
                                        <div>
                                            <img
                                                src={msiplogo}
                                                alt="MSIP Logo"
                                            />
                                            <span>
                                                미래창조과학부
                                                정보보호중장기발전전략 기획위원
                                            </span>
                                        </div>
                                        <div>
                                            <img
                                                src={msiplogo}
                                                alt="MSIP Logo"
                                            />
                                            <span>
                                                미래창조과학부 표준화전략맵
                                                정보보호분야 전문 집필위원
                                            </span>
                                        </div>
                                        <div>
                                            <img src={ictlogo} alt="ICT Logo" />
                                            <span>
                                                ICT 기술표준기획전담반 위원
                                            </span>
                                        </div>
                                        <div>
                                            <img src={neclogo} alt="NEC Logo" />
                                            <span>
                                                대한민국정부 중앙선거관리위원회
                                                보안자문위원
                                            </span>
                                        </div>
                                        <div>
                                            <img
                                                src={kepcologo}
                                                alt="KEPCO Logo"
                                            />
                                            <span>
                                                한국전력 보안자문위원회 위원장
                                            </span>
                                        </div>
                                        <div>
                                            <img
                                                src={ksiilogo}
                                                alt="KSII Logo"
                                            />
                                            <span>한국인터넷정보학회 이사</span>
                                        </div>
                                        <div>
                                            <img
                                                src={ieielogo}
                                                alt="IEIE Logo"
                                            />
                                            <span>대한전자공학회 이사</span>
                                        </div>
                                        <div>
                                            <img
                                                src={samsunglogo}
                                                alt="SAMSUNG Logo"
                                            />
                                            <span>
                                                삼성전자 첨단기술연수소강사
                                            </span>
                                        </div>
                                        <div>
                                            <img
                                                src={purdueunivlogo}
                                                alt="PURDUE Univ Logo"
                                            />
                                            <span>(미)퍼듀대학교 객원교수</span>
                                        </div>
                                        <div>
                                            <img
                                                src={arizonastateunivlogo}
                                                alt="Arizonal State Univ Logo"
                                            />
                                            <span>
                                                (미)아리조나주립대 초빙연구원
                                            </span>
                                        </div>
                                    </SubInfoContainer>
                                </div>
                            </Slide>
                        </Slider>
                    </SliderContainer>
                </Wrapper>
            </div>
            <Footer />
        </div>
    );
};

export default CreateCard;
