import { MapPin, Envelope, Phone } from "phosphor-react";
import styles from "./styles.module.css";
import { Header } from "./header";

export default function ContactInfo() {
    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.row}>
                <div className={styles.item}>
                    <strong>Office Address</strong>

                    <div className={styles.row2}>
                        <div>
                            <MapPin size={30} weight="fill" color="#ff7426" />
                        </div>
                        <div>
                            <span>7346 Bedford St</span>
                            <span>Brentwood, NY 11717</span>
                        </div>
                    </div>
                </div>

                <div className={styles.item}>
                    <strong>Email Address</strong>

                    <div className={styles.row2}>
                        <div>
                            <Envelope size={30} weight="fill" color="#ff7426" />
                        </div>
                        <div>
                            <span>Mail To:</span>
                            <span>info@example.com</span>
                        </div>
                    </div>
                </div>

                <div className={styles.item}>
                    <strong>Phone Number</strong>

                    <div className={styles.row2}>
                        <div>
                            <Phone size={30} weight="fill" color="#ff7426" />
                        </div>
                        <div>
                            <span>Contact Office:</span>
                            <span>(+880) 1738 123 456</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
