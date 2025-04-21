import Image from "next/image";
import { PiStarFourFill } from "react-icons/pi";
import DailyPostLogo from "@/../public/assets/images/logo-daily-post.png";
import CardProjects from "../common/CardProjects";
import TurboRepoIcon from "@/../public/assets/images/turborepo-icon.png";

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

      <CardProjects
        image="/assets/images/logo-daily-post.png"
        title="Daily Post"
        subtitle="Your App for writen dailies!"
        description="something"
        icon={['/assets/images/turborepo-icon.png', '/assets/images/logo-nestjs.png', '/assets/images/logo-react.png', '/assets/images/logo-mongodb.png', '/assets/images/logo-chakraui.png', '/assets/images/logo-tanstack.png', '/assets/images/logo-zustand.png', '/assets/images/logo-ts.png']}
        buttonHref="https://github.com/Rizzardd/daily-post"
      />
          <CardProjects
        image="/assets/images/logo-passporter.png"
        title="PassPorter"
        subtitle="App for tickets and events!"
        description="something"
        icon={['/assets/images/turborepo-icon.png', '/assets/images/tailwind-icon.png', '/assets/images/nextjs-icon.png']}
        buttonHref="https://github.com/Rizzardd/PassPorter"
      />
    </div>
  );
}
