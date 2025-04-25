import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiPhoneCallDuotone } from "react-icons/pi";

interface FooterProps {
  buttonHref: string;
}

export default function Footer(props: FooterProps) {
  return (
    <div className="flex flex-col items-start mb-20 ">
      <div className=" flex flex-col gap-2">
        <h1 className="text-white font-font-family font-semibold text-2xl ml-5">
          Get in touch
        </h1>
        <p className="text-white font-font-family text-sm ml-5">
          I’m open to new opportunities and collaborations. Let’s connect!
        </p>
      </div>
      <div className="flex flex-col mt-3 gap-4">
        <button
          type="button"
          className="gap-2 text-white bg-ring hover:bg-[#2c2638]/90  font-semibold rounded-lg text-[15px] px-5 py-2.5 text-center inline-flex items-center  ml-5 mb-2"
        >
          <PiPhoneCallDuotone className="w-8 h-8 text-burguer" />
          Contact Me
        </button>
        <div className="flex flex-col px-5 gap-2">
          <h1 className="text-white font-font-family font-normal text-xl">
            Conect
          </h1>
          <div className="flex flex-row gap-2">
          
            <a href={props.buttonHref}>
              <FaGithub className="w-8 h-8" />
            </a>
            <a href={props.buttonHref}>
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
