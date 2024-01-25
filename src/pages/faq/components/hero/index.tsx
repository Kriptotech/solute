import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h1>FAQ</h1>

                <div>
                    <Link to="/">Home</Link> / <span>FAQ</span>
                </div>
            </div>
        </div>
    );
}
