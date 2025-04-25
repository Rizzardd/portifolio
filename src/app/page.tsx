import FifthSection from "@/domains/home/components/FifthSection";
import FirstSection from "@/domains/home/components/FirstSection";
import FourthSection from "@/domains/home/components/FourthSection";
import SecondSection from "@/domains/home/components/SecondSection";
import ThirdSection from "@/domains/home/components/ThirdSection";
import Divider from "@/shared/components/Divider";
import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Divider />
      <Footer buttonHref="https://github.com/Rizzardd" />
    </div>
  );
}
