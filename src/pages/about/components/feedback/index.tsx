import styles from "./styles.module.css";
import { Header } from "./components/header";
import { Item } from "./components/item";

import img1 from "./assets/testi1.jpg";
import img2 from "./assets/testi2.jpg";
import img3 from "./assets/testi3.jpg";

export default function Feedback() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <Header />

                <div className={styles.row}>
                    <Item
                        image={img1}
                        description="At vero eos et accusamus etiusto odio
							praesentium accusamus this etiusto odio
							data center."
                        name="Jordan Brag"
                    />
                    <Item
                        image={img2}
                        description="At vero eos et accusamus etiusto odio
							praesentium accusamus this etiusto odio
							data center."
                        name="Tamara"
                    />
                    <Item
                        image={img3}
                        description="At vero eos et accusamus etiusto odio
							praesentium accusamus this etiusto odio
							data center."
                        name="Thomas Ondoe"
                    />
                </div>
            </div>
        </div>
    );
}
