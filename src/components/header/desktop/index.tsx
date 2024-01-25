import style from "./style.module.css";
import { Link } from "react-router-dom";

export default function Desktop() {
  return (
    <header className={style.container}>
      <nav>
        <Link to="/">
          <img src="/logo.png" alt="" />
        </Link>

        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faqs">FAQ’s</Link>
        </div>
      </nav>
    </header>
  );
}
