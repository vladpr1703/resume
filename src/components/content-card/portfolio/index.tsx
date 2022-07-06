import { ProjectCard } from "./project-card";
import styles from "./styles.module.scss";

export const Portfolio = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles["header-text"]}>
        Portf<span>olio</span>
      </h2>
      <div className={styles.content}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
