import { useEffect } from "react";
import styles from "./Projects.module.css";

export default function Projects() {
  useEffect(() => {
    const counters = document.querySelectorAll(`.${styles.counter}`);
    const speed = 100;

    const startCounting = () => {
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          const increment = Math.ceil(target / speed);

          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 30);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });
    };

    let started = false;
    const handleScroll = () => {
      const stats = document.querySelector(`.${styles.stats}`);
      if (!stats) return;
      const statsTop = stats.offsetTop - window.innerHeight + 100;

      if (!started && window.scrollY > statsTop) {
        startCounting();
        started = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.cont}>
        <div className={styles.head}>
          <h1>Our Projects</h1>
          <p>
            Interior Design typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since. When an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className={styles.imgs}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className={styles.imgBox}>
              <img src={`/src/assets/imgs/agency-work-0${n}.jpg`} alt="" />
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.card}>
            <h3 className={styles.counter} data-target="1500">
              0
            </h3>
            <p>Projects Completed</p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.counter} data-target="1400">
              0
            </h3>
            <p>Happy Clients</p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.counter} data-target="1250">
              0
            </h3>
            <p>Cups of Coffee</p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.counter} data-target="1600">
              0
            </h3>
            <p>Hours Worked</p>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>

      <div className={styles.hero}>
        <div className={styles.text}>
          <h1>We make your beautiful home.</h1>
          <p>We offer a wide variety of trainings to achieve the best results.</p>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the when an unknown printer took a galley of type
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </span>
          <button className={styles.btn}>EXPLORE BLOG</button>
        </div>
      </div>
    </>
  );
}
