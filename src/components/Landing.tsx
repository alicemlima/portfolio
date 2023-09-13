"use client"
import Link from 'next/link'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ButtonRounded from "@/src/components/ButtonRounded"
import { AiFillGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BiLogoLinkedin, BiSolidFilePdf} from 'react-icons/bi';

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
          <h1 className='text-4xl lg:text-7xl sm:text-5xl mt-6 md:mt-0'><span  className='font-thin'>Olá, eu sou a </span>Alice</h1>
          
          <h2 className='text-4xl font-bold'>
            {text}
            <Cursor
              cursorStyle="|"
              cursorColor='#f78ab0'
           /></h2>
          
          <p className=' text-lg'> apaixonada por criar soluções únicas e eficazes. Dê uma olhada em minha trajetória e trabalho, estou pronta para assumir qualquer desafio. Vamos criar algo incrível juntos!</p>
          
          <div className=' flex space-x-6 justify-center' >
            <ButtonRounded icon={<AiFillGithub size={55} />} link={"https://github.com/alicemlima"} title={"linkedin"}></ButtonRounded>
            <ButtonRounded icon={<div className=' mt-2 p-2 rounded-full ring-4 hover:ring-dark-black dark:hover:ring-light-ghost  ring-light-pink '><BiLogoLinkedin size={30}/></div>} link={"https://www.linkedin.com/in/alice-de-lima/"} title={"linkedin"}></ButtonRounded>
            <ButtonRounded icon={<div className=' mt-2 font-black p-2 rounded-full text-xl ring-4 hover:ring-dark-black dark:hover:ring-light-ghost  ring-light-pink '><BiSolidFilePdf size={30}/></div>} link={"/curriculum.pdf"} title={"Curriculum"}></ButtonRounded>
            <ButtonRounded icon={<div className=' mt-2 p-2 rounded-full ring-4 hover:ring-dark-black dark:hover:ring-light-ghost  ring-light-pink '><AiOutlineMail size={30}/></div>} link={"mailto:alicezfl@gmail.com"} title={"alicezfl@gmail.com"}></ButtonRounded>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing