import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import modeloRoxo from "../img/modelo_roxo.PNG";
import modeloAzul from "../img/modelo_azul.PNG";
import modeloBranco from "../img/modelo_branco.PNG";
import modeloCinza from "../img/modelo_cinza.PNG";


export default function Depoimentos() {
  const testimonials = [
    { img: modeloRoxo, name: "Marcelo Azevedo", text: "Semprei procurei por um aplicativo prático" },
    { img: modeloCinza, name: "Sarah Aguiar", text: "Nota 10! Recomendo para todos" },
    { img: modeloAzul, name: "Arthur Macedo", text: "Minha playlist personalizada é a melhor!" },
    { img: modeloBranco, name: "Carla Lima", text: "Adorei o design, combina com meu estilo" }
  ];

  return (
    <div
    id="depoimentos"
    className="overflow-hidden w-auto h-auto flex flex-col justify-center items-center mb-20 lg:mb-0">
    <style>{`
      .swiper-button-next,
      .swiper-button-prev {
        color: white;
        width: 40px;
        height: 40px;
      }

      .swiper-button-next::after,
      .swiper-button-prev::after {
        font-size: 20px;
      }
    `}</style>
      <h1 className="text-2xl lg:text-4xl font-bold text-white text-center">
        Nossas avaliações
      </h1>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        loop={true}
        className="w-90 md:w-100 lg:180 xl:w-210 mt-6"
        breakpoints={{
          640: { slidesPerView: 1 } ,
          1200: { slidesPerView: 1 },
          1600: { slidesPerView: 3 }
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <div className="flex flex-col items-center">
              <div className="w-50 h-50 overflow-hidden rounded-full border-4 border-white">
                <img src={t.img} alt={t.name} className="w-full" />
              </div>
              <h3 className="w-[80%] text-center text-xl mt-2 font-semibold text-white">
                {t.name}
              </h3>
              <h3 className="w-[80%] text-center text-xl font-thin text-white">
                {t.text}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}