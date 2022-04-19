import styles from "./styles.module.scss";

export const About = () => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h2 className={styles["header-text"]}>
          About <span>me</span>
        </h2>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <span>
            I am Vlad Prusakov, frontend developer from Minsk, Belarus. I have
            rich experience in web development, also I am good at mobile
            development in Flutter. I will be glad to cooperate.
          </span>
        </div>
        <div className={styles.column}>
          <div className={styles.element}>
            <i className="fa fa-user" aria-hidden="true"></i>
            <span className={styles.title}>NAME:</span>
            <span>Vlad</span>
          </div>
          <div className={styles.element}>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span className={styles.title}>EMAIL:</span>
            <span>vlad.prusakov1703@gmail.com</span>
          </div>
          <div className={styles.element}>
            <i className="fa fa-location-arrow" aria-hidden="true"></i>
            <span className={styles.title}>LOCATION:</span>
            <span>Minsk, Belarus</span>
          </div>
          <div className={styles.element}>
            <i className="fa fa-desktop" aria-hidden="true"></i>
            <span className={styles.title}>FREELANCE:</span>
            <span>Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};
