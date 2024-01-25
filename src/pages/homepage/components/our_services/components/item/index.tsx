import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Activity, ArrowArcRight } from "phosphor-react";

interface IProps {
    description: string;
    title: string;
}

export function Item({ description, title }: IProps) {
    return (
        <div className={styles.item}>
            <Activity color="red" size={30} weight="duotone" />

            <div>
                <span>{title}</span>
                <p>{description}</p>

                <Link to="/">
                    Read More
                    <ArrowArcRight color="red" size={20} weight="duotone" />
                </Link>
            </div>
        </div>
    );
}
