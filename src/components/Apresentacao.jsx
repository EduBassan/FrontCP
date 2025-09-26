import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInfinity} from "@fortawesome/free-solid-svg-icons";
import {faMusic} from "@fortawesome/free-solid-svg-icons";
import Depoimentos from "./Depoimentos";
 
export default function Apresentacao () {
    return (
       <div
        id="apresentacao"
        className="bg-gradient-to-b from-[#190dc5] via-[#150ba7] to-[#190dc5] pt-10 pb-20 overflow-hidden">
            <section className="grid md:grid-cols-1 lg:grid-cols-2 font-bold text-white w-full">
                {/* Col-span faz com que ocupe 2 colunas */}
                <div className="col-span-1 lg:col-span-2 flex justify-center items-center"> 
                  <h1 className="rounded-xl text-3xl lg:text-5xl p-4 mb-5 lg:mb-10">Conheça sua Melodia</h1>
                </div>

                <div className="col-span-1 flex justify-center items-center">
                <Depoimentos/>
                </div>

                <div className="grid col-span-1 grid-cols-2 justify-center items-center gap-10 mx-2 py-5 lg:mx-5 lg:px-10 lg:py-10"> 
                
                <div className="h-full w-full flex justify-center items center">
                <div className="text-center text-lg md:text-2xl lg:text-3xl">
                  Músicas infinitas de todos os gêneros
                </div>
                </div>
                <div className="text-center text-lg md:text-2xl lg:text-3xl">
                  Recomendações baseadas no seu gosto
                </div>



                <div className="flex justify-center items-center text-[60px] lg:text-[90px]">
                    <FontAwesomeIcon icon={faInfinity} />
                </div>
                 <div className="flex justify-center items-center text-[60px] lg:text-[90px] mb-10 lg:mb-0 ">
                    <FontAwesomeIcon icon={faMusic} style={{color: "#ffffff",}} /> 
                </div>

                <div className="h-full w-full flex justify-end items center">
                <div className="text-center text-lg md:text-2xl lg:text-3xl">
                  Playlists personalizadas e artistas novos
                </div>
                </div>

                <div className="text-center text-lg md:text-2xl lg:text-3xl">
                  Tudo que você precisa em um único aplicativo
                </div>


                </div>
            

            </section>
    </div>

    )
}