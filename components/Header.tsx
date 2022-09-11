import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.sitename}>thecollegecalculator</div>
    </header>
  );
}
