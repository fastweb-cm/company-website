import { motion as Motion } from "framer-motion";

export default function HomeHeroCard({ icon: Icon, title, subtitle }) {
  return (
    <Motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="relative overflow-hidden flex flex-col border-t-4 gap-4 border-primary items-center justify-center shadow-md bg-secondary p-6 cursor-pointer group"
    >
      {/* Hover background slide-up */}
      <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        {/* Icon wrapper with independent hover color */}
        <div className="flex items-center justify-center h-[100px] w-[100px] rounded-full bg-muted/30 group-hover:bg-primary transition-colors duration-500">
          {Icon && <Icon size={60} className="text-primary group-hover:text-white transition-colors duration-500" />}
        </div>

        <h4 className="font-extrabold group-hover:text-white transition-colors duration-500">
          {title}
        </h4>

        <p className="text-header-text text-center transition-colors duration-500">
          {subtitle}
        </p>
      </div>
    </Motion.div>
  );
}
