import { Bg } from "./square-bg";
import { ProfileCard } from "./profile-card";
import { ContentCard } from "./content-card";
import styles from "./styles.module.scss";

export function App() {
  return (
    <div className={styles.App}>
      <Bg />
      <div className={styles.content}>
        <ProfileCard />
        <ContentCard />
      </div>
    </div>
  );
}
