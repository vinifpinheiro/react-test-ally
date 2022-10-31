import styles from "./Button.module.css";

export const ButtonComponent = () => {
  return (
    <div className={styles.button__component}>
      <button type="submit" className={styles.button__send}>
        Enviar
      </button>
    </div>
  );
};
