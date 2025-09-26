// src/components/Footer.jsx
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiTailwindcss, SiFontawesome, SiGooglefonts } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#190dc5] text-gray-300 py-10">

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-lg font-semibold mb-4">Contato</h3>
          <p>Email: <a href="contato@melodia.com" className="hover:text-white">contato@melodia.com</a></p>
          <p>Telefone: <a href="tel:+5511999999999" className="hover:text-white">+55 (11) 99999-9999</a></p>
          <p>Endereço: Av. Paulista, São Paulo - SP</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Informações</h3>
          <a href="/politica-de-privacidade" className="block mb-4 hover:text-white">
            Política de Privacidade
          </a>
          <p className="mb-2">Tecnologias utilizadas:</p>
          <div className="flex space-x-3 text-xl">
            <FaHtml5 className="text-orange-500" title="HTML5" />
            <FaCss3Alt className="text-blue-500" title="CSS3" />
            <SiTailwindcss className="text-sky-400" title="TailwindCSS" />
            <SiFontawesome className="text-green-500" title="Font Awesome" />
            <SiGooglefonts className="text-purple-500" title="Google Fonts" />
            <FaJs className="text-yellow-400" title="JavaScript" />
            <FaReact className="text-cyan-400" title="React" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} - Melodia | Desenvolvido com dedicação e carinho.
      </div>
    </footer>
  );
}
