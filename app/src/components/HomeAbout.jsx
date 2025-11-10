import React from "react";
import { Briefcase, Rocket, Globe } from "lucide-react";
import Drpeter from "../assets/images/Drpeter.png"
import Button from "./Button";
import {motion as Motion} from "framer-motion"
import SectionHeaderText from "./SectionHeaderText";
export default function HomeAbout({show = true}) {
  return (
    <section className="relative py-10 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* ===== IMAGE SIDE ===== */}
        <div className="relative w-full h-full">
          {/* Polygon background under the image */}
          <div className="absolute -bottom-8 left-0 w-full h-2/3 bg-primary clip-polygon z-0"></div>

          {/* Main image */}
          <div className="relative z-10 overflow-hidden shadow-lg">
            <img
              src={Drpeter}
              alt="About our company"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Top-right: Projects count */}
        <div className="absolute top-0 lg:top-6 right-6 flex flex-col items-center">
            <div className="flex items-center gap-4 ml-14">
                <Briefcase className="text-primary w-6 h-6" />
                <h3 className="leading-none">120+</h3>
            </div>

            {/* Rotated label */}
            <p className="text-sm text-primary uppercase origin-top-right rotate-270">Projects Done</p>
        </div>


          {/* Bottom-right: Years of experience */}
          <Motion.div 
          animate={{
            y:[0,-8,0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        }}
          className="absolute z-10 bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 shadow-md flex items-center gap-3">
            <h1 className="text-primary">25</h1>
            <p className="text-header-text/80 leading-4 text-xs">Years of<br />Experience</p>
          </Motion.div>
        </div>

        {/* ===== TEXT SIDE ===== */}
        <div className="flex flex-col gap-5">
        <SectionHeaderText title="ABOUT OUR COMPANY" />

          <h1 className="font-extrabold text-4xl">Empowering Digital Growth Worldwide</h1>
          <p className="text-gray-700 leading-relaxed">
            We are a technology-driven company passionate about helping businesses
            transform through innovative web, mobile, and network solutions. Our team
            combines creativity, strategy, and technical expertise to deliver solutions
            that empower brands and optimize performance.
          </p>

          <div className="flex items-center gap-6 group">
            <div className="flex shrink-0 items-center justify-center h-[100px] w-[100px] rounded-full bg-muted/30 group-hover:bg-primary transition-all duration-500 ease-in-out transform group-hover:rotate-180 group-hover:-scale-100">
                <Rocket size={60} className="text-primary group-hover:text-white transition-colos duration-500"/>
            </div>
            <div className="flex flex-col gap-4">
                <h4>End-to-End Developemt</h4>
                <p className="text-header-text">We build reliable, scalable apps from idea to launch.</p>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="flex shrink-0 items-center justify-center h-[100px] w-[100px] rounded-full bg-muted/30 group-hover:bg-primary transition-all duration-500 ease-in-out transform group-hover:rotate-360 group-hover:-scale-100">
                <Globe size={60} className="text-primary group-hover:text-white transition-colos duration-500"/>
            </div>
            <div className="flex flex-col gap-4">
                <h4>IT Consulting & Network Solutions</h4>
                <p className="text-header-text">We design secure networks for smarter businesses.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            With years of practical experience, we take pride in delivering technology
            that is both reliable and forward-thinking. At our core, we believe that
            innovation and collaboration lead to lasting digital success.
          </p>
          {show && <Button hoverBg="primary" variant="muted" className="rounded-none md:w-1/2 uppercase py-3 px-10 font-extrabold hover:text-secondary">
            discover more
          </Button>}
        </div>
      </div>
    </section>
  );
}
