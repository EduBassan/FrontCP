import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Depoimentos () {
    return (
        <div className="bg-[#111111] pr-5 pl-5 pt-5  w-[100%] flex flex-col justify-center items-center h-300 lg:h-auto">
            <h1 className="flex justify-center items-center text-3xl lg:text-5xl text-center font-bold text-white">
          Nossas avaliações
        </h1>
        <div className="flex mt-10 w-full justify-center items-center text-[70px] text-white">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
        </div>
    )
}