import { About } from "./about";
import { Contact } from "./contact";
import { ContentCardProps } from "./types";
import styles from "./styles.module.scss";

export const ContentCard = ({ activeCard }: ContentCardProps) => {
  let content: JSX.Element;

  switch (activeCard) {
    case "About":
      content = <About />;
      break;
    case "Contact":
      content = <Contact />;
      break;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{content}</div>
    </div>
  );
};
