import Apresentacao from "./components/Apresentacao";
import Depoimentos from "./components/Depoimentos";
import Footer from "./components/Footer";
import Forms from "./components/Forms";
import Funcionalidades from "./components/Funcionalidades";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function LandingPage () {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <Apresentacao/>
            <Funcionalidades/>
            <Depoimentos/>
            <Forms/>
            <Footer/>
        </div>
    )
}