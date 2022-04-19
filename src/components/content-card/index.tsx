import { About } from "./about";
import styles from "./styles.module.scss";

export const ContentCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <About />
      </div>
    </div>
  );
};
