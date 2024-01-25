import { Link } from "react-router-dom";
import style from "./style.module.css";
import { InstagramLogo, WhatsappLogo, FacebookLogo } from "phosphor-react";

export default function Footer() {
    return (
        <footer className={style.container}>
            <div className={style.row}>
                <div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quo perspiciatis totam dolorem optio, commodi
                        porro, quia veniam corrupti pariatur ipsam eius sit
                        aliquam ex, deleniti.
                    </p>

                    <div className={style.social_media_links}>
                        <Link to="http://" target="_blank">
                            <InstagramLogo
                                color="#fff"
                                size={25}
                                weight="fill"
                            />
                        </Link>
                        <Link to="http://" target="_blank">
                            <WhatsappLogo
                                color="#fff"
                                size={25}
                                weight="fill"
                            />
                        </Link>
                        <Link to="http://" target="_blank">
                            <FacebookLogo
                                color="#fff"
                                size={25}
                                weight="fill"
                            />
                        </Link>
                    </div>
                </div>

                <div>
                    <h3>Contact Info</h3>
                    <Link to="#">
                        Location: Lorem sit amet, adipisicing elit.
                    </Link>
                    <Link to="tel:+2880000000038" target="_blank">
                        Phone Calls: +2880000000038
                    </Link>
                    <Link to="mailto:example@gmail.co" target="_blank">
                        Email: example@gmail.co
                    </Link>
                    <Link
                        to="https://api.whatsapp.com/send?phone=2880000000038"
                        target="_blank"
                    >
                        WhatsApp
                    </Link>
                </div>

                <div>
                    <h3>Other Links</h3>

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">services</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/faqs">FAQ’s</Link>
                </div>
            </div>

            <div className={style.reference}>
                Copyright © 2024 Solute | Made by{" "}
                <Link to="http://eufrasiojoao.netlify.app" target="_blank">
                    Eufrasio Joao
                </Link>
            </div>
        </footer>
    );
}
