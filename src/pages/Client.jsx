import styles from "./Client.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import client1 from "../assets/imgs/clients-1.png";
import client2 from "../assets/imgs/clients-2.png";
import client3 from "../assets/imgs/clients-3.png";
import client4 from "../assets/imgs/clients-4.png";
import client5 from "../assets/imgs/clients-5.png";
import client6 from "../assets/imgs/clients-6.png";

export default function Client() {
  const clients = [client1, client2, client3, client4, client5, client6];

  return (
    <>
      <div className={styles.cont}>
        <div className={styles.client}>
          <div className={styles.head}>
            <h1>Our Client</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took.
            </p>
          </div>

          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            loop={false}
            breakpoints={{
              577: { slidesPerView: 2, slidesPerGroup: 2 },
              769: { slidesPerView: 3, slidesPerGroup: 3 },
              1025: { slidesPerView: 4, slidesPerGroup: 4, pagination: false },
            }}
            className={styles.mySwiper}
          >
            {clients.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`client ${i + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className={styles.hero}>
        <div className={styles.text}>
          <h1>Simple is good. We turn ideas into works of art.</h1>
          <p>
            Since our foundation in 2005 our goal has been to use digital
            technology to create experiences.
          </p>
          <button className={styles.btn}>
            <h6>LET'S WORK TOGETHER</h6>
            <div className={styles.icon}>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
