import styles from "./styles.module.css";

interface IProps {
    description: string;
    title: string;
    image: string;
}

export function Item({ description, title, image }: IProps) {
    return (
        <div className={styles.item}>
            <img src={image} />

            <div>
                <span>{title}</span>
                <p>{description}</p>
            </div>
        </div>
    );
}
