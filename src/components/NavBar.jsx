import React, { useState, useEffect } from 'react';

export default function NavBar () {
    const [aberto, setAberto] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const scroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 flex text-white font-normal p-7
        ${scrolled ? 'bg-opacity-70 backdrop-blur-sm' : 'bg-[#190dc5]'}`}>
            <div className='hidden md:flex text-[14px] gap-[45px] justify-center w-screen p-2'>
                <button className="cursor-pointer"
                onClick={
                    () => scroll('hero')
                    }>INÍCIO</button>
                <button className="cursor-pointer"
                onClick={
                    () => scroll('apresentacao')
                    }>APRESENTAÇÃO/DEPOIMENTOS</button>
                <button className="cursor-pointer"
                onClick={
                    () => scroll('funcionalidades')
                    }>FUNCIONALIDADES</button>
                <button className="cursor-pointer"
                onClick={
                    () => scroll('forms')
                    }>CONTATOS</button>
            </div>
            
            <div className="md:hidden flex justify-between w-screen">
                <button onClick={() => setAberto(!aberto)} className="text-white focus:outline-none z-50">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        {aberto ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
                <h1 className='uppercase font-bold'>Melodia</h1>
            </div>

            <div className={`fixed top-0 right-0 h-screen w-64 bg-black bg-opacity-90 transform ${aberto ? 'translate-x-0' : 'translate-x-full'} 
            transition-transform duration-500 flex flex-col items-start p-8 gap-6 z-50`}>
                <button className="cursor-pointer border-2 p-2 border-t-black border-b-black border-r-black border-l-black
                hover:border-b-white hover:transition-all hover:duration-500"
                onClick={
                    () => { scroll('hero'); 
                        setAberto(false); }
                    }>INÍCIO</button>
                <button className="cursor-pointer border-2 p-2 border-t-black border-b-black border-r-black border-l-black
                hover:border-b-white hover:transition-all hover:duration-500 text-[14px]" 
                onClick={
                    () => { scroll('apresentacao'); 
                        setAberto(false); }
                    }>APRESENTAÇÃO/DEPOIMENTOS</button>
                <button className="cursor-pointer border-2 p-2 border-t-black border-b-black border-r-black border-l-black
                hover:border-b-white hover:transition-all hover:duration-500" 
                onClick={
                    () => { scroll('funcionalidades'); 
                        setAberto(false); }
                    }>FUNCIONALIDADES</button>
                <button className="cursor-pointer border-2 p-2 border-t-black border-b-black border-r-black border-l-black
                hover:border-b-white hover:transition-all hover:duration-500" 
                onClick={
                    () => { scroll('forms'); 
                    setAberto(false); }
                    }>CONTATOS</button>
            </div>
        </nav>

    )
}