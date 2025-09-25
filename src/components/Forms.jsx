import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Forms() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarForm(e) {
    if (nome === '' || email === '' || mensagem === ''){
        e.preventDefault();
        alert("Para enviar uma mensagem preencha todos os campos")
    }
    else {
        console.log("Nome: " + nome);
        console.log("Email: " + email);
        console.log("Mensagem: " + mensagem);
        alert("Mensagem enviada com sucesso!");
    }
  }

  return (
    <div className="bg-[#111111] pr-5 pl-5 pt-5  w-[100%] flex justify-center items-start h-300 lg:h-auto">
      <div className="transition-all ease-in-out duration-500 hover:scale-105 flex flex-col pt-10 items-center bg-gradient-to-b lg:bg-gradient-to-r from-[#190dc5] to-[#4f34c9] rounded-lg h-150 w-74 sm:w-150 sm:h-160 lg:w-200 lg:h-200 text-white">
        <div>
          <h1 className="font-bold text-3xl pb-1">Entre em contato</h1>
        </div>
        <div className="grid grid-cols-1 m-6">
          <form onSubmit={enviarForm}>
            <div className="relative w-full">
              <input type="text" id="nome" name="nome" className="mt-2 mb-10 w-60 lg:w-100 h-7 rounded-md placeholder:text-white border-b-2 border-white focus:outline-none transition-all duration-300 ease-in focus:scale-103" placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <span className="absolute right-4 top-1/8">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>

            <div className="relative w-full">
              <input type="email" id="email" name="email" className="mt-2 mb-10 lg:w-100 w-60 h-7 rounded-md placeholder:text-white border-b-2 border-white focus:outline-none transition-all duration-300 ease-in focus:scale-103" placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="absolute right-4 top-1/8">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>

            <div className="relative w-full mt-6">
              <textarea name="mensagem" id="mensagem" className="bg-white rounded-md w-60 sm:w-full h-50 lg:h-72 text-black p-2 focus:outline-none transition-all duration-200 ease-in focus:scale-105" placeholder="Envie uma mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              ></textarea>
            </div>

            <div className="flex justify-center items-center">
              <button type="submit" className="w-60 h-15 bg-white text-black font-bold m-5 sm:mt-10 rounded-2xl transition-all duration-200 ease-in-out hover:scale-110">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
