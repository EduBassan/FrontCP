import Apresentacao from "./components/Apresentacao";
import Depoimentos from "./components/Depoimentos";
import Footer from "./components/Footer";
import Forms from "./components/Forms";
import Funcionalidades from "./components/Funcionalidades";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function LandingPage () {
    return (
        <div className="bg-gradient-to-b from-[#190dc5] to-[#7434c9] h-full ">
            <NavBar/>
            <Hero/>
            <Apresentacao/>
            <div className="w-full flex justify-center items-center bg-white">
            <Funcionalidades/>
            </div>
            <Depoimentos/>
            <Forms/>
            <Footer/>
        </div>
    )
}