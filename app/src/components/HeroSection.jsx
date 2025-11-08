import { motion as Motion } from "framer-motion";
import Button from "./Button";
import bg from '../assets/backgrounds/bg.jpg';
import { SquareArrowOutUpRight } from "lucide-react";
import ParticlesComponent from "./Particles";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen text-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      <div className="absolute inset-0 hidden lg:block">
        <ParticlesComponent />
      </div>
      {/* Content */}
      <Motion.div
        className="relative z-10 px-6 sm:px-12 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Motion.h1
          className="text-4xl sm:text-6xl text-secondary font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Bold Ideas  
          <span className="text-primary"> & </span>
          Smart Technology
        </Motion.h1>

        <Motion.p
          className="text-muted text-lg sm:text-xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          At FastWeb, we design, develop, and deploy high-performing digital
          experiences that help your business grow faster online.
        </Motion.p>

        <Motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <Button variant="black" hoverBg="primary" icon={SquareArrowOutUpRight} iconPosition="right">
            {`Let's Talk`}
          </Button>
          <Button
            variant="outline"
            className="px-6 py-3 hover:text-black"
            hoverBg="secondary"
          >
            Read More
          </Button>
        </Motion.div>
      </Motion.div>
    </section>
  );
}
