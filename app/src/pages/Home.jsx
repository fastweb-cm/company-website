import HeroSection from "../components/HeroSection";
import HomeAbout from "../components/HomeAbout";
import HomeHeroCard from "../components/HomeHeroCard";
import { services } from "../utils/data";

const Home = () => {
  return (
    <div>
      <HeroSection />

      {/* Services Section */}
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
      <div className="px-4 md:px-8">
        <HomeAbout />
      </div>
    </div>
  );
};

export default Home;
