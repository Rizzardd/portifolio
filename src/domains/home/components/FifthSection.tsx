import CardProjects from "@/shared/components/CardProjects";
import { projects } from "@/domains/home/constants/projects";
import { PiStarFourFill } from "react-icons/pi";


export default function FifthSection() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="rounded-full bg-ring w-60 h-10 flex items-center justify-center gap-3">
        <PiStarFourFill className="text-burguer" />
        <p className="text-white font-font-family font-semibold text-lg">
          Selected Projects
        </p>
      </div>
      <div className="pt-8 text-center flex flex-col pb-8">
        <h1 className="font-font-family font-semibold text-2xl">
          Growing skills and early achievements
        </h1>
        <p className="pt-2 font-font-family">something</p>
      </div>
      {projects.map((project, index) => (
        <CardProjects
          key={index}
          image={project.image}
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          icon={project.icon}
          buttonHref={project.buttonHref}
        />
      ))}
    </div>
  );
}
