import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.cont}>
      <div className={styles.contact}>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.data}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className={styles.text}>
              <p>
                301 The Greenhouse, Custard,
                <br />
                Factory, London, E2 8DY.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
            <div className={styles.text}>
              <p>
                (M) +44 (0) 123 456 7890
                <br />
                (O) +44 (0) 123 456 7890
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className={styles.text}>
              <p>
                no-reply@domain.com
                <br />
                help@domain.com
              </p>
            </div>
          </div>
        </div>

        <div className={styles.form}>
          <div className={styles.info}>
            <input type="text" placeholder="* Your name" />
            <input type="email" placeholder="* Your email" />
            <input type="text" placeholder="* Your Phone" />
          </div>
          <div className={styles.message}>
            <textarea placeholder="Your Message"></textarea>
            <button>SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
