import Footer from "../../components/footer";
import Header from "../../components/header";
import AboutUs from "./components/about_us";
import Feedback from "./components/feedback";
import Hero from "./components/hero";

export default function Aboutpage() {
    return (
        <div>
            <Header />
            <Hero />
            <AboutUs />
            <Feedback />
            <Footer />
        </div>
    );
}
