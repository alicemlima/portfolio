"use client"
import Link from 'next/link'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsArrowBarDown } from "react-icons/bs"

const Landing = () => {
  
  const [text] = useTypewriter({
    words: ["Desenvolvedora Full Stack.", "Engenheira de Software."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className='bg-gradient-to-b dark:from-dark-ultra from-light-ghost dark:to-dark-rich to-light-uranian p-4'>
      <div className='md:h-screen md:pt-0 pt-28 flex flex-col md:flex-row justify-center text-center items-center md:px-8 sm:px-0  '>

        <div className='flex pr-0 justify-end sm:pr-8'>
          <img src="/alice_1.png" alt='' className='shadow-2xl rounded-full before:w-full before:h-full border-solid border-2' />
        </div>

        <div className='w-full xl:w-1/2 flex flex-col gap-10'>
          <h1 className='text-6xl lg:text-9xl sm:text-7xl mt-6 md:mt-0'><span  className='font-thin'>Olá, eu sou a </span>Alice</h1>
          
          <h2 className='text-4xl font-bold'>
            {text}
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor='#f78ab0'
           /></h2>
          
          <p className=' text-lg'> apaixonada por criar soluções únicas e eficazes. Dê uma olhada em minha trajetória e trabalho, estou pronta para assumir qualquer desafio. Vamos criar algo incrível juntos!</p>
          
          <div >
            <button className='p-2 rounded-lg text-2xl m-3 ring-2 shadow-lg hover:bg-light-pink  ring-light-pink  text-light-pink hover:text-light-ghost hover:dark:text-dark-rich font-bold'>Projetos</button>
            <button className='p-2 rounded-lg text-2xl m-3 ring-2 shadow-lg hover:bg-light-pink  ring-light-pink  text-light-pink hover:text-light-ghost hover:dark:text-dark-rich font-bold'>Baixe CV </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing