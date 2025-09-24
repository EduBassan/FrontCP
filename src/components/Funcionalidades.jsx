import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

export default function Funcionalidades() {
  return (
    <div className="bg-[#111111] pr-5 pl-5 pt-5  w-[100%] flex justify-center items-start h-300 lg:h-auto">
      <div className="flex flex-col justify-start items-center h-100 gap-10">
        <h1 className="flex text-3xl lg:text-5xl text-center justify-center items-center font-bold text-white">
          Desenvolvido com carinho
        </h1>
        <div className="flex flex-wrap flex-row justify-center items-start gap-20">
          <div
            className="transition-all ease-in-out duration-500 hover:scale-105 flex flex-col justify-center items-center bg-gradient-to-b lg:bg-gradient-to-r from-[#190dc5] to-[#4f34c9]  rounded-lg h-65 w-60 text-white"
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
            className="transition-all ease-in-out duration-500 hover:scale-105 flex flex-col justify-center items-center bg-[#4f34c9] rounded-lg h-65 w-60 text-white"
            style={{ boxShadow: "1px 0px 10px 1px rgba(93, 52, 146, 0.500)" }}
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
            className="transition-all ease-in-out duration-500 hover:scale-105 flex flex-col justify-center items-center rounded-lg h-65 w-60 bg-gradient-to-t lg:bg-gradient-to-l from-[#190dc5] to-[#4f34c9] text-white"
            style={{ boxShadow: "1px 0px 10px 1px rgba(52, 58, 146, 0.500)" }}
          >
            <h1 className="mb-2 text-2xl">Sinta sua Vibe</h1>
            <div className="text-[70px]">
              <FontAwesomeIcon icon={faMusic} />
            </div>

            <h3 className="w-[80%] text-center text-lg">
              Qualidade de som superior
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
}
