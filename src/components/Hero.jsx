import { artistas } from "../js/artistas"
import { numeroSorteado } from "../js/NumeroSorteado"

export default function Hero () {
    return (
        <div
        id="hero" 
        className=" h-[950px] bg-black relative">
            <img src={artistas[numeroSorteado].fotoFundo} alt="foto-do-artista-sorteado"
            className="brightness-65 filter object-cover h-[950px] w-screen mt-20 z-0"/>
            <div className="hidden z-20 absolute xl:flex top-0 h-full justify-center w-screen">
                <div className="flex justify-between w-[78%] bottom-2">
                    <div className="flex h-full justify-end items-end">
                        <div className=" bg-[#111111] w-[379px] h-200 relative">
                            <div className="flex flex-col ml-17 mt-15 text-white">
                                <div className="flex flex-col">
                                    <h1 className="text-[95px] italic font-bold" >MELODIA</h1>
                                    <h3 className="mt-[113px] text-[25px] font-light italic absolute">Sua música, sua forma</h3>
                                    <div className="bg-white text-[#111111] mt-3 w-110 p-8 text-center text-[20px] font-light">
                                        <p>A nova experiência musical começa aqui.  Melodia é o app perfeito para quem vive e respira música — jovens exploradores sonoros, apaixonados por novos ritmos e playlists que refletem sua essência.</p>
                                    </div>
                                </div>
                                <button className="bg-[#190dc5] w-3/4 p-5 mt-4 text-[17px] font-semibold border-2 border-[#190dc5] cursor-pointer
                                hover:bg-[#111111] hover:transition-all hover:duration-500">OUVIR AGORA</button>
                                <button className="border-1 border-white w-3/4 p-4 mt-4 text-[13px] font-light cursor-pointer
                                hover:bg-white hover:text-[#111111] hover:transition-all hover:duration-500">EXPLORE O SOM</button>
                            </div>
                            <div className="flex w-full justify-center items-end h-[25%] text-white text-[12px] font-light">
                                <p>Explore | Sinta | Compartilhe | Comece agora</p>
                            </div>
                        </div>
                    </div>
                    <div className=" hidden xl:flex flex-col items-center justify-center">
                        <div className="flex flex-col w-full">
                            <div className="flex justify-start text-white">
                                <h3 className="bg-[#190dc5] p-1 pr-4 pl-4 mb-[-8px] text-[20px] italic">MÚSICAS DE</h3>
                            </div>
                            <div className="flex justify-center">
                                <h1 className="text-[60px] font-extrabold text-white">{artistas[numeroSorteado].nome}</h1>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white w-[443px] h-[670px] items-center relative">
                            <img src={artistas[numeroSorteado].fotoAlbum} alt="foto-do-album-sorteado"
                            className="pr-8 pl-8 pt-8 pb-3"/>
                            <div className="bg-[#D9D9D9] h-[2px] w-[380px]"></div>
                            <div className="flex justify-between w-full pr-8 pl-8 text-[20px]">
                                <div className="flex gap-5 pt-5 pB-5">
                                    <p className="font-extralight">01.</p>
                                    <h1 className="font-extrabold cursor-not-allowed">{artistas[numeroSorteado].nome01}</h1>
                                </div>
                                <div className="pt-5 pb-5 font-normal">
                                    <p>{artistas[numeroSorteado].duracao01}</p>
                                </div>
                            </div>
                            <div className="bg-[#D9D9D9] h-[2px] w-[380px]"></div>
                            <div className="flex justify-between w-full pr-8 pl-8 text-[20px]">
                                <div className="flex gap-5 pt-5 pB-5">
                                    <p className="font-extralight">02.</p>
                                    <h1 className="font-medium cursor-not-allowed">{artistas[numeroSorteado].nome02}</h1>
                                </div>
                                <div className="pt-5 pb-5 font-normal">
                                    <p>{artistas[numeroSorteado].duracao02}</p>
                                </div>
                            </div>
                            <div className="bg-[#D9D9D9] h-[2px] w-[380px]"></div>
                            <div className="flex justify-between w-full pr-8 pl-8 text-[20px]">
                                <div className="flex gap-5 pt-5 pB-5">
                                    <p className="font-extralight">03.</p>
                                    <h1 className="font-medium cursor-not-allowed">{artistas[numeroSorteado].nome03}</h1>
                                </div>
                                <div className="pt-5 pb-5 font-normal">
                                    <p>{artistas[numeroSorteado].duracao03}</p>
                                </div>
                            </div>
                            <div className="bg-[#D9D9D9] h-[2px] w-[380px]"></div>
                        </div>
                        <div>
                            
                        </div>
                        <button className="hidden xl:flex absolute z-50 mt-198 bg-[#190dc5] text-[18px] pt-2 pb-2 pr-15 pl-15 text-white cursor-pointer border-2 border-[#190dc5]
                        hover:bg-opacity-70 hover:bg-transparent hover:backdrop-blur-sm hover:text-[#190dc5] hover:transition-all hover:duration-500">Reproduzir</button>
                    </div>
                </div>
            </div>



            <div className="xl:hidden z-20 absolute flex top-0 h-full justify-center items-center w-screen">
                <div className="flex justify-between flex-col w-[100%] h-auto bottom-2">
                    <div className="flex h-full justify-center">
                        <div className=" bg-[#111111] w-3/4 mt-10 flex justify-center items-center">
                            <div className="flex flex-col justify-center items-center mt-5 text-white">
                                <div className="flex flex-col">
                                    <h1 className="text-[42px] italic font-bold" >MELODIA</h1>
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-white text-[#111111] mt-3 w-[60%] p-8 text-center text-[14px] font-light">
                                        <p>A nova experiência musical começa aqui. Melodia é o app ideal para quem ama descobrir novos ritmos e criar playlists com a sua cara.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col w-[60%] h-[50%] justify-center items-center text-center">
                                    <button className="bg-[#190dc5] w-3/4 p-3 mt-4 font-semibold cursor-pointer text-[12px] text-center">OUVIR AGORA</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col items-center justify-center h-screen">
                        <div className="sm:hidden flex flex-col w-[60%]">
                            <div className="flex justify-start text-white">
                                <h3 className="bg-[#190dc5] p-1 pr-4 pl-4 mb-[-8px] text-[12px] italic">MÚSICAS DE</h3>
                            </div>
                            <div className="flex justify-center">
                                <h1 className="text-[33px] font-extrabold text-white text-center">{artistas[numeroSorteado].nome}</h1>
                            </div>
                        </div>
                        <div className="xl:hidden hidden sm:flex justify-center w-[60%]">
                            <div className="flex justify-center">
                                <h1 className="text-[50px] font-extrabold text-white text-center">{artistas[numeroSorteado].nome}</h1>
                            </div>
                        </div>
                        <div className="flex flex-row bg-white w-[60%] h-auto pt-6 pb-6 items-center justify-center">
                            <img src={artistas[numeroSorteado].fotoAlbum} alt="foto-do-album-sorteado"
                            className="hidden sm:flex max-w-[30%] min-w-[25%] ml-5 object-contain"/>
                            <div className="hidden sm:flex flex-col w-[60%] ml-4">
                                <div className="flex justify-between pr-8 pl-8 text-[16px] border-b-2 border-b-[#D9D9D9]">
                                    <div className="flex gap-5 pt-5 pb-5">
                                        <p className="font-extralight">01.</p>
                                        <h1 className="font-extrabold cursor-not-allowed">{artistas[numeroSorteado].nome01}</h1>
                                    </div>
                                    <div className="pt-5 pb-5 font-normal">
                                        <p>{artistas[numeroSorteado].duracao01}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between pr-8 pl-8 text-[16px] border-b-2 border-b-[#D9D9D9]">
                                    <div className="flex gap-5 pt-5 pb-5">
                                        <p className="font-extralight">02.</p>
                                        <h1 className="font-medium cursor-not-allowed">{artistas[numeroSorteado].nome02}</h1>
                                    </div>
                                    <div className="pt-5 pb-5 font-normal">
                                        <p>{artistas[numeroSorteado].duracao02}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between pr-8 pl-8 text-[16px] border-b-2 border-b-[#D9D9D9]">
                                    <div className="flex gap-5 pt-5 pb-5">
                                        <p className="font-extralight">03.</p>
                                        <h1 className="font-medium cursor-not-allowed">{artistas[numeroSorteado].nome03}</h1>
                                    </div>
                                    <div className="pt-5 pb-5 font-normal">
                                        <p>{artistas[numeroSorteado].duracao03}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className=" sm:hidden flex flex-col w-full justify-center ">
                                <div className="flex justify-center items-center">
                                    <img src={artistas[numeroSorteado].fotoAlbum} alt="foto-do-album-sorteado"
                                    className=" w-[70%] pt-2 pr-5 pl-5 object-cover h-[80%]"/>
                                </div>
                                <div>
                                    <div className="flex justify-center text-[16px]">
                                        <div className="flex gap-5 pt-5">
                                            <h1 className="font-extrabold cursor-not-allowed uppercase">{artistas[numeroSorteado].nome01} - {artistas[numeroSorteado].duracao01}</h1>
                                        </div>
                                        <div className="hidden sm:flex pt-5 pb-5 font-normal">
                                            <p>{artistas[numeroSorteado].duracao01}</p>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}