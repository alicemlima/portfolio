import React from "react"
import { AiOutlineLinkedin, AiFillGithub, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai"


const ContactSection = () => {
  return (
    <section id="contact" className="h-screen max-h-[70vh] m-4 md:grid md:grid-cols-2 justify-items-center text-center items-center mt-20 md:mt-0 ">
      
      <div className=" text-center col-span-1"> 
      <h1 className="font-bold text-6xl sm:text-7xl">
        <span className='text-light-pink'> 4. </span> Redes Sociais e Contato
      </h1> 
      <div className="my-10 flex justify-evenly ">
        <AiOutlineLinkedin size={70} />
        <AiFillGithub size={70} />
        <AiOutlineWhatsApp size={70} />
      </div>

      </div>
      
      <div className=" h-fit md:w-10/12 rounded-lg text-2xl ring-2 dark:ring-light-pink ring-dark-black">
        <form className="px-8 pt-6 pb-8 mb-4">
          <h1 className="font-bold mb-8 text-light-pink">Envie-me um Email</h1>
          <div className="mb-8">
            <input className=" border-b-2 w-full py-2 px-3 bg-light-uranian dark:bg-dark-rich dark:text-light-pink placeholder:dark:text-light-pink placeholder:text-dark-black text-2xl" id="username" type="text" placeholder="Nome" />
          </div>
          <div className="mb-8">
            
          <input className=" border-b-2 w-full py-2 px-3 bg-light-uranian dark:bg-dark-rich dark:text-light-pink  placeholder:dark:text-light-pink placeholder:text-dark-black text-2xl" id="username" type="text" placeholder="Email" />
          </div>

          <div className="mb-4">
          <textarea className=" border rounded-lg w-full py-2 px-3 bg-light-uranian dark:bg-dark-rich dark:text-light-pink placeholder:dark:text-light-pink placeholder:text-dark-black text-2xl" id="username" placeholder="Mensagem" />
          </div>
         
          <div className="flex items-center justify-between">
            <button className="p-2 rounded-lg m-3 ring-2 shadow-lg hover:bg-light-pink  ring-light-pink  text-light-pink hover:text-light-ghost hover:dark:text-dark-rich font-bold" type="button">
              Enviar
            </button>
          </div>
        </form>
      
      </div>
    </section>
  )
}

export default ContactSection