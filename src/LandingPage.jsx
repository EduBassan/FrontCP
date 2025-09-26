import Apresentacao from "./components/Apresentacao";
import Depoimentos from "./components/Depoimentos";
import Footer from "./components/Footer";
import Forms from "./components/Forms";
import Funcionalidades from "./components/Funcionalidades";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function LandingPage () {
    return (
        <div className="h-full overflow-hidden w-full">
            <NavBar/>
            <Hero/>
            <Apresentacao/>
            <Funcionalidades/>
            <Footer/>
        </div>
    )
}