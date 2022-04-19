import styles from "./styles.module.scss";
import Image from "../../images/image.png";

export const ProfileCard = () => {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles.image}>
        <img src={Image} alt="alt" />
      </div>
      <div className={styles["personal-info"]}>
        <p className={styles.text}>Vlad Prusakov</p>
        <span>Frontend developer</span>
        <div className={styles.socials}>
          <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
          <i className="fa fa-telegram fa-lg" aria-hidden="true"></i>
          <i className="fa fa-github fa-lg" aria-hidden="true"></i>
          <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
        </div>
      </div>
      <div className={styles.buttons}>
        <button>DOWNLOAD CV</button>
        <button>CONTACT ME</button>
      </div>
    </div>
  );
};
