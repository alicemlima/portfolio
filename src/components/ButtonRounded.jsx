export default function ButtonRounded({ icon, link, title}) {
    return (
        <a href={link} title={title} target="_blank" className=' text-light-pink hover:text-dark-black  hover:dark:text-light-ghost font-bold'>
            {icon}
        </a>

    );
  }