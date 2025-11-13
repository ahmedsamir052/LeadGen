import styles from "./Blog.module.css";
import img1 from "../assets/imgs/spa-blog-img01.jpg";
import img2 from "../assets/imgs/spa-blog-img02.jpg";
import img3 from "../assets/imgs/spa-blog-img03.jpg";
export default function Blog() {
  return (
    <div className={styles.cont}>
      <div className={styles.blog}>
        <div className={styles.head}>
          <h1>Latest Blog</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={img1} alt="" />
            </div>
            <div className={styles.text}>
              <h3>NOTHING CAN BE GAIN WITHOUT WARIKNG...</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text.
              </p>
              <div className={styles.border}></div>
              <span>15 SEPTEMBER 2015 / POSTED BY NATHEN FORD</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.img}>
              <img src={img2} alt="" />
            </div>
            <div className={styles.text}>
              <h3>EXPERT TIPS FOR DECORATING YOUR HOLIDAY...</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text.
              </p>
              <div className={styles.border}></div>
              <span>13 SEPTEMBER 2015 / POSTED BY JEREMY GIRARD</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.img}>
              <img src={img3} alt="" />
            </div>
            <div className={styles.text}>
              <h3>THESE HAPPY DAYS ARE YOURS AND MINE...</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text.
              </p>
              <div className={styles.border}></div>
              <span>09 SEPTEMBER 2016 / POSTED BY DAN ROSE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
