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
    <div
    id="forms"
    className="bg-[#111111] w-full flex justify-center lg:justify-start items-start h-auto">
      <div className="p-1 lg:p-3 transition-all ease-in-out duration-500 flex flex-wrap flex-col pt-10 items-center bg-gradient-to-b lg:bg-gradient-to-r from-[#190dc5] via-[#150ba7] to-[#190dc5] text-white hover:-translate-y-1.5">
        <div>
          <h1 className="font-bold text-3xl pb-1">Entre em contato</h1>
        </div>
        <div className="grid grid-cols-1 m-6">
          <form onSubmit={enviarForm}>
            <div className="relative w-full h-auto">
              <input type="text" id="nome" name="nome" className="mt-2 mb-10 w-90 h-7 placeholder:text-white border-b-2 border-white focus:outline-none transition-all duration-300 ease-in focus:scale-103" placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <span className="absolute right-4 top-1/8">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>

            <div className="relative w-full">
              <input type="email" id="email" name="email" className="mt-2 mb-5 w-90 h-7 placeholder:text-white border-b-2 border-white focus:outline-none transition-all duration-300 ease-in focus:scale-103" placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="absolute right-4 top-1/8">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>

            <div className="relative w-full mt-6">
              <textarea name="mensagem" id="mensagem" className="bg-white w-full h-40 mb-5 text-black p-2 focus:outline-none transition-all duration-200 ease-in focus:scale-105" placeholder="Envie uma mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              ></textarea>
            </div>

            <div className="flex justify-center items-center">
              <button type="submit" className="font-bold w-40 h-10 mb-5 border-2 text-white bold mt-4 transition-all duration-200 ease-in-out hover:bg-white hover:text-blue-950">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
