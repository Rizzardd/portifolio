import { PiStarFourFill } from "react-icons/pi";

import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAxios, SiMongodb, SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import Card from "@/shared/components/Card";
import { stack } from "../constants/stack";

export default function FourthSection() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="rounded-full bg-ring w-36 h-10 flex items-center justify-center gap-3">
        <PiStarFourFill className="text-burguer" />
        <p className="text-white font-font-family font-semibold text-lg">
          Skills
        </p>
      </div>
      <div className="pt-8 text-center flex flex-col pb-8">
        <h1 className="font-font-family font-semibold text-2xl">
          Growing skills and early achievements
        </h1>
        <p className="pt-2 font-font-family">
          I've worked with different technologies over time. Here are some I'm
          experienced with:
        </p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        {stack.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} />
        ))}
      </div>
      <p className="font-font-family font-normal text-sm mt-5">
        {" "}
        ...and many more!
      </p>
    </div>
  );
}
