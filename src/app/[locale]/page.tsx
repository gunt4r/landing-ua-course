import Header     from "@/components/layout/Header";
import Footer     from "@/components/layout/Footer";

import Hero        from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import About       from "@/components/sections/About";
import ForWhom     from "@/components/sections/ForWhom";
import Results     from "@/components/sections/Results";
import Program     from "@/components/sections/Program";
import AfterCourse from "@/components/sections/AfterCourse";
import FAQ         from "@/components/sections/FAQ";
import FinalCTA    from "@/components/sections/FinalCTA";

export const metadata = {
  title: "AImodelsacademy",
  description: "Твій навчальний курс по монетизації. Цікаво? Приємного!",  
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SocialProof />
        <About />
        <ForWhom />
        <Results />
        <Program />
        <AfterCourse />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
