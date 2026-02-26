import { useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import pattern from "../assets/backgrounds/pattern.jpg";
import SectionHeaderText from "./SectionHeaderText";
import { projects } from "../utils/data";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeProjects({show = true}) {
  const scrollRef = useRef(null);

  // Auto scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollBy({
          left: scrollContainer.offsetWidth,
          behavior: "smooth",
        });
        // Loop back when reaching the end
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    };

    const interval = setInterval(scroll, 10000); // every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full bg-center bg-cover bg-no-repeat text-white py-16 px-4 overflow-hidden"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        {/* Header Section */}
        {show && <div className="flex flex-col md:flex-row gap-6 md:justify-between items-center">
          <div className="flex flex-col gap-4 md:w-1/2">
            <SectionHeaderText title="RECENTLY COMPLETED WORK" color="text-white/90" />
            <h4 className="text-4xl lg:text-5xl capitalize text-secondary leading-tight">
              improve & enhance the best tech projects
            </h4>
          </div>
          <p className="text-muted/40 md:w-1/2 leading-relaxed">
            We’ve built innovative digital solutions across industries — from
            web platforms to mobile applications that deliver real impact.
          </p>
        </div>}

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="mt-10 flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              className="relative min-w-full sm:min-w-[80%] lg:min-w-[32%] h-[500px] bg-center bg-cover bg-no-repeat rounded-none overflow-hidden group"
              style={{ backgroundImage: `url(${project.image})` }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Overlay layers */}
              <div className="absolute inset-0 bg-black/70 z-0"></div>
              <div className="absolute inset-0 bg-primary group-hover:opacity-70 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

              {/* Hover top-right button */}
              <div className="absolute top-10 right-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20">
                <Link to={`/projects/${project.slug}`}>
                  <button className="flex items-center justify-center shrink-0 h-12 w-12 rounded-full border border-white text-white hover:bg-white/10 cursor-pointer transition">
                    <MoveRight size={16} />
                  </button>
                </Link>
              </div>

              {/* Text content */}
              <Link to={`/projects/${project.slug}`} className="relative z-10 flex flex-col justify-end h-full p-6 gap-4">
                <h4 className="text-secondary text-md">{project.title}</h4>
                <p className="text-primary group-hover:text-white/80">
                  {project.category}
                </p>
              </Link>
            </Motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
