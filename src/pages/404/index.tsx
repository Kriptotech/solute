import { Link } from "react-router-dom";
import style from "./style.module.css";

export default function NotFound() {
    return (
        <div className={style.container}>
            <h1>404</h1>
            <Link to="/">Voltar</Link>
        </div>
    );
}
