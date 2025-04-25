
import { PiStarFourFill } from "react-icons/pi";

export default function SecondSection() {
  return (
    <div className="flex flex-col justify-items-start items-start">
      <div className="bg-gradient-radial from-[#994FF5] to-[#FFC41F] max-w-[800px] md:top-[100px] lg:absolute bottom-0 ltr:right-0 rtl:left-0 lg:w-6/12 w-full mt-35">
        <p className="max-w-2xl mx-auto mt-5 text-5xl font-extrabold text-center text-transparent uppercase md:text-7xl lg:text-8xl bg-gradient-to-b from-white/70 bg-clip-text">
          Monique Silva
        </p>
        <div className="">{/*img */}</div>
      </div>
      <div className="rounded-full bg-ring w-36 h-10 items-center flex justify-center gap-3 ml-7">
        <PiStarFourFill className="text-burguer" />
        <p className="text-white font-font-family font-semibold text-lg">
          About Me
        </p>
      </div>
      <div className="flex flex-col pt-8 px-5 gap-5">
        <h1 className="font-font-family text-text font-semibold text-xl">
          Hi there! I'm Monique Silva
        </h1>
        <p className="font-font-family text-white font-medium">
          ​Hello, I'm Monique Silva, a passionate Software Developer based in
          Cuiabá, Brazil. I specialize in crafting modern, responsive, and
          user-friendly web applications. Experient in technologies such as
          HTML, CSS, JavaScript, Typescript and frameworks like React and
          Nextjs, I have a keen eye for detail and a commitment to delivering
          high-quality code.
        </p>
      </div>

      <div className="bg-header mt-10 pt-5 pb-5 w-[90%] mx-auto rounded flex flex-col font-font-family">
        <div className="px-5">
          <p className="   text-ring font-semibold ">Contact</p>
          <p className="text-white font-normal py-3">
            rizza.professional.pj@gmail.com
          </p>
        </div>
        <div className="px-5">
          <p className="text-ring font-semibold  ">Phone</p>
          <p className="text-white font-normal ">+55 65 99263-2881</p>
        </div>
        <div className="px-5">
          <p className="text-ring font-semibold py-2">Date of Birth</p>
          <p className="text-white font-normal ">April 30,1999</p>
        </div>
        <div className="px-5">
          <p className="text-ring font-semibold py-2">Spoken Languages</p>
          <p className="text-white font-normal">
            Portuguese - English - French
          </p>
        </div>
        <div className="px-5">
          <p className="text-ring font-semibold py-2">Interest</p>
          <p className="text-white font-normal">Music, Games, Politics</p>
        </div>
        <div className="px-5">
          <p className="text-ring font-semibold py-2">Social Media</p>
          <p className="text-white font-normal "></p>
        </div>
      </div>
    </div>
  );
}
