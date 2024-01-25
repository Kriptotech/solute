import styles from "./styles.module.css";
import { Header } from "./components/header";
import { Item } from "./components/item";

export default function OurSevices() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <Header />

                <div className={styles.row}>
                    {[1, 2, 3, 4, 5, 6].map((v, i) => {
                        return (
                            <Item
                                key={v + i}
                                description="At vero eos et accusamus etiusto odio
							praesentium accusamus this etiusto odio
							data center."
                                title="Software Development"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
