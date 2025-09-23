import wave from "../img/wave-sound.png"
import exchange from "../img/world-wide-web.png"
import playlist from "../img/add-to-playlist.png"
import offline from "../img/no-wifi.png"
import share from "../img/share.png"
import speaker from "../img/speaker-filled-audio-tool.png"

export default function Apresentacao () {
    return (
       <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-30">
            <section className="grid grid-cols-2 gap-20 lg:gap-50 font-bold text-white ">
                {/* Col-span faz com que ocupe 2 colunas */}
                <div className="col-span-2 flex justify-center items-center"> 
                  <h1 className="text-2xl md:text-5xl lg:text-6xl">PRINCIPAIS BENEFÍCIOS</h1>
                </div>

                <div className="flex items-center text-sm md:text-lg lg:text-4xl lg:px-10 lg:ml-50">
                  Músicas infinitas de todos os gêneros
                </div>
                <img src={wave} alt="OndaSonora" className="w-20 lg:w-40 mx-auto lg:mx-0 lg:ml-50" />

                <img src={exchange} alt="OndaSonora" className="w-20 lg:w-40 mx-auto lg:mx-0 lg:ml-100" />
                <div className="flex items-center text-sm md:text-lg lg:text-4xl lg:px-10 text-right lg:mr-50">
                  Acesse em qualquer dispositivo
                </div>

                <div className="flex items-center text-sm md:text-lg lg:text-4xl lg:px-10 lg:ml-50">
                  Playlists personalizadas
                </div>
                <img src={playlist} alt="OndaSonora" className="w-20 lg:w-40 mx-auto lg:mx-0 lg:ml-50" />

                <img src={offline} alt="OndaSonora" className="w-20 lg:w-40 mx-auto lg:mx-0 lg:ml-100" />
                <div className="flex items-center text-sm md:text-lg lg:text-4xl lg:px-10 text-right lg:mr-50">
                  Ouça suas músicas favoritas offline
                </div>

                <div className="flex items-center text-sm md:text-lg lg:text-4xl lg:px-10 lg:ml-50">
                  Compartilhe playlists
                </div>
                <img src={share} alt="OndaSonora" className="w-20 lg:w-40 mx-auto lg:mx-0 lg:ml-50" />


                <img src={speaker} alt="OndaSonora" className="w-20 lg:w-40 mx-auto lg:mx-0 lg:ml-100" />
                <div className="flex items-center text-sm md:text-lg lg:text-4xl lg:px-10 text-right lg:mr-50">
                  Qualidade de som premium
                </div>

            </section>
    </div>

    )
}