import { IoLogoReact } from "react-icons/io5";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Card(props: CardProps) {

  return (
    <div className="w-[90%] p-6 bg-header border border-ring rounded-lg shadow-sm items-center flex flex-col justify-center mx-auto mt-5 mb-5">
      {props.icon}
      <a href="#">
        <h5 className=" mb-2 text-2xl font-semibold tracking-tight text-white  ">
          {props.title}
        </h5>
      </a>

      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {props.description}
      </p>
    </div>
  );
}
