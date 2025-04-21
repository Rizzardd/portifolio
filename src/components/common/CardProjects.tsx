import Image from "next/image";


interface CardProjectsProps {
  title: string;
  subtitle: string;
  description: string;
  buttonHref: string;
  icon: string[];
  image: string;
}

export default function CardProjects(props: CardProjectsProps) {
  return (
    <div className="flex  flex-col bg-header border border-ring rounded-lg shadow-sm justify-center items-center w-[90%] mx-auto mt-5 mb-5">
           <a href="#">
        <Image
          src={props.image}
          alt={props.title}
          width={200}
          height={200}
          className="rounded-md py-5"
        />
      </a>
      <div className="px-5 py-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
          </h5>
        </a>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.subtitle}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {props.description}
        </p>
        <div className="flex flex-row gap-2 items-center justify-center">
       {props.icon.map((icon, index) => (
         <Image
         key={index}
         src={icon}
         alt={`Icon ${index}`}
         width={30}
         height={30}
         className="rounded-md py-5"
        />
       ))}
       
        </div>
        <a
          href={props.buttonHref}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-ring rounded-lg mt-2"
        >
          View Project
         
        </a>
      </div>
    </div>
  );
}
