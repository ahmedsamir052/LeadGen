import styles from "./Services.module.css";
import img8 from "../assets/imgs/team-08.jpg"
import img1 from "../assets/imgs/team-01.jpg"
import img2 from "../assets/imgs/team-02.jpg"
import img3 from "../assets/imgs/team-03.jpg"
export default function Services() {
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.head}>
          <h1>Our Services</h1>
          <p>
            Interior Design typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since.when an unknown of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={img8} alt="" />
            </div>
            <div className={styles.text}>
              <h4>COMMERCIAL DESIGN</h4>
              <p>LOREM IPSUM</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
               <img src={img1} alt="" />
            </div>
            <div className={styles.text}>
              <h4>OFFICE DESIGN</h4>
              <p>LOREM IPSUM</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
               <img src={img2} alt="" />
            </div>
            <div className={styles.text}>
              <h4>RESIDENTIAL DESIGN</h4>
              <p>LOREM IPSUM</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
               <img src={img3} alt="" />
            </div>
            <div className={styles.text}>
              <h4>HOSPITALLY DESIGN</h4>
              <p>LOREM IPSUM</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.qst}>
        <div className={styles.quot}>
          <h2>Are you looking for interior design expertise?</h2>
          <div className={styles.btn}>
            <button>GET QUOTATION</button>
          </div>
        </div>
      </div>
    </>
  );
}
