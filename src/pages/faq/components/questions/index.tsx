import styles from "./styles.module.css";
import img from "./assets/faq-img.png";
import { Item } from "./components/item";

export default function Questions() {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <Item
                        question="What is the typical timeframe for implementing your IT solutions?"
                        answer="Quam nunc arcu nunc a lobortis convallis magnis
                    dolor. Integer malesuada vel com mi eu elementum.
                    Etiam eget urna quis dui amet facilisis fringilla
                    sed. Massa great vitae accumsan viverra in morbi nec
                    volutpat aenean tortor. At nec sagittis like of eget
                    placerat. Mi accumsan massa vitae etiam nisi
                    suspendisse condimentum."
                    />
                    <Item
                        question="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis delectus at labore commodi?"
                        answer="Quam nunc arcu nunc a lobortis convallis magnis
                    dolor. Integer malesuada vel com mi eu elementum.
                    Etiam eget urna quis dui amet facilisis fringilla
                    sed. Massa great vitae accumsan viverra in morbi nec
                    volutpat aenean tortor. At nec sagittis like of eget
                    placerat. Mi accumsan massa vitae etiam nisi
                    suspendisse condimentum."
                    />
                    <Item
                        question="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis delectus at labore commodi?"
                        answer="Quam nunc arcu nunc a lobortis convallis magnis
                    dolor. Integer malesuada vel com mi eu elementum.
                    Etiam eget urna quis dui amet facilisis fringilla
                    sed. Massa great vitae accumsan viverra in morbi nec
                    volutpat aenean tortor. At nec sagittis like of eget
                    placerat. Mi accumsan massa vitae etiam nisi
                    suspendisse condimentum."
                    />
                    <Item
                        question="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis delectus at labore commodi?"
                        answer="Quam nunc arcu nunc a lobortis convallis magnis
                    dolor. Integer malesuada vel com mi eu elementum.
                    Etiam eget urna quis dui amet facilisis fringilla
                    sed. Massa great vitae accumsan viverra in morbi nec
                    volutpat aenean tortor. At nec sagittis like of eget
                    placerat. Mi accumsan massa vitae etiam nisi
                    suspendisse condimentum."
                    />
                    <Item
                        question="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis delectus at labore commodi?"
                        answer="Quam nunc arcu nunc a lobortis convallis magnis
                    dolor. Integer malesuada vel com mi eu elementum.
                    Etiam eget urna quis dui amet facilisis fringilla
                    sed. Massa great vitae accumsan viverra in morbi nec
                    volutpat aenean tortor. At nec sagittis like of eget
                    placerat. Mi accumsan massa vitae etiam nisi
                    suspendisse condimentum."
                    />
                    <Item
                        question="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis delectus at labore commodi?"
                        answer="Quam nunc arcu nunc a lobortis convallis magnis
                    dolor. Integer malesuada vel com mi eu elementum.
                    Etiam eget urna quis dui amet facilisis fringilla
                    sed. Massa great vitae accumsan viverra in morbi nec
                    volutpat aenean tortor. At nec sagittis like of eget
                    placerat. Mi accumsan massa vitae etiam nisi
                    suspendisse condimentum."
                    />
                </div>

                <img src={img} alt="" />
            </div>
        </div>
    );
}
