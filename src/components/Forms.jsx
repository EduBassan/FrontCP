import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser , faEnvelope, faComment} from "@fortawesome/free-solid-svg-icons";

export default function Forms () {
    return (
        <div className="bg-[#111111] pr-5 pl-5 pt-5  w-[100%] flex justify-center items-start h-300 lg:h-auto">
            <div className="transition-all ease-in-out duration-500 hover:scale-105 flex flex-col pt-10 items-center bg-gradient-to-b lg:bg-gradient-to-r from-[#190dc5] to-[#4f34c9]  rounded-lg h-150 w-74 text-white">
                <div>
                    <h1 className="font-bold text-3xl pb-1">Entre em contato</h1>
                </div>
                <div className="grid grid-cols-1 m-6">
                    <form>
                    <div>
                        <div className="relative w-full">
                            <input type="text" id="nome" name="nome" className="mt-2 mb-10 w-60 h-7 rounded-md placeholder:text-white placeholder:ml-2: border-b-2 border-white focus:outline-none transition-all duration-300 ease-in focus:scale-103" placeholder="Nome"/>
                            <span className="absolute right-4 top-1/8">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                        </div>
                        <div className="relative w-full">
                            <input type="email" id="email" name="email" className="mt-2 mb-10 w-60 h-7 rounded-md placeholder:text-white placeholder:ml-2: border-b-2 border-white focus:outline-none transition-all duration-300 ease-in focus:scale-103" placeholder="Email"/>
                            <span className="absolute right-4 top-1/8">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                        </div>
                        <div className="flex flex-col gap-3 relative w-71">
                            <label htmlFor="mensagem" >Envie uma mensagem</label>
                            <span className="absolute right-13">
                                <FontAwesomeIcon icon={faComment} />
                            </span>
                            <textarea name="mensagem" id="mensagem" className="bg-white rounded-md w-60 h-50 text-black focus:outline-none transition-all duration-200 ease-in focus:scale-105"></textarea>
                        </div>

                        

                    </div>
                </form>
            </div>
                </div>
                
        </div>
    )
}