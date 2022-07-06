import { About } from "./about";
import { Contact } from "./contact";
import { ActiveCards } from "../types";
import { Portfolio } from "./portfolio";
import { ContentCardProps } from "./types";
import styles from "./styles.module.scss";

export const ContentCard = ({ activeCard }: ContentCardProps) => {
  let content: JSX.Element;

  switch (activeCard) {
    case ActiveCards.About:
      content = <About />;
      break;
    case ActiveCards.Contact:
      content = <Contact />;
      break;
    case ActiveCards.Portfolio:
      content = <Portfolio />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{content}</div>
    </div>
  );
};
