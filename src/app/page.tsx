import Header from "@/components/common/Header";
import FifthSection from "@/components/home/FifthSection";
import FirstSection from "@/components/home/FirstSection";
import FourthSection from "@/components/home/FourthSection";
import SecondSection from "@/components/home/SecondSection";
import ThirdSection from "@/components/home/ThirdSection";

import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Header/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
    </div>
  );
}
