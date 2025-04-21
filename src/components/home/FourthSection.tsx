import { PiStarFourFill } from "react-icons/pi";
import Card from "../common/Card";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAxios, SiMongodb, SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

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
        <p className="pt-2 font-font-family">something</p>
      </div>
 <div className="flex flex-col">
 <Card
        icon={<IoLogoReact className="text-react w-8 h-8 mb-3 flex mx-auto" />}
        title={"React.js"}
        description="Expertise with using React.js, with hands-on experience building
        scalable, component-based applications. I'm proficient in using hooks,
        state management, optimizing performance, and integrating with
        modern tooling and libraries. I write clean, maintainable code and
        follow best practices to build efficient, user-focused interfaces."
      />

      <Card
        icon={<RiNextjsFill className="text-white w-8 h-8" />}
        title="Next.js"
        description="TODO"
      />

<Card
        icon={<RiTailwindCssFill className="text-tailwind w-8 h-8" />}
        title="TailwindCSS"
        description="TODO"
      />

<Card
        icon={<SiAxios className="text-axios w-8 h-8" />}
        title="Axios"
        description="TODO"
      />
      <Card
        icon={<SiTypescript className="text-typescript w-8 h-8 bg-white rounded" /> }
        title="TypeScript"
        description="TODO"
      />
          <Card
        icon={<IoLogoJavascript className="text-black w-8 h-8 bg-javascript rounded" /> }
        title="JavaScript"
        description="TODO"
      />

<Card
        icon={<RiNodejsFill className="text-node w-8 h-8 " /> }
        title="Node.js"
        description="TODO"
      />
      <Card
        icon={<FaGitAlt className="text-git w-8 h-8 " /> }
        title="Git"
        description="TODO"
      />

<Card
        icon={<SiMongodb className="text-mongodb w-8 h-8 " /> }
        title="MongoDB"
        description="TODO"
      />
      
 </div>
    </div>
  );
}
