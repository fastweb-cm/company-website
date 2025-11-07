import ContactSection from "../components/ContactSection";
import Faq from "../components/Faq";
import HeroSection from "../components/HeroSection";
import HomeAbout from "../components/HomeAbout";
import HomeCountdown from "../components/HomeCountdown";
import HomeCTA from "../components/HomeCTA";
import HomeHeroCard from "../components/HomeHeroCard";
import HomeProjects from "../components/HomeProjects";
import HomeServices from "../components/HomeServices";
import HomeTeam from "../components/HomeTeam";
import Testimonial from "../components/Testimonial";
import { services } from "../utils/data";

const Home = () => {
  return (
    <div>
      <HeroSection />

      {/* top Services Section */}
      <section className="px-4 md:px-8 my-10 md:-mt-10">
        <div className="flex flex-wrap justify-center gap-6 mx-auto">
          {services.map((service, index) => (
            <div className="flex-1 min-w-[300px] max-w-[350px]">
              <HomeHeroCard
                key={index}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
              />
            </div>
          ))}
        </div>
      </section>

      {/* about section */}
      <section className="px-4 md:px-8">
        <HomeAbout />
      </section>

      {/* services */}
      <section className="my-10">
        <HomeServices />
      </section>

      {/* projects */}
      <section className="my-10">
        <HomeProjects />
      </section>

      {/* countdown */}
      <section className="my-10 px-4 md:px-8">
        <HomeCountdown />
      </section>

      {/* call to action */}
      <section className="my-10">
        <HomeCTA />
      </section>

      {/* our team */}
      <section className="my-10">
        <HomeTeam />
      </section>

      {/* testimonial  */}
      <section className="mt-10">
        <Testimonial />
      </section>

      <section className="my-10">
        <Faq />
      </section>

      <section className="my-10">
        <ContactSection />
      </section>

    </div>
  );
};

export default Home;
