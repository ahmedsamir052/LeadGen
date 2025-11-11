import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.about}>
          <div className={styles.textA}>
            <h1 className={styles.ourabout}>About our LeadGen interior design.</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It has survived not only five centuries.
            </p>
            <span>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the when an unknown printer took a galley of type scrambled it to
              make a type specimen book. Lorem Ipsum has been the industry's
              standard dummy text ever since the when an unknown printer took a
              galley of type scrambled.
            </span>
            <button className={styles.btn}>
              <h6 className={styles.explore}>EXPLORE SERVICES</h6>
              <div className={styles.iconb}>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </button>
          </div>
          <div className={styles.img}>
            <img src="/src/assets/imgs/content-51.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.interior}>
        <div className={styles.designer}>
          <h2>Interior designer</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text.
          </p>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.title}>
                <i className={`${styles.icon} fa-solid fa-paint-roller`}></i>
                <h4>Interior expertise</h4>
              </div>
              <p className={styles["p-card"]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.title}>
                <i className={`${styles.icon} fa-regular fa-lightbulb`}></i>
                <h4>Creative collaboration</h4>
              </div>
              <p className={styles["p-card"]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.title}>
                <i className={`${styles.icon} fa-solid fa-paint-roller`}></i>
                <h4>Distinctive designs</h4>
              </div>
              <p className={styles["p-card"]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.title}>
                {/* <i className="fa-solid fa-pen-nib"></i> */}
                <i className={`${styles.icon} fa-solid fa-pen-nib`}></i>
                <h4>Design without limits</h4>
              </div>
              <p className={styles["p-card"]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.iabout}>
          <img src="/src/assets/imgs/hero-bg22.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
