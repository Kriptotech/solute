import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <small>ENDLESS BUSINESS POSIBLITTES</small>
        <h1>
          Best <span>Solution</span> And Great <span>Business</span>
        </h1>
        <p>
          There are many lorem Ipsum available but the majority have in some
          form randomised words which don't look even slightly believable.
        </p>

        <div className={styles.row}>
          <Link to="/">See Project</Link>
          <Link to="/">Discover More</Link>
        </div>
      </div>
    </div>
  );
}
