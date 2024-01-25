import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import img from "./assets/about-img.png";

export default function AboutUs() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <img src={img} alt="about image" />

                <div className={styles.right}>
                    <small>ABOUT COMPANY</small>
                    <h2>The Best Of Product Your Business</h2>
                    <p>
                        There are many variations of passages of lorem Ipsum
                        available but the majority have suffered alteration in
                        some form by inject rated humour or randomised this
                        like.
                    </p>

                    <div>
                        <h4>
                            Highest quality security, Network uptime, fast
                            output. Unlimited scale and customizing
                            possibilities.
                        </h4>

                        <p>
                            Murad Hasan, <span>Head Of Idea</span>
                        </p>
                    </div>

                    <Link to="/">Read More</Link>
                </div>
            </div>
        </div>
    );
}
