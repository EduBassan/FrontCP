import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInfinity} from "@fortawesome/free-solid-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faMusic} from "@fortawesome/free-solid-svg-icons";
import {faVolumeHigh} from "@fortawesome/free-solid-svg-icons";

<FontAwesomeIcon icon={faVolumeHigh} />
 
export default function Apresentacao () {
    return (
       <div className="px-8 py-20">
            <section className="grid grid-cols-2 gap-20 lg:gap-30 font-bold text-white ">
                {/* Col-span faz com que ocupe 2 colunas */}
                <div className="col-span-2 flex justify-center items-center"> 
                  <h1 className="text-3xl md:text-5xl lg:text-5xl">PRINCIPAIS BENEFÍCIOS</h1>
                </div>

                <div className="flex items-center text-sm md:text-lg lg:text-4xl lg:px-10 lg:ml-50">
                  Músicas infinitas de todos os gêneros
                </div>
                <div className="text-[60px] sm:text-[60px] lg:text-[160px] mx-auto lg:mx-0 xl:ml-50">
                    <FontAwesomeIcon icon={faInfinity} style={{color: "#ffffff",}} /> 
                </div>

                <div className="text-[60px] sm:text-[60px] lg:text-[160px] mx-auto lg:mx-0 lg:ml-100">
                    <FontAwesomeIcon icon={faGlobe} />
                </div>
                <div className="flex items-center text-sm md:text-lg lg:text-4xl lg:px-10 text-right lg:mr-50">
                  Acesse em qualquer dispositivo
                </div>

                <div className="flex items-center text-sm md:text-lg lg:text-4xl lg:px-10 lg:ml-50">
                  Playlists personalizadas
                </div>
                <div className="text-[60px] sm:text-[60px] lg:text-[160px] mx-auto lg:mx-0 xl:ml-50">
                    <FontAwesomeIcon icon={faMusic} style={{color: "#ffffff",}} /> 
                </div>

            </section>
    </div>

    )
}