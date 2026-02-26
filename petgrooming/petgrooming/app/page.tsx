import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.page}>

        <Header />
        <Main />
        <Footer />

      </main>


    </div>
  );
}
