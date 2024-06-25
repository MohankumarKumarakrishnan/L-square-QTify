import styles from "./basicComponents.module.css";
const Button = ({
  children,
  imgSrc,
  appearance = "primary" | "secondary" | "text",
  onClick,
}) => {
  if (appearance === "text")
    return (
      <button className={styles.textButton} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button
      className={`${styles.button} ${
        appearance === "secondary" ? styles.secondary : styles.primary
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
