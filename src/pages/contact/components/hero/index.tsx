import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h1>Contact page</h1>

                <div>
                    <Link to="/">Home</Link> / <span>Contact</span>
                </div>
            </div>
        </div>
    );
}
