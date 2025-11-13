import styles from "./Footer.module.css"; 
import imglogo from "../assets/imgs/logo-white.png"
export default function Footer() {
  return (
    <div className={styles.cont}>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <img src={imglogo} alt="" />
        </div>

        <div className={styles.powered}>
          © 2025 LeadGen Is Proudly Powered By Ahmed Samir.
        </div>

        <div className={styles.icons}>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-google-plus-g"></i>
          <i className="fa-brands fa-pinterest"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}
