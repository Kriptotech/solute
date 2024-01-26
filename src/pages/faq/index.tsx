import Footer from "../../components/footer";
import Header from "../../components/header";
import Hero from "./components/hero";
import Questions from "./components/questions";
import { useEffect } from "react";

export default function FrequentlyAskedQuestionsPage() {
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Hero />
            <Questions />
            <Footer />
        </div>
    );
}
