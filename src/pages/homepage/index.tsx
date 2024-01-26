import Footer from "../../components/footer";
import Header from "../../components/header";
import AboutUs from "./components/about_us";
import Feedback from "./components/feedback";
import Hero from "./components/hero";
import OurSevices from "./components/our_services";
import Portfolio from "./components/portfolio";
import { useEffect } from "react";

export default function Homepage() {
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Hero />
            <AboutUs />
            <OurSevices />
            <Feedback />
            <Portfolio />
            <Footer />
        </div>
    );
}
