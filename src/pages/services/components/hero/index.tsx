import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h1>Services page</h1>

                <div>
                    <Link to="/">Home</Link> / <span>Services</span>
                </div>
            </div>
        </div>
    );
}
