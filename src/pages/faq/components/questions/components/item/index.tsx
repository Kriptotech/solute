import { useState } from "react";
import styles from "./styles.module.css";
import { CaretDown, CaretUp } from "phosphor-react";

interface IProps {
    answer: string;
    question: string;
}

export function Item({ answer, question }: IProps) {
    const [IsViseble, setIsViseble] = useState(false);

    return (
        <div className={styles.item}>
            <div onClick={() => setIsViseble(!IsViseble)}>
                <strong>{question}</strong>
                {!IsViseble ? (
                    <CaretDown color="#444" size={20} weight={"bold"} />
                ) : (
                    <CaretUp color="#444" size={20} weight={"bold"} />
                )}
            </div>

            {IsViseble && <p>{answer}</p>}
        </div>
    );
}
