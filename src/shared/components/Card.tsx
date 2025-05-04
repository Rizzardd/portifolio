import Image from "next/image";
import { IoLogoReact } from "react-icons/io5";

interface CardProps {
  title: string;
  image: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 border bg-header  border-ring  rounded-md shadow-sm ">
      <Image
        src={props.image}
        alt={props.title}
        width={22}
        height={22}
        className="rounded-md"
      />
      <a href="#">
        <h5 className="text-sm text-gray-300 font-medium font-font-family">
          {props.title}
        </h5>
      </a>
    </div>
  );
}
