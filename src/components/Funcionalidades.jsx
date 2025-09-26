import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import Forms from "./Forms";

export default function Funcionalidades() {
  return (
    <div
    id="funcionalidades"
    className="bg-[#111111] pr-5 pl-5 pt-5 grid-cols-1 lg:grid-col-2 w-[100%] flex flex-wrap justify-center items-start h-350 lg:h-200">
      <h1 className="flex text-3xl mb-10 lg:text-5xl text-center justify-center items-center font-bold text-white w-full">
          Sobre nós
        </h1>
      <div className="flex flex-col justify-start items-center h-120 gap-5">
        <h4 className="flex text-2xl lg:text-3xl text-center justify-center items-start font-bold text-white">
          Qual nosso diferencial?
        </h4>
        <div className="flex flex-wrap flex-col justify-center items-start gap-5 h-170">
          <div
            className="transition-all ease-in-out duration-500 hover:-translate-x-4 hover:-translate-y-2  flex flex-col justify-center items-center bg-gradient-to-b lg:bg-gradient-to-r from-[#190dc5] to-[#2313ff] h-65 w-60 text-white"
            style={{ boxShadow: "1px 0px 10px 1px rgba(52, 58, 146, 0.500)" }}
          >
            <h1 className="mb-2 text-2xl">Feito pra você </h1>
            <div className="text-[70px]">
              <FontAwesomeIcon icon={faHandHoldingHeart} />
            </div>

            <h3 className="w-[80%] text-center text-lg">
              Recomendações de novos artistas e playlists personalizadas
            </h3>
          </div>

          <div
            className="transition-all ease-in-out duration-500 hover:-translate-x-4 hover:translate-y-2 flex flex-col justify-center items-center bg-[#2313ff]  h-65 w-60 text-white"
            style={{ boxShadow: "1px 0px 10px 1px rgba(255, 255, 255, 0.100)" }}
          >
            <h1 className="mb-2 text-2xl">Responsividade </h1>
            <div className="text-[70px]">
              <FontAwesomeIcon icon={faDisplay} />
            </div>

            <h3 className="w-[80%] text-center text-lg">
              Design adaptado para diferentes dispositivos
            </h3>
          </div>


          <div
            className="transition-all ease-in-out duration-500 hover:translate-x-4 hover:-translate-y-2  flex flex-col justify-center items-center h-65 w-60 bg-gradient-to-t lg:bg-gradient-to-l from-[#190dc5] to-[#2313ff]  text-white"
            style={{ boxShadow: "1px 0px 10px 1px rgba(52, 58, 146, 0.500)" }}
          >
            <h1 className="mb-2 text-2xl">Sinta sua Vibe</h1>
            <div className="text-[70px]">
              <FontAwesomeIcon icon={faMusic} />
            </div>

            <h3 className="w-[80%] text-center text-lg ">
              Qualidade de som superior
            </h3>
          </div>
          <div
            className="transition-all ease-in-out duration-500 hover:translate-x-4 hover:translate-y-2  flex flex-col justify-center items-center h-65 w-60 bg-gradient-to-t lg:bg-gradient-to-l from-[#190dc5] to-[#2313ff]  text-white"
            style={{ boxShadow: "1px 0px 10px 1px rgba(52, 58, 146, 0.500)" }}
          >
            <h1 className="mb-2 text-2xl">Milhares de usuários</h1>
            <div className="text-[70px]">
              <FontAwesomeIcon icon={faUser} />
            </div>

            <h3 className="w-[80%] text-center text-lg ">
              Comunidade em crescente expansão
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center h-full ml-20">
        <h4 className="flex text-2xl lg:text-3xl text-center justify-center items-start font-bold text-white">
          Se interessou?
        </h4>
        <Forms/>
      </div>
    </div>
  );
}
