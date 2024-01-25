import { List, X } from "phosphor-react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Mobile() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className={style.container}>
            <nav>
                <Link to="/">
                    <img src="/logo.png" alt="" />
                </Link>

                {isOpen ? (
                    <X
                        size={30}
                        weight="bold"
                        color="#fff"
                        onClick={() => setIsOpen(false)}
                    />
                ) : (
                    <List
                        size={30}
                        weight="bold"
                        color="#fff"
                        onClick={() => setIsOpen(true)}
                    />
                )}
            </nav>

            {isOpen && (
                <div>
                    <Link to="/">
                        <img src="/logo.png" alt="" />
                    </Link>

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">services</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/faqs">FAQ’s</Link>
                </div>
            )}
        </header>
    );
}
