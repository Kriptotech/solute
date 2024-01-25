import styles from "./styles.module.css";
import { Header } from "./components/header";
import { Item } from "./components/item";

import img1 from "./assets/project-1.jpg";
import img2 from "./assets/portfolio2.jpg";
import img3 from "./assets/portfolio3.jpg";
import img4 from "./assets/portfolio4.jpg";
import img5 from "./assets/portfolio6.jpg";

export default function Portfolio() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <Header />

                <div className={styles.row}>
                    <Item
                        image={img1}
                        title="Software Development"
                        description="Networking"
                    />
                    <Item
                        image={img2}
                        title="Software Development"
                        description="Networking"
                    />
                    <Item
                        image={img3}
                        title="Software Development"
                        description="Networking"
                    />
                    <Item
                        image={img4}
                        title="Software Development"
                        description="Networking"
                    />
                    <Item
                        image={img5}
                        title="Software Development"
                        description="Networking"
                    />
                    <Item
                        image={img2}
                        title="Software Development"
                        description="Networking"
                    />
                </div>
            </div>
        </div>
    );
}
