import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src="/Petpawlogo.png" alt="Pet paw logo" />
      <h1 className={styles.title}>Pawfect Grooming</h1>
    </div>
  );
}
// export default function Header() {
//   return (
//     <div className="flex flex-col items-center gap-6 text-center">

//       <Image
//         className="dark:invert"
//         src="/Petpawlogo.jpg"
//         alt="Pet paw logo"
//         width={1000}
//         height={200}
//         priority
//       />

//       <h1 className="text-5xl font-semibold tracking-tight text-pink">
//         Cats & Dogs
//       </h1>

//     </div>
//   );
// }


