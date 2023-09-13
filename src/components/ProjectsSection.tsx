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
    name: "14º CBGDP",
    description:
      "Desenvolvimento e Design do site do 14º Congresso Brasileiro de Inovação e Gestão de Desenvolvimento do Produto. O projeto foi realizado em NEXTJS. ",
    image: "",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://www.igdp.org.br/cbgdp2023/",
  },
  {
    name: "SmartList",
    description: "Projeto em SpringBoot utilizando conhecimentos de RESTful, testes unitários e banco de dados.",
    image: "",
    github: "https://github.com/alicemlima/smart-list/tree/master",
    link: "https://github.com/alicemlima/smart-list/tree/master",
  },
  {
    name: "Portfólio",
    description: "Site para portfólio pessoal desenvolvido e idealizado por mim .",
    image: "",
    github: "/",
    link: "https://github.com/alicemlima/portfolio",
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="grid h-screen justify-items-center items-center m-4">
      <div className=" min-h-[70vh] space-y-20 xl:space-y-32" >
        <h1 className=" my-10 text-center font-bold text-6xl sm:text-7xl">
        <span className='text-light-pink'>2. </span> Projetos
        </h1>

        <div className=" grid grid-cols-1 gap-8 mt-16 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          
          {PROJECT_ITEMS.map((item, key) => {
              return (
              <a href={item.link} className="shadow-lg max-w-md transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 p-8 space-y-3 border-2 rounded-xl">
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