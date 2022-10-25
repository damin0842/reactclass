import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  return (
    <div className="slider__inner">
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper section"
      >
        <SwiperSlide>
          <div className="desc">
            <span>NAVER WORKS</span>
            <h3>
              네이버웍스 <br />
              시작을 위한 첫 단계!
            </h3>
            <p>
              상품 신청부터 도메인 소유권 확인/구성원 추가/ <br />
              그룹 만들기까지 무료 셋업 지원
            </p>
            <div className="btn">
              <a href="/">자세히 보기</a>
              <a href="/" className="black">
                정보 보기
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="desc">
            <span>NAVER WORKS</span>
            <h3>
              네이버웍스 <br />
              시작을 위한 첫 단계!
            </h3>
            <p>
              상품 신청부터 도메인 소유권 확인/구성원 추가/ <br />
              그룹 만들기까지 무료 셋업 지원
            </p>
            <div className="btn">
              <a href="/">자세히 보기</a>
              <a href="/" className="black">
                정보 보기
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="desc">
            <span>NAVER WORKS</span>
            <h3>
              네이버웍스 <br />
              시작을 위한 첫 단계!
            </h3>
            <p>
              상품 신청부터 도메인 소유권 확인/구성원 추가/ <br />
              그룹 만들기까지 무료 셋업 지원
            </p>
            <div className="btn">
              <a href="/">자세히 보기</a>
              <a href="/" className="black">
                정보 보기
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
