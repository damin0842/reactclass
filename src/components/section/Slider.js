import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SlideInfo = () => {
  return (
    <div className="desc">
      <span>{slideText[0].type}</span>
      <h3>{slideText[0].title}</h3>
      <p>{slideText[0].desc}</p>
      <div className="btn">
        <a href="/">{slideText[0].btnMore}</a>
        <a href="/" className="black">
          {slideText[0].btnDesc}
        </a>
      </div>
    </div>
  );
};

const slideText = [
  {
    type: "NAVER WORKS",
    title: "네이버웍스 시작을 위한 첫 단계!",
    desc: "상품 신청부터 도메인 소유권 확인/구성원 추가/ 그룹 만들기까지 무료 셋업 지원",
    btnLink: "/",
    btnMore: "자세히 보기",
    btnDesc: "정보 보기",
  },
  {
    type: "NAVER WORKS",
    title: "네이버웍스 시작을 위한 첫 단계!",
    desc: "상품 신청부터 도메인 소유권 확인/구성원 추가/ 그룹 만들기까지 무료 셋업 지원",
    btnLink: "/",
    btnMore: "자세히 보기",
    btnDesc: "정보 보기",
  },
  {
    type: "NAVER WORKS",
    title: "네이버웍스 시작을 위한 첫 단계!",
    desc: "상품 신청부터 도메인 소유권 확인/구성원 추가/ 그룹 만들기까지 무료 셋업 지원",
    btnLink: "/",
    btnMore: "자세히 보기",
    btnDesc: "정보 보기",
  },
];
function Slider({ attr }) {
  return (
    <section id="sliderType" className={`slider__wrap ${attr[0]}`}>
      <div className="slider__inner">
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper section"
        >
          <SwiperSlide>
            <SlideInfo />
          </SwiperSlide>
          <SwiperSlide>
            <SlideInfo />
          </SwiperSlide>
          <SwiperSlide>
            <SlideInfo />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
