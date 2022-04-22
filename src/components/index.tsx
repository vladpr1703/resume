import { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Menu } from "./menu";
import { ActiveCard } from "./types";
import { Bg } from "./square-bg";
import { ProfileCard } from "./profile-card";
import { ContentCard } from "./content-card";
import styles from "./styles.module.scss";

export function App() {
  const [activeCard, setActiveCard] = useState<ActiveCard>("About");

  return (
    <div className={styles.app}>
      <Bg />
      <div className={styles.content}>
        <ProfileCard setActiveCard={setActiveCard} />
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={activeCard}
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames={{
              enter: styles["fade-enter"],
              enterActive: styles["fade-enter-active"],
              exitActive: styles["fade-exit-active"],
              exitDone: styles["fade-exit-done"],
              exit: styles["fade-exit"],
            }}
          >
            <ContentCard activeCard={activeCard} />
          </CSSTransition>
        </SwitchTransition>
        <Menu setActiveCard={setActiveCard} />
      </div>
    </div>
  );
}
