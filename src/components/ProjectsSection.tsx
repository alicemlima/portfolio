import React from "react"
import { AiOutlineGithub } from "react-icons/ai"

interface ProjectItem {
  name: string
  image: string
  description: string
  github: string
  link: string
}
const PROJECT_ITEMS: Array<ProjectItem> = [
  {
    name: "Thankful Thoughts",
    description:
      "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    image: "/Screenshot.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://thankfulthoughts.io/",
  },
  {
    name: "PlatoIO",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/Screenshot.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
  },
  {
    name: "Kator Family Photos",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/Screenshot.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className=" grid h-screen md:max-h-[60vh] justify-items-center items-center m-4">
      <div >
        <h1 className=" my-10 text-center font-bold text-6xl sm:text-7xl">
        <span className='text-light-pink'>3. </span> Projetos
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          
        {PROJECT_ITEMS.map((item, key) => {
            return (
            <a href="#" className="shadow-lg max-w-md transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 p-8 space-y-3 border-2 rounded-xl">
              <div><AiOutlineGithub size={35} /></div>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white" key={key}>{item.name}</h1>

              <p className="text-gray-500 dark:text-gray-300">
                {item.description}
              </p>

              
            </a>)
          })}
          </div>
      </div>
    </section>
  )
}

export default ProjectsSection