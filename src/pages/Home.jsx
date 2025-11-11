import React from "react";
import styles from "./Home.module.css";
import img1 from "../assets/imgs/travel-slider-01.jpg";
import img2 from "../assets/imgs/travel-slider-02.jpg";
import img3 from "../assets/imgs/travel-slider-03.jpg";

const slides = [
  {
    img: img1,
    title: "IMAGINATION, INNOVATION, WORK COLLABORATION.",
  },
  {
    img: img2,
    title: "COLLECTIVE DESIGN, INTERIOR DESIGN PRACTICE",
  },
  {
    img: img3,
    title: "COMMERCIAL INTERIORS, OFFICE DESIGN & FIT OUT",
  },
];

export default function Home() {
  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={styles.slide}
          style={{
            animationDelay: `${index * 6}s`,
            backgroundImage: `url(${slide.img})`,
          }}
        >
          <div className={styles.overlay}>
            <div className={styles.caption}>
              <div className={styles.text}>
                <h2>{slide.title}</h2>
                <button>LOOK MORE</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
