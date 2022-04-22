import Person from "../../images/person-svgrepo-com.svg";
import Portfolio from "../../images/portfolio-svgrepo-com.svg";
import Contact from "../../images/contact-svgrepo-com.svg";
import Resume from "../../images/resume-svgrepo-com.svg";
import { MenuItem } from "./type";
import styles from "./styles.module.scss";

export const Menu = ({ setActiveCard }) => {
  const menuItems: Array<MenuItem> = [
    {
      name: "About",
      img: Person,
    },
    { name: "Resume", img: Resume },
    { name: "Portfolio", img: Portfolio },
    { name: "Contact", img: Contact },
  ];

  const handleSetActiveCard = (item: MenuItem["name"]) => () => {
    setActiveCard(item);
  };

  return (
    <div className={styles.menu}>
      {menuItems.map((item) => (
        <div
          key={Date.now() + item.name}
          className={styles["menu-item"]}
          onClick={handleSetActiveCard(item.name)}
        >
          <img src={item.img} alt={item.name} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};
