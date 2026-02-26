import styles from "./main.module.css";

export default function Main() {
  return (
    <div className={styles.main}>
      <h3 className={styles.intro}>
        Hello, pet lovers. Welcome to Pawfect Grooming.
        <br />
        Here are the services that we offer:
      </h3>

      <ul className={styles.list}>
        <li>Nail trimming</li>
        <li>Bath and dry</li>
        <li>Hair styling</li>
        <li>Teeth brushing</li>
        <li>Ear cleaning</li>
        <li>Debug treatment</li>
      </ul>
    </div>
  );
}