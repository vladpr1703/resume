import Web from "../../../images/icon-dev.svg";
import App from "../../../images/icon-app.svg";
import styles from "./styles.module.scss";

export const About = () => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h2 className={styles["header-text"]}>
          About <span>me</span>
        </h2>
      </div>
      <div className={styles.text}>
        <span>
          I am Vlad Prusakov. Experienced web developer, knowledgeable in all
          phases of advanced web development. Extensive experience in user
          interface design, testing and debugging processes. Communicative, easy
          to get along with people. Have a little experience in mobile
          application development on Flutter.
        </span>
      </div>
      <div className={styles.contact}>
        <div className={styles.row}>
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
        </div>
        <div className={styles.row}>
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
      <div className={styles.services}>
        <h2 className={styles["header-text"]}>
          What I'm <span>Doing</span>
        </h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={Web} alt="app" />
            <span>
              Modern and mobile-ready website that will help you reach all of
              your marketing.
            </span>
          </div>
          <div className={styles.card}>
            <img src={App} alt="app" />
            <span>
              Professional development of applications for iOS and Android.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
