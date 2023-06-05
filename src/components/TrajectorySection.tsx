import React from 'react'


interface TrajetoryItem {
    title: string
    subtitle: string
    date: string
}

const TRAJECTORY_ITEMS: Array<TrajetoryItem> = [
    {
        title: "GRADUAÇÃO",
        subtitle: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        date: "April 202"
    },
    {
        title: "FRONT-END",
        subtitle: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        date: "April 202"
    },
    {
        title: "BACK-END",
        subtitle: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        date: "April 202",
    },{
        title: "FULL STACK",
        subtitle: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        date: "April 202",
    },
]

const TrajectorySection = () => {
    return (
        <section className='grid grid-cols-6 border-b-2 overflow-hidden h-auto' id="trajectory">
            <div className='flex items-center justify-center -rotate-90 lg:rotate-0 lg:col-span-2'>
                <h1 className='text-7xl font-bold'><span className='text-light-pink'>2.</span>Trajetória</h1>
            </div>
            <div className="relative border-l-2 ml-4 sm:ml-36 py-32 px-2 sm:px-8 col-span-5 lg:col-span-4 ">
                {TRAJECTORY_ITEMS.map((item) => {
                    return (
                        <div className="mb-10 ml-4">
                            <span className=" animate-ping absolute w-3 h-3 bg-dark-black dark:bg-dark-almond rounded-full sm:mt-6 mt-2 -left-2" />
                            <span className=" absolute w-3 h-3 bg-dark-black dark:bg-dark-almond rounded-full sm:mt-6 mt-2 -left-2" />
                            <time className="sm:absolute mb-1 text-2xl sm:mt-4 mt-1 left-0 sm:-left-36">{item.date}</time>
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