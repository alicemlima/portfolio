import React from 'react'


interface TrajetoryItem {
    title: string
    subtitle: string
    date: string
}

const TRAJECTORY_ITEMS: Array<TrajetoryItem> = [
    {
        title: "GRADUAÇÃO",
        subtitle: "Iniciei minha jornada acadêmica com um Bacharelado em Tecnologia da Informação na Universidade Federal do Rio Grande do Norte. Fui corajosa ao mergulhar de cabeça em uma área desconhecida, explorando conceitos fundamentais de programação, algoritmos e estruturas de dados. Também comecei a me familiarizar com linguagens como Java, C++, e Python.",
        date: "2019"
    },
    {
        title: "FRONT-END",
        subtitle: "Em 2021, dei meus primeiros passos no desenvolvimento web, escolhendo o framework React como meu ponto de partida. Trabalhei em equipe, colaborando com outros desenvolvedores, e utilizei o Git para controle de versão. Aprofundei meu conhecimento em tecnologias front-end, incluindo HTML5, CSS3, JavaScript e bibliotecas como Redux para gerenciamento de estado. Comecei a criar interfaces de usuário interativas e responsivas.",
        date: "2021"
    },
    {
        title: "BACK-END",
        subtitle: "Minha carreira profissional começou a decolar em 2022, quando comecei a trabalhar com Spring Boot na corporação Keyrus Brasil. Nessa função, me concentrei em desenvolvimento back-end, utilizando Java e Spring Boot para criar serviços web robustos e escaláveis. Além disso, aprimorei minhas habilidades em bancos de dados SQL e NoSQL, como MySQL e MongoDB, para armazenar e acessar dados de maneira eficiente.",
        date: "2022",
    },{
        title: "FULL STACK",
        subtitle: "Atualmente, estou atuando como desenvolvedora Full Stack no Instituto de Matemática Pura e Aplicada. Isso significa que trabalho tanto no front-end quanto no back-end de aplicações. No front-end, continuo aprimorando minhas habilidades em React e outras tecnologias modernas, como TypeScript, e agora também utilizo Next.js para a construção de aplicações web avançadas. No desenvolvimento mobile, tenho experiência com o framework Flutter. Além disso, continuo a colaborar em equipes de desenvolvimento, aplicando o Git para controle de versão em projetos colaborativos.",
        date: "2023",
    },
]


const TrajectorySection = () => {
    return (
        <section className='grid grid-cols-6 border-y-2 overflow-hidden h-auto' id="trajectory">
            <div className='flex items-center justify-center -rotate-90 lg:rotate-0 lg:col-span-2'>
                <h1 className='text-7xl font-bold'><span className='text-light-pink'>2.</span>Trajetória</h1>
            </div>
            <div className="relative border-l-2 ml-4 sm:ml-36 py-32 px-2 sm:px-8 col-span-5 lg:col-span-4 ">
                {TRAJECTORY_ITEMS.map((item, key) => {
                    return (
                        <div key={key} className="mb-10 ml-4">
                            <span className=" animate-ping absolute w-3 h-3 bg-dark-black dark:bg-dark-almond rounded-full sm:mt-6 mt-2 -left-2" />
                            <span className=" absolute w-3 h-3 bg-dark-black dark:bg-dark-almond rounded-full sm:mt-6 mt-2 -left-2" />
                            <time className="sm:absolute mb-1 text-2xl sm:mt-4 mt-1 left-0 sm:-left-24">{item.date}</time>
                            <h3 className="font-semibold text-4xl md:text-7xl">{item.title}</h3>
                            <p className="m-4 ">{item.subtitle}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default TrajectorySection