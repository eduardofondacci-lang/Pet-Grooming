import styles from "./footer.module.css";

export default function Footer() {

  return (
      <div className={styles.footer}>
        <h6 className={styles.footer}>

         <ul>
            <li>Contact us: 514-666-8888</li>
            <li>Address: 249 rue Sherbrooke Ouest, Montreal, QC, H1H 2H2</li>
            <li>Email: info@catsanddogs.com</li>
        </ul>
         
        </h6>

        </div>
    )
}
