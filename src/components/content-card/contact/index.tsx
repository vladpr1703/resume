import styles from "./styles.module.scss";

export const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles["header-text"]}>
        Contact <span>Form</span>
      </h2>
      <form>
        <div className={styles.row}>
          <input placeholder="Full name" required></input>
          <input type="email" placeholder="E-mail" required></input>
        </div>
        <textarea placeholder="Your message" required></textarea>
        <button>Send message</button>
      </form>
    </div>
  );
};
