import Footer from "../../components/footer";
import Header from "../../components/header";
import Hero from "./components/hero";
import OurServices from "./components/our_services";
import { useEffect } from "react";

export default function Servicespage() {
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Hero />
            <OurServices />
            <Footer />
        </div>
    );
}
