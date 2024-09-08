import Navbar from "../../components/Navbar";
import Afterhero from "./AfterHero";
import CareerHero from "./CareerHero";
import CareerMarquee from "./CareerMarquee";
import MorethanJob from "./MorethanJob";
import Separator from "../../components/Separator";
import StartJourney from "./StartJourney";
import Footer from "../../components/Footer";

const CareersPage = () => {
  return (
    <main className="bg-[#FAF5EF]">
      <Navbar color={"text-white"} />

      <section>
        <CareerHero />
      </section>

      <section>
        <Afterhero />
      </section>

      <section className="py-4">
        <CareerMarquee />
      </section>

      <section>
        <MorethanJob />
      </section>

      <Separator />

      <section>
        <StartJourney />
      </section>

      <Footer />
    </main>
  );
};

export default CareersPage;
