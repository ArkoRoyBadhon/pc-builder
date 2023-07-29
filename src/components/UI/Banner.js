import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../../styles/UI/banner.module.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import img1 from "../../assets/banner1.gif";
import img2 from "../../assets/banner2.png";
import vid from "../../assets/hardsoftnet-computer-repair-service-miami-laptop-24.png";
import Link from "next/link";
import { Button } from "antd";

const BannerSection = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`${styles["mySwiper"]}`}
      >
        <SwiperSlide className={`${styles["swiper-slide"]}`}>
          <div className={`${styles["banner-body"]}`}>
            <div>
              <h3 className={`${styles["banner-heading"]}`}>
                Buid your Dream PC with us😀
              </h3>
              <p className="">
                we are ensure you the best price and original product
              </p>
            </div>
            <Image
              style={{ width: 300 }}
              src={vid}
              width={800}
              height={800}
              alt="banner-1 img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${styles["swiper-slide"]}`}>
          <div className={`${styles["banner-body"]}`}>
            <div>
              <h3
                style={{ color: "orange" }}
                className={`${styles["banner-heading"]}`}
              >
                Flash Sales
              </h3>
              <p className="">Upto 20% discount</p>
              <Link href="/pc-builder">
                <Button
                  style={{
                    color: "black",
                    fontWeight: 600,
                    border: "1px solid orange",
                    marginTop: 20,
                  }}
                >
                  PC Builder
                </Button>
              </Link>
            </div>
            <Image
              style={{ width: 300 }}
              src={vid}
              width={800}
              height={800}
              alt="banner-1 img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${styles["swiper-slide"]}`}>
          <div className="">
            <h3 className="">Upcoming Events</h3>
            <div className={`${styles["upcoming"]}`} style={{paddingTop: 50}}>
                <div className={`${styles["upcoming-item"]}`}>Happy Eid Festival</div>
                <div className={`${styles["upcoming-item"]}`}>Happy Durga Puja Festival</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSection;
